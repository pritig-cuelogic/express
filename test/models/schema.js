var MongooseConn = require('./connection.js');
const Schema = MongooseConn.Schema;

var DeviceSchema = new Schema({
    device_id: {type: String, unique: true, required: true},
    device_info: {type: Array, required: true},
    ip: {type: Array, required: true},
    imei: {type: Array},
    udid: {type: String},
    browser_fingerprint: {type: Array},
    session_data: {type: Array, required: true},
    duplicates: {type: Array},
    created_on: {type: Date, default: Date()},
    updated_on: {type: Date}
});

var UserSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
});

var Collection = {};
Collection.Device = MongooseConn.model('Device', DeviceSchema);
Collection.User = MongooseConn.model('users', UserSchema);

module.exports = Collection;
