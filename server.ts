import express from "express";
import path from "path";
import ejs from "ejs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { checkEnvVar } from "./src/ts/utils/checkEnvVar";
import { fetchData } from "./src/ts/utils/fetchData";
import { parseRollingData } from "./src/ts/utils/parseRollingData";
import { getDummyNewsData } from "./src/ts/utils/getDummy";
// import { getNewsData } from "./src/ts/utils/getNewsData";

async function createServer() {
  dotenv.config();
  // let time = 0;
  // let loading = "로딩중 현재 소요시간 ";
  // console.log("좀 만 참아줘용.. 5분정도 걸려요..");
  // const loadingKey = setInterval(() => {
  //   time += 1;
  //   console.log(loading + time + "분");
  // }, 60000);
  // const newsData = await getNewsData();
  // clearInterval(loadingKey);

  const newsData = await getDummyNewsData();

  const port = checkEnvVar("PORT");
  const app = express();

  app.set("views", path.resolve(__dirname, "views"));
  app.set("view engine", "ejs");

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.get("/api/rolling", async (req, res) => {
    try {
      const url = checkEnvVar("YNA_URL");
      const data = await fetchData(url!);
      const rolling = parseRollingData(data);

      res.header(
        "Access-Control-Allow-Origin",
        `${checkEnvVar("BASE_URL")}:${port}`
      );
      res.json({ data: rolling });
    } catch (error) {
      console.error("Error:", error);
    }
  });

  app.get("/api/news", async (req, res) => {
    res.header(
      "Access-Control-Allow-Origin",
      `${checkEnvVar("BASE_URL")}:${port}`
    );
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
    console.log(`${process.env.BASE_URL}:${port}/`);
  });
}

createServer();
