const {v4} = require("uuid");

const updateProducts = require("./updateProducts");
const getAll = require("./getAll");

const add = async(data) => {
    const products = await getAll();
    const newProduct = {...data, id: v4()};
    products.push(newProduct);
    // const newProducts = [...products, newProduct];
    await updateProducts(products);
    // await updateProducts(newProducts);
    return newProduct;
}

module.exports = add;



