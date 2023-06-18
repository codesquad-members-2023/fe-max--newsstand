import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';

const app: Express = express();
const port = 3000;

app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Express & TypeScript');
});

app.get('/breakingNews', (_req: Request, res: Response) => {
  const data = fs.readFileSync('server/data/oneLineData.json', 'utf8');
  res.status(200).send(JSON.parse(data));
});

// app.get('/gridData', (_req: Request, res: Response) => {
//   const data = fs.readFileSync('server/data/gridData.json', 'utf8');
//   res.status(200).send(JSON.parse(data));
// });

app.get('/newsData', (_req: Request, res: Response) => {
  const data = fs.readFileSync('server/data/newsStandData.json', 'utf8');
  res.status(200).send(JSON.parse(data));
});

app.listen(port, () => {
  console.log(`I love you ${port}`);
});
