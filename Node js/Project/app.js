const express = require("express");
const path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
const app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));
app.use("/static", express.static(__dirname + "/public"));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');

 const IndexRouter = require('./routes/index');
 const LoginRouter = require('./routes/login');
 const ContactRouter = require('./routes/contact');
 const BlogRouter = require('./routes/blog');
 const AboutRouter = require('./routes/about');
 const PortfolioRouter = require('./routes/portfolio');
 const ProfileRouter = require('./routes/profile');

 app.use('/', IndexRouter);
 app.use('/portfolio', PortfolioRouter);
 app.use('/blog', BlogRouter);
 app.use('/about', AboutRouter);
 app.use('/contact', ContactRouter);
 app.use('/login', LoginRouter);
 app.use('/profile', ProfileRouter);


app.listen(3000, () => {
    console.log('Server is listening')
})


