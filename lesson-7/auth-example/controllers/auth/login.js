const {BadRequest, NotFound} = require("http-errors");
const bcrypt = require("bcryptjs");

const {User} = require("../../models");

const login = async(req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email}, "_id email password");
    if(!user || !user.comparePassword(password)){
        throw new BadRequest("Invalid email or password");
    }
    // if(!user){
    //     throw new NotFound(`Email ${email} not found`);
    //     // res.status(404).json({
    //     //     status: "error",
    //     //     code: 404,
    //     //     message: `Email ${email} not found`
    //     // });
    //     // return;
    // }
    // if(!user.comparePassword(password)){
    //     throw new BadRequest("Invalid password");
    // }
    // if(!bcrypt.compareSync(password, user.password)){
    //     throw new BadRequest("Invalid password");
    //     // res.status(400).json({
    //     //     status: "error",
    //     //     code: 400,
    //     //     message: "Invalid password"
    //     // });
    //     // return;
    // }
    const token = "ghsdfsdfsfg.hsgfdhdghdh.dfgdhdhsdsasa";
    res.json({
        status: "success",
        code: 200,
        data: {
            token
        }
    })
};

module.exports = login;