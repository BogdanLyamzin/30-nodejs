const express = require("express");

const {productSchema} = require("../../schemas");
const productsOperations = require("../../model/products");

const router = express.Router();

/*
1. Получить все товары.
2. Получить один товар по id.
3. Добавить товар.
4. Обновить товар по id.
5. Удалить товар по id.
*/

router.get("/", async(req, res, next)=> {
    try {
        const products = await productsOperations.getAll();
        res.json({
            status: "success",
            code: 200,
            data: {
                result: products
            }
        });
        // res.json({
        //     products
        // });
    }
    catch(error) {
        next(error);
        // res.status(500).json({
        //     status: "error",
        //     code: 500,
        //     message: "Server error"
        // });
    }
});
// GET /api/products/3
router.get("/:id", async(req, res, next)=> {
    try {
        const {id} = req.params;
        const result = await productsOperations.getById(id);
        if(!result){
            const error = new Error(`Product with id=${id} not found`);
            error.status = 404;
            throw error;
            // res.status(404).json({
            //     status: "error",
            //     code: 404,
            //     message: `Product with id=${id} not found`
            // });
            // return;
        }
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        });
    } 
    catch (error) {
        next(error);
    }
});
// POST api/products
router.post("/", async(req, res, next)=>{
    try {
        const {error} = productSchema.validate(req.body);
        if(error){
            const err = new Error(error.message);
            err.status = 400;
            throw err;
        }
        const result = await productsOperations.add(req.body);
        res.status(201).json({
            status: "success",
            code: 201,
            data: {
                result
            }
        });
    } 
    catch (error) {
        next(error);
    }
});

router.put("/:id", async(req, res, next)=> {
    try {
        const {error} = productSchema.validate(req.body);
        if(error){
            const err = new Error(error.message);
            err.status = 400;
            throw err;
        }
        const {id} = req.params;
        const result = await productsOperations.updateById(id, req.body);
        if(!result){
            const error = new Error(`Product with id=${id} not found`);
            error.status = 404;
            throw error;
        }
        res.json({
            status: "success",
            code: 200,
            data: {
                result
            }
        });
    } 
    catch (error) {
        next(error);
    }
});

router.delete("/:id", async(req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await productsOperations.removeById(id);
        if(!result){
            const error = new Error(`Product with id=${id} not found`);
            error.status = 404;
            throw error;
        }
        res.json({
            status: "success",
            code: 200,
            message: "Success delete"
        });
    } 
    catch (error) {
        next(error);
    }
});

module.exports = router;