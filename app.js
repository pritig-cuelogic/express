var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var boom = require('express-boom');

var cors = require('cors');
var app = express();

var routes = require('./routes')

app.set('view engine', 'ejs');
app.set('views', __dirname+ '/view');
app.locals.pagetitle = 'pagetitle';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(boom());

app.use(logger(':method :url :status'));
app.use(cors());

app.use('/', routes);
app.use(function (err, req, res, next) {
    if (err.isBoom) {
         return res.status(err.output.statusCode).json(err.output.payload);
    }
});

var server = app.listen(3000, function(){
	console.log("listining on port 3000");
});
module.exports = app;
