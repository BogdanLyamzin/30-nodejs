const {Schema, model} = require("mongoose");

const categorySchema = Schema({
    name: String,
    description: String
});

const Category = model("category", categorySchema);

module.exports = Category;
