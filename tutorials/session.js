// Session and Cookies
const express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const app = express();

app.use(cookieParser());
app.use(session({
    secret: 'secret-key',
    saveUninitialized: true,
    resave: true,
}));

app.get('/', (req, res) => {

    res.clearCookie('monster');

    res.cookie('monster', 'the cookie monster value');

    if (req.session.page_views) {
        req.session.page_views++;

        let text = "You visited this page " + req.session.page_views + " times.";
        text += "<br/>Cookie monter value : " + req.cookies.monster;
        res.send(text);
    } else {
        req.session.page_views = 1;
        res.send("Welcome to this page for the first time!");
    }

    console.log(req.cookies);
});

app.listen(3000, () => {
    console.log('App is running at http://localhost:3000');
});