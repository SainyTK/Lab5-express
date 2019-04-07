const express = require('express');

const app = express();

app.use(express.static(__dirname + '/images'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/computer', (req, res) => {
    res.render('computer', {
        osList: [
            {
                name: 'Windows',
                image: 'windows.png'
            },
            {
                name: 'OSX',
                image: 'osx.png'
            },
            {
                name: 'Android',
                image: 'android.png'
            },
            {
                name: 'IOS',
                image: 'ios.png'
            },
        ]
    })
})

app.listen(8000, () => {
    console.log('Listening to port 8000');
})