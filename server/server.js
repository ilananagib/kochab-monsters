const express = require('express');
const app = express();
const PORT = 5000;
const kochabMonsters = require('./module/monsters');

app.use(express.static('server/public'));

app.get('/monsters', (req, res) => {
    res.send(kochabMonsters);
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});