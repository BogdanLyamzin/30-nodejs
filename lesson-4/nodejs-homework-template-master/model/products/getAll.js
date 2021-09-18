const products = require("./products.json");
/*
const data = fs.readFileSync("./products.json");
const products = JSON.parse(data);
*/
const getAll = async() => products;

module.exports = getAll;