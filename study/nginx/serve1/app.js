const express = require('express');
const app = express();
const port = 3000;

app.get('/serve1', (req, res) => {
    res.send('Hello serve1 World!');
})

app.get('/serve1/test', (req, res) => {
    res.send('Hello serve1 test!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
