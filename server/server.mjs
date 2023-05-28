import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const port = 8080;

app.use(cors());
app.get("/rolling", (req, res) => {
  const data = fs.readFileSync("server/data/rolling.json", "utf8");
  res.json(JSON.parse(data));
});

app.get("/grid", (req, res) => {
  const data = fs.readFileSync("server/data/grid.json", "utf8");
  res.json(JSON.parse(data));
});

app.get("/list", (req, res) => {
  const data = fs.readFileSync("server/data/list.json", "utf8");
  res.json(JSON.parse(data));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

