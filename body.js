const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + '/public'));

app.post('/add', urlencodedParser, (req, res) => {
    const result = parseInt(req.body.a) + parseInt(req.body.b);
    res.send('result = ' + result);
});

app.listen(8000, () => {
    console.log('Listening to port 8000');
})