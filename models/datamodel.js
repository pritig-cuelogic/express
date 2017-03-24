const DataBaseSchema = require('./schema.js');
const Device = DataBaseSchema.Device;
const Promise = require('bluebird');
var deviceManager = {};

deviceManager.deviceData = function(){
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

module.exports = deviceManager;