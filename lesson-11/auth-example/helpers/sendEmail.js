const nodemailer = require("nodemailer");

const {EMAIL_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "mail.adm.tools",
    port: 465,
    secure: true,
    auth: {
        user: "info@ntonyartist.com",
        pass: EMAIL_PASSWORD
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async(data)=> {
    const email = {
        ...data, 
        from: "info@ntonyartist.com",
    }
    await transporter.sendMail(email);
};

module.exports = sendEmail;
