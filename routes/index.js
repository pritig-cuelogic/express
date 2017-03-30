var express = require('express');
var router = express.Router();
var controller = require('../controllers/mainController');
var auth = require('../auth/index');

router.get('/', controller.index);

router.get('/about', controller.about);

router.get('/login', controller.login);

router.post('/login',
	  auth.authentication,
	  function(req, res) {
	    res.redirect('/about');
	  });


module.exports = router;

