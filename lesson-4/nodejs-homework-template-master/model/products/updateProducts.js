const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "products.json");

const updateProducts = async(newProducts) => {
    await fs.writeFile(filePath, JSON.stringify(newProducts));
};

module.exports = updateProducts;