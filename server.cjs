const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.use(express.static('public'));

app.get('/autoRolling', (req, res) => {
	const data = require('./data.json');
	res.json(data.autoRolling);
});

app.get('/grid', (req, res) => {
	const data = require('./data.json');
	res.json(data.grid);
});

app.get('/list', (req, res) => {
	const data = require('./data.json');
	res.json(data.list);
});

app.listen(port, () => {
	console.log(`Express server is running at http://localhost:${port}`);
});
