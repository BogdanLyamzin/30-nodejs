const Joi = require("joi");
const {Schema, model} = require("mongoose");

const codeRegexp = /^[0-9]{5}$/;

const productSchema = Schema({
    name: {
        type: String,
        required: [true, "Имя товара обязательно"]
    },
    description: {
        type: String,
        required: [true, "Описание товара обязательно"],
        minlength: 2
    },
    price: {
        type: Number,
        required: [true, "Цена товара обязательна"],
        min: 0.01
    },
    isActive: {
        type: Boolean,
        default: true
    },
    // status: stock, priceLow, basic
    status: {
        type: String,
        enum: ["stock", "priceLow", "basic"],
        default: "basic"
    },
    code: {
        type: String,
        match: [codeRegexp, "Код - это строка из 5 чисел"],
        required: [true, "Код должен быть обязательно указан"],
        unique: true
    }
}, {versionKey: false, timestamps: true});

const joiSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().min(0.01).required(),
    isActive: Joi.boolean(),
    status: Joi.string(),
    code: Joi.string().pattern(codeRegexp)
});

const Product = model("product", productSchema);

module.exports = {Product, joiSchema};