var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var controller = require('../controllers/mainController');
 
passport.use(new LocalStrategy({ usernameField: 'username', passwordField: 'password' }, 
    function(username, password, done) {
    	controller.users(username).then(function(result){
    		if(!result){
  				return done(null, false, {message: 'unkown user'});
  			}
    		if(password != result.password) {
  				return done(null, false, {message: 'password not match'});
  			}
  			else{
  				return done(null, result);
  			}
      })
      .catch(function(err){
        throw error;
      });
    }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

exports.authentication = passport.authenticate('local', {
			  	successRedirect: "/about",
			  	failureRedirect: "/login"
			  });
