import express from "express";
import path from "path";
import ejs from "ejs";
import { createServer as createViteServer } from "vite";
import fetch from "node-fetch";
import { parse } from "node-html-parser";
import { getNewsData } from "./utils/getNewsData";

async function createServer() {
  let time = 0;
  let loading = "로딩중 현재 소요시간 ";
  console.log("좀 만 참아줘용.. 5분정도 걸려요..");
  const loadingKey = setInterval(() => {
    time += 1;
    console.log(loading + time + "분");
  }, 60000);
  const newsData = await getNewsData();
  clearInterval(loadingKey);

  const port = 5173;
  const app = express();

  app.set("views", path.resolve(__dirname, "views"));
  app.set("view engine", "ejs");

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.get("/api/rolling", async (req, res) => {
    try {
      const response = await fetch(
        "https://www.yna.co.kr/news?site=navi_latest_depth01"
      );
      if (response.status == 200) {
        const data = await response.text();
        const dom = parse(data);
        const news = Array.from(dom.querySelectorAll("a.tit-wrap")).map(
          (titWrap) => {
            return {
              href: titWrap.getAttribute("href"),
              textContent: titWrap.textContent.trim(),
            };
          }
        );
        res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
        res.json({ news });
      } else {
        throw new Error("fail");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });

  app.get("/api/news", async (req, res) => {
    res.json(newsData);
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      ejs.renderFile(
        path.resolve("src", "views", "index.ejs"),
        { title: "뉴스스탠드" },
        async (err, htmlTemplate) => {
          if (err) {
            console.error("Failed to render EJS template", err);
            return;
          }

          const viteTransformedTemplate = await vite.transformIndexHtml(
            url,
            htmlTemplate
          );

          const { render } = await vite.ssrLoadModule(
            "/src/ts/entry-server.ts"
          );

          const appHtml = await render(url);

          const finalHtml = viteTransformedTemplate.replace(
            `<!--ssr-outlet-->`,
            appHtml
          );

          res.status(200).set({ "Content-Type": "text/html" }).end(finalHtml);
        }
      );
    } catch (e: any) {
      if (vite) {
        vite.ssrFixStacktrace(e);
      }

      console.error("Error occurred:", e);

      next(e);
    }
  });

  app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
  });
}

createServer();
