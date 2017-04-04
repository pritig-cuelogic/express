var express = require('express');
var router = express.Router();
var ExpressJoi = require('express-joi-validator');
var controller = require('../controllers/mainController');
var auth = require('../auth/index');
var jwt    = require('jsonwebtoken');
var validPayload = require('../models/validator.js');

router.get('/login', controller.login);

router.post('/login', ExpressJoi(validPayload) ,auth.authentication);

router.use(function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token){
  		jwt.verify(token, 'secret', function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        req.decoded = decoded;    
        next();
      }
    });
  }
  else{
  	return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
  }
});

router.get('/', controller.index);

router.get('/about', controller.about);

module.exports = router;
