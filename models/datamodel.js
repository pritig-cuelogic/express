const DataBaseSchema = require('./schema.js');
const Device = DataBaseSchema.Device;
const User = DataBaseSchema.User;
const Promise = require('bluebird');
var deviceManager = {};

deviceManager.deviceData = function(){
    console.log("device data");
     return new Promise(function(resolve, reject){
        var condition = {} ;
        Device.find(condition, function(error, response){
            if(error) {
                reject(error);
            }else{
               resolve(response);
            }
        });
	});
};

deviceManager.userData = function(username){
    return new Promise(function(resolve, reject){
        User.findOne({username: username}, function(error, response){
            if(error){
                reject(error);
            }
            else{
                resolve(response);
            }
        });
    });
};

module.exports = deviceManager;
