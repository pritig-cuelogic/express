var Joi = require('joi');

var validPayload = {
    body: {
        username: Joi.string().required(),
        password: Joi.string().required()
    }
};
module.exports = validPayload ;
