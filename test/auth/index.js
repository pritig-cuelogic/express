var jwt    = require('jsonwebtoken');
var boom = require('express-boom');
var controller = require('../controllers/mainController');

exports.authentication = function (req, res, next) {
        var data = req.body;
        controller.users(data.username).then(function(result){
        var response; console.log(result.username);
        if(!result){
           res.boom.badRequest("unkown user");
           
        }
        else if(data.password != result.password) {
            res.boom.badRequest("password not match");
          }
        else{
            var token = jwt.sign({username: result.username}, 'secret', {
            expiresIn: 1440
          });
          response = {token: token, status: 'pass'};
          res.json(response);
        }
        
      })
      .catch(function(err){
        res.boom.badRequest("error time of login",err);
      });
}
