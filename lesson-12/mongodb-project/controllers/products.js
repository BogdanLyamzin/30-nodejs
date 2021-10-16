const {NotFound} = require("http-errors");

const {Product} = require("../models");
const {sendSuccessReq} = require("../helpers");

const getAll = async(req, res) => {
    const result = await Product.find({}, "_id name description price isActive status code");
    sendSuccessReq(res, {result});
};

const getById = async(req, res) => {
    const {id} = req.params;
    const result = await Product.findById(id, "_id name description price isActive status code");
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    sendSuccessReq(res, {result});
};

const add = async(req, res)=>{
    const result = await Product.create(req.body);
    sendSuccessReq(res, {result}, 201);
};

const removeById = async(req, res) => {
    const {id} = req.params;
    const result = await Product.findByIdAndDelete(id);
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    sendSuccessReq(res, {result});
};

const updateById = async(req, res)=> {
    const {id} = req.params;
    const result = await Product.findByIdAndUpdate(id, req.body, {new: true});
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    sendSuccessReq(res, {result});
};

const updateStatus = async(req, res) => {
    const {id} = req.params;
    const {status} = req.body;
    const result = await Product.findByIdAndUpdate(id, {status}, {new: true});
    if(!result){
        throw new NotFound(`Product with id=${id} not found`);
    }
    sendSuccessReq(res, {result});
};

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    removeById,
    updateStatus
}