// joi is a freawork to valide the data before calling APIs

var Joi = require('joi');

module.exports = {
    validateBody: (schema) => {
        return (req, res, next) => {
            var result = Joi.validate(req.body, schema);
            if (result.error) {
                return res.status(400).json(result.error);
            }
            if (!req.value) { req.valaue = {}; }
            req.valaue['body'] = result.value;
            next();
        }
    },

    //define a user input object 
    schemas: {
        authSchema: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    }
}