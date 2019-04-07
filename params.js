const express = require('express');

const app = express();

app.get('/:str1/:str2', (req, res) => {
    const { str1, str2 } = req.params;
    const greetingText = `${str1} : ${str2}`;
    res.send(`<html><body><h1 style='align: center'>${greetingText}</h1></body></html>`)
});


app.listen(8000, () => {
    console.log('Listening to port 8000');
})
