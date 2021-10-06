const path = require("path");
const fs = require("fs/promises");

const {Product} = require("../models");

const productsDir = path.join( __dirname, "../", "public/products");

const add = async(req, res)=>{
    const {path: tempStorage, originalname} = req.file;
    try {        
        const newProduct = {
            name: req.body.name,
            photo: "/public/products/default.png"
        };
        const result = await Product.create(newProduct);
        const [extention] = originalname.split(".").reverse();
        const newFileName = `product_main-image_${result._id}.${extention}`;
        const resultStorage = path.join(productsDir, newFileName);
        await fs.rename(tempStorage, resultStorage);
        const photo = path.join("/products", newFileName);
        const product = await Product.findByIdAndUpdate(result._id, {photo}, {new: true});
        res.status(201).json({
            result: product
        });
    } catch (error) {
        await fs.unlink(tempStorage);
        throw error;
    }
};

const getAll = async(req, res)=>{
    const result = await Product.find({});
    res.json(
        result
    )
};

module.exports = {
    add,
    getAll
}