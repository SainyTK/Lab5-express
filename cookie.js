const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser('keyboard cat'));

app.get('/ck_get', (req, res) => {
    res.send(req.cookies);
});

app.get('/ck_set', (req, res) => {
    res.cookie('a', 10);
    res.send('OK');
});

app.listen(8000, () => {
    console.log('Listening to port 8000');
});