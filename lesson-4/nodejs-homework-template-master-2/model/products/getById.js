const getAll = require("./getAll");

const getById = async(id) => {
    const products = await getAll();
    const product = products.find(item => item.id === id);
    if(!product) {
        return null;
    }
    return product;
}

module.exports = getById;