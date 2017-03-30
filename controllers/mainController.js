var deviceManager = require('../models/datamodel.js');

exports.index =  function (req, res) {
deviceManager.deviceData().then(function(result){
	res.render('default', {title: "Home Page",
	 		classname: 'home',
			device: result
			 }
		);
	})
	.catch(function(err){
       console.log(err);
});

};

exports.about = function (req, res) {
 res.render('default', {
 		title: "About Page",
		classname: 'about'
	}
);
};

exports.login = function (req, res) {
 res.render('default', {
 		title: "Login",
		classname: 'login'
	}
);
};

exports.users = function(username) {
	return deviceManager.userData(username);
}

