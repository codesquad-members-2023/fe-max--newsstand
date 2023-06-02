import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;
const corsOptions = {
  origin: 'http://127.0.0.1:5173'
};

app.use(cors(corsOptions));

app.get('/mediaBrands', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'mediaBrands.json');
  const mediaBrands = fs.readFileSync(filePath, {encoding: 'utf8'});
  return res.json(JSON.parse(mediaBrands));
});

app.get('/headlineNews', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'headlineNews.json');
  const headlineNews = fs.readFileSync(filePath, { encoding: 'utf8' });
  return res.json(JSON.parse(headlineNews));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
