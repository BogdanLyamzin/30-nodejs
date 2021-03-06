const Joi = require("joi");

const productSchema = Joi.object({
    name: Joi.string().min(1).required(),
    price: Joi.number().min(0.01).required(),
    location: Joi.string().min(1).required(),
});

module.exports = productSchema;