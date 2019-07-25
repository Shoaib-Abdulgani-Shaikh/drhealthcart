// https://drhealthcart.herokuapp.com/ | https://git.heroku.com/drhealthcart.git
//Dependencies
const express = require('express')
const app = express(); 
const router = express.Router()
const path = require('path')

// PAYMENT GATEWAY INTEGRATION USING INSTAMOJO
// var Insta = require('instamojo-nodejs');
// Insta.setKeys(API_KEY, AUTH_KEY);

const PORT = process.env.PORT || 5000
var cookieParser = require('cookie-parser')

//session
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);

//sign in with Google
const passport = require('passport');
app.use(session({ resave: true ,secret: '123456' , saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

//BodyParser
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false, useNewUrlParser: true });
app.use(bodyParser.json());


//static files and render engine
app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
 
app.use(cookieParser())


// database
const mongoose = require('mongoose');

var databaseConnection = require('./database/connection');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

app.use('/auth',authRoutes);

//importing controllers
var authCheck = require('./controllers/authcheck')
var indexController = require('./controllers/index');
var callappController = require('./controllers/callapp');
var personalController = require("./controllers/perapp")
var adminController = require("./controllers/admin")
var checkinController = require("./controllers/check_in")

//firing controllers
indexController(app,authCheck);
callappController(app,authCheck);
personalController(app,authCheck);
adminController(app,authCheck);
checkinController(app,authCheck);

// server listening
app.listen(PORT, () => console.log(`Listening on ${ PORT }`) )



// rzp_test_uFbKefVqF8f4Qv
// rzp_test_uFbKefVqF8f4Qv


// 1urBwfG3sj8WJejOAQjAmMrt