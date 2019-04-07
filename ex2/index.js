const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: 'keyboardCat',
    cookie: { maxAge: 30000 },
    resave: false,
    saveUninitialized: false,
}))

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.post('/login', urlencodedParser, (req, res) => {
    const { email, password } = req.body;
    if (email && password && password === '240311') {
        req.session.email = email;
    } else {
        req.session.destroy((err) => {
            if (err)
                console.log(err)
        })
    }
    res.redirect('/admin');
})

app.get('/admin', (req, res) => {
    const { email } = req.session;
    res.render('admin', {
        user: email
    })
})

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

app.listen(8000, () => {
    console.log('Listening to port 8000');
})