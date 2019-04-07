//Query
var express = require('express');

var app = express();

app.get('/', (req, res) => {
    const { str1, str2 } = req.query;
    const greetingText = `${str1} ${str2}`;

    res.send(`<html><body><h1 style='align: center'>${greetingText}</h1></body></html>`)
});

app.listen(8000, () => {
    console.log('Listening in port 8000');
})