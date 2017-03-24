var express = require('express');
var logger = require('morgan');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', __dirname+ '/view');
app.locals.pagetitle = 'pagetitle';

routes.index(app);
app.use(function(req, res, next) {
  console.log("middleware %s %s", req.method, req.url)
  next();
});

routes.about(app);
var server = app.listen(3000, function(){
	console.log("listining on port 3000");
});
