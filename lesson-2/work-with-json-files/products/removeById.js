const getAll = require("./getAll");
const updateProducts = require("./updateProducts");

const removeById = async(id) => {
    const products = await getAll();
    const idx = products.findIndex(item => item.id === id);
    if(idx === -1) {
        return null;
    }
    // const newProducts = products.filter(item => item.id !== id);
    products.splice(idx, 1);
    await updateProducts(products);
    // await updateProducts(newProducts);
    return "Success remove"
}

module.exports = removeById;