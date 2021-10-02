const {Order} = require("../../models");

const getAll = async(req, res)=>{
    const result = await Order.find({}, "_id content owner");
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    })
};

module.exports = getAll;