const mongoose = require("mongoose");
require("dotenv").config();

const {DB_HOST} = process.env;

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> {
   
})
.catch(error => {
    console.log(error.message);
})