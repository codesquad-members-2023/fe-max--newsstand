import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3000;

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('<h1>Express + TypeScript</h1>');
});

app.listen(port, () => {
  console.log(`I love you ${port}`);
});
