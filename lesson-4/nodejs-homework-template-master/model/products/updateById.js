const updateProducts = require("./updateProducts");
const getAll = require("./getAll");

const updateById = async(id, data) => {
    const products = await getAll();
    const idx = products.findIndex(item => item.id === id);
    if(idx === -1){
        return null;
    }
    const updateProduct = {...products[idx], ...data};
    products[idx] = updateProduct;
    await updateProducts(products);
    return updateProduct;
};

module.exports = updateById;