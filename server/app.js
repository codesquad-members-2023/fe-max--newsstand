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
  const mediaBrands = fs.readFileSync(filePath, { encoding: 'utf8' });
  return res.json(JSON.parse(mediaBrands));
});

app.get('/headlineNews', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'headlineNews.json');
  const headlineNews = fs.readFileSync(filePath, { encoding: 'utf8' });
  return res.json(JSON.parse(headlineNews));
});

app.get('/newsList', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'newsList.json');
  const data = fs.readFileSync(filePath, { encoding: 'utf8' });
  const newsList = JSON.parse(data);

  const index = req.query.index;
  if (!index && index !== 0) {
    return res.json(null);
  }
  const news = newsList[index];
  const categoryList = newsList.filter((item) => item.category === news.category);
  return res.json({
    ...news,
    order: categoryList.indexOf(news) + 1,
    categoryCount: categoryList.length
  });
});

app.get('/newsList/fields', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'newsList.json');
  const data = fs.readFileSync(filePath, { encoding: 'utf8' });
  const newsList = JSON.parse(data);

  const fields = new Set();
  newsList.forEach(({category}) => fields.add(category));

  return res.json([...fields]);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
