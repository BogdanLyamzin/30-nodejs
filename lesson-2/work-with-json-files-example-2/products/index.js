const {v4} = require("uuid");
const fs = require("fs/promises");
const path = require("path");

const products = require("./products.json");

const filePath = path.join(__dirname, "products.json");

const updateProducts = async(newProducts) => {
    await fs.writeFile(filePath, JSON.stringify(newProducts));
};

const getAll = async() => products;

const getById = async(id) => {
    const product = products.find(item => item.id === id);
    if(!product) {
        return null;
    }
    return product;
}

const add = async(data) => {
    const newProduct = {...data, id: v4()};
    products.push(newProduct);
    await updateProducts(products);
    return newProduct;
}

const updateById = async(id, data) => {
    const idx = products.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
    }
    const updateProduct = {...products[idx], ...data};
    products[idx] = updateProduct;
    await updateProducts(products);
    return updateProduct;
};


module.exports = {
    getAll,
    getById,
    add,
    updateById,
    removeById
}

