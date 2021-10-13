const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_KEY} = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const email = {
    to: "tokkagudru@vusra.com",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Новая заявка с сайта",
    html: `<p><strong>Email клиента:</strong> bogdan.lyamzin.d@gmail.com</p>
            <p><strong>Телефон клиента:</strong> 8-067 555-55-55</p>`
};

sgMail.send(email)
    .then(()=> console.log("Email success send"))
    .catch(error => console.log(error.message))