var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var cors = require('cors');
var app = express();

var routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', __dirname+ '/view');
app.locals.pagetitle = 'pagetitle';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());


app.use(logger(':method :url :status'));
app.use(cors());

app.use('/', routes);
/*app.use(function(req, res, next) {
  console.log("middleware %s %s", req.method, req.url)
  next();
});*/


var server = app.listen(3000, function(){
	console.log("listining on port 3000");
});
