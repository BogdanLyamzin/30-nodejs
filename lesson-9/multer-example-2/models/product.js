const {Schema, model} = require("mongoose");

const productSchema = Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    }
}, {versionKey: false, timestamps: true});

const Product = model("product", productSchema);

module.exports = {
    Product
}