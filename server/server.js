import express from 'express';
import cors from 'cors';
import db from '../db.json' assert { type: 'json' };

const express = require('express');
const app = express();
const port = 8080;

app.use(cors());

app.get('/headline', (req, res) => res.status(200).json(db.headline));
app.get('/press', (req, res) => res.status(200).json(db.pressList));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
