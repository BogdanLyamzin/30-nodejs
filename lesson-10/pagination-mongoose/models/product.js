const {Schema, model} = require("mongoose");
const Joi = require("joi");

const codeRegexp = /^[0-9]{9}$/; // newRegexp("^[0-9]{9}$")

const productSchema = Schema({
    name: {
        type: String,
        required: [true, "Название товара обязательно"]
    },
    price: {
        type: Number,
        required: [true, "Цена товара обязательно"],
        min: 0.01
    },
    code: {
        type: String,
        unique: true,
        match: codeRegexp
    },
    active: {
        type: Boolean,
        default: true
    }
}, {versionKey: false, timestamps: true});

const joiSchema = Joi.object({
    name: Joi.string().required(),
    price:Joi.number().min(0.01).required(),
    code: Joi.string().pattern(codeRegexp).required(),
    active: Joi.boolean()
});

const updateActiveJoiSchema = Joi.object({
    active: Joi.boolean().required()
});

const Product = model("product", productSchema);

module.exports = {
    joiSchema,
    updateActiveJoiSchema,
    Product
};