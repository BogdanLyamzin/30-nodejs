const {NotFound} = require("http-errors");

const {sendSuccessRes} = require("../helpers");
const productsOperations = require("../model/products");

const getAll = async(req, res)=> {
    const result = await productsOperations.getAll();
    sendSuccessRes(res, {result});
    // res.json({
    //     status: "success",
    //     code: 200,
    //     data: {
    //         result: products
    //     }
    // });
};

const getById = async(req, res)=> {
    const {id} = req.params;
    const result = await productsOperations.getById(id);
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    sendSuccessRes(res, {result});
}

const add = async(req, res)=>{
    const result = await productsOperations.add(req.body);
    sendSuccessRes(res, {result}, 201);
}

const updateById = async(req, res)=> {
    const {id} = req.params;
    const result = await productsOperations.updateById(id, req.body);
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    sendSuccessRes(res, {result});
}

const removeById = async(req, res, next)=>{
    const {id} = req.params;
    const result = await productsOperations.removeById(id);
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    sendSuccessRes(res, {message: "Success delete"});
};

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    removeById
}