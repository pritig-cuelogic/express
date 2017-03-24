var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error);

mongoose.connect('mongodb://localhost'+'/fpc_db' , function(err) {
	if(err) {
		Config.errorLog.error("Error in database connection") ; 
		if (err) throw err;
	}
	console.log("Connected to database ") ; 
});

module.exports = mongoose;
