const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.use(express.static('public'));

app.get('/data', (req, res) => {
	res.sendFile(__dirname + '/data.json');
});

app.listen(port, () => {
	console.log(`Express server is running at http://localhost:${port}`);
});
