const express = require('express');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/fruit', (req, res) => {
    res.render('fruit', {
        fruits: ['banana', 'orange'],
        foo: 'bar'
    })
})

app.listen(8000, ()=> {
    console.log('Listening to port 8000')
})