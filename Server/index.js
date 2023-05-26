import express from "express";
import fetch from "node-fetch";
import { parse } from "node-html-parser";

const app = express();

app.get("/rolling-news", async (req, res) => {
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
      res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
      res.json({ news });
    } else {
      throw new Error("fail");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
