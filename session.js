const express = require('express');
const session = require('express-session')
const app = express();

app.use(session({ 
    secret: 'keyboardcat',
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    var sess = req.session;
    if(sess.views) {
        sess.views++;
    } else {
        sess.views = 1;
    }
    console.log(sess.views);
    next();
});

app.get('/', (req, res) => {
    res.send(`count = ${req.session.views}`);
});

app.listen(8000, () => {
    console.log('Listening to port 8000');
})