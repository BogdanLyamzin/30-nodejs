const {Conflict} = require("http-errors");
const {nanoid} = require("nanoid");

const {User} = require("../../models");

const {sendEmail}= require("../../helpers");

const register = async(req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        throw new Conflict("Already register");
    }
    const verifyToken = nanoid();
    const newUser = new User({
        email, 
        verifyToken
    });
    newUser.setPassword(password);
    await newUser.save();

    const data = {
        to: email,
        subject: "Подтверждения регистрации на сайте",
        html: `
            <a href="http://localhost:3000/api/auth/verify/${verifyToken}" target="_blank">Подтвердить почту</a>
            `
    }

    await sendEmail(data);
    res.status(201).json({
        status: "success",
        code: 201,
        message: "Success register",
        data: {
            verifyToken
        }
    });
};

module.exports = register;