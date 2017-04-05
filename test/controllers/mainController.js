var controller = require('../../controllers/mainController.js');
var deviceModel =  require("../../models/datamodel.js");
var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    sinon = require('sinon'),
    server = require('../../app.js'),
    url,
    chaiAsPromised = require("chai-as-promised");
	var mockHeaders = {
	headers : {
		'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InByaXRpIiwiaWF0IjoxNDkxMjkyNzY3LCJleHAiOjE0OTEyOTQyMDd9.o7NzE6dCgpxcD0VOQl9jWgUNJQztlGOLoBCwBiCvHiQ',
	    'content-type': 'application/x-www-form-urlencoded'
		}
	    
	};
		var resolveData = [{
			 "device_id" : "469efc00-d0d3-11e6-a53a-77f95b5b2901",
			 "session_data" : [ 
			        {
			            "created" : 1483351652287.0,
			            "session_length" : 3600,
			            "tracking_code" : "469a9d9a-d0d3-11e6-8955-022b7c2670ef",
			            "user_id" : "46996092-d0d3-11e6-8954-022b7c2670ef",
			            "session_id" : "469a9d9a-d0d3-11e6-8955-022b7c2670ef"
			        }],
			"browser_fingerprint" : [ 
			        {
			            "fingerprint" : 1705874625,
			            "name" : "Chrome"
			        }
		    ],
		    "ip" : [ 
		        {
		            "public_ip" : "14.141.151.78",
		            "local_ip" : "172.21.32.18"
		        }
		    ]

		}];


chai.use(chaiAsPromised);
describe('mainController index()', function() {

    var deviceManagerStub;
    beforeEach(function() {
    	deviceControllerStub = sinon.stub(deviceModel, 'deviceData');
        deviceControllerStub.resolves(resolveData);
    });
    afterEach(function() {
        deviceControllerStub.restore();
    });
    it('mainController index() should be function', function(done) {
        expect(controller.index).to.be.a('function');
        done();
    });
    it('called function', function(done) {
    		controller.index();
	    	sinon.assert.called(deviceControllerStub);
	    	done();
	  
    });
});

