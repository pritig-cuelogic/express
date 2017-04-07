var express = require('express');
var router = express.Router();
var controller = require('../controllers/mainController');
var auth = require('../auth/index');

var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
};

router.get('/', isAuthenticated,  controller.index);

router.get('/about', isAuthenticated, controller.about);

router.get('/login', controller.login);

router.post('/login',
	  auth.authentication,
	  function(req, res) {
	    res.redirect('/about');
	  });



module.exports = router;

