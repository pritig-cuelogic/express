var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost'+'/fpc_db' , function(err) {
	if(err) {
		throw err;
	}
	console.log("Connected to database ") ; 
});

module.exports = mongoose;
