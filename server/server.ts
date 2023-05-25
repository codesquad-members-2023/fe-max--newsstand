import express from "express";
import fs from "fs";

const app = express();
const port = 8080;

// CORS 허용 설정
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "http://localhost:5173");
  response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  response.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/rolling-news", (request, response) => {
  const path = "./crawler/rolling.json";

  fs.readFile(path, "utf-8", (error, data) => {
    if (error) {
      response.status(500).json({ error: "Failed to read rolling-news.json" });

      return;
    }

    try {
      const jsonData = JSON.parse(data);

      response.json(jsonData);
    } catch {
      response.status(500).json({ error: "Failed to parse JSON data" });
    }
  });
});

app.listen(port, () => {
  console.log("서버가 8080번 포트에서 실행 중입니다.");
});
