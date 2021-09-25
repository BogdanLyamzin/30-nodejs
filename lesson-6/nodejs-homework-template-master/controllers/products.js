const {NotFound} = require("http-errors");

const {sendSuccessRes} = require("../helpers");
const {Product} = require("../models");

const getAll = async(req, res)=> {
    const result = await Product.find({}, "_id name price code active");
    sendSuccessRes(res, {result});
};

const getById = async(req, res)=> {
    const {id} = req.params;
    const result = await Product.findById(id, "_id name price code active");
    // const result = await Product.findOne({_id: id}, "_id name price code active");
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    sendSuccessRes(res, {result});
}

const add = async(req, res)=>{
    const result = await Product.create(req.body);
    sendSuccessRes(res, {result}, 201);
}

const updateById = async(req, res)=> {
    const {id} = req.params;
    const result = await Product.findByIdAndUpdate(id, req.body, {new: true});
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    sendSuccessRes(res, {result});
}

const updateActive = async(req, res)=> {
    const {id} = req.params;
    const {active} = req.body;
    const result = await Product.findByIdAndUpdate(id, {active}, {new: true});
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    sendSuccessRes(res, {result});
}

const updateCode = async(req, res)=> {
    const {id} = req.params;
    const {code} = req.body;
    const result = await Product.findByIdAndUpdate(id, {code}, {new: true});
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    sendSuccessRes(res, {result});
}

const removeById = async(req, res)=>{
    const {id} = req.params;
    const result = await Product.findByIdAndDelete(id);
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
    removeById,
    updateActive,
    updateCode
}