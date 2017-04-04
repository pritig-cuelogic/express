var mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;

var mockgoose = new Mockgoose(mongoose);
before(function(done) {
    mockgoose.prepareStorage().then(function() {
        mongoose.connect('mongodb://localhost' + '/fpc_db', function(err) {
        	console.log(err);
            done(err);
            console.log("Connected to database ");
        });
    });
});
module.exports = mongoose;
