const Joi = require("joi");

const productJoiSchema = Joi.object({
    name: Joi.string().min(1).required(),
    price: Joi.number().min(0.01).required(),
    location: Joi.string().min(1).required(),
});

const product = {
    "name": "iPhone X",
    "price": 17000,
    // "location": "Apple store"
};

const {error} = productJoiSchema.validate(product);
if(error){
    console.log(error.message)
}
