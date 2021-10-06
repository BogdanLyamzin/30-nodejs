const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const {v4} = require("uuid");
const fs = require("fs/promises");

const tempDir = path.join(__dirname, "temp");
const uploadDir = path.join(__dirname, "public");

const uploadConfig = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, tempDir);
    },
    filename: (req, file, cb)=> {
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 2048
    }
});

const uploadMiddleware = multer({
    storage: uploadConfig
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const products = [];

app.post("/api/products", uploadMiddleware.single("image"), async(req, res)=> {
    const {originalname, path: tempName} = req.file;
    const fileName = path.join(uploadDir, "products", originalname);
    try {
        await fs.rename(tempName, fileName);
        const image = path.join("/products", originalname);
        const newProduct = {...req.body, id: v4(), image};
        products.push(newProduct);
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result: newProduct
            }
        });
    } catch (error) {
        await fs.unlink(tempName);
    }

});

app.get("/api/products", async(req, res)=> {
    res.json(products)
})

app.listen(3000);


