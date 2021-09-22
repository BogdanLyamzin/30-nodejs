const mongoose = require("mongoose");
require("dotenv").config();

const {Category} = require("./models");

const {DB_HOST} = process.env;

const newCategory = {
    name: "tablets",
    description: "Самый широкий выбор планшетов!",
    image: "./category.jpg"
};

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async()=> {
    try {
        const result = await Category.create(newCategory);
        console.log(result);
    } catch (error) {
        console.log(error.message)
    }
    // Category.create(newCategory, (error, data)=>{
    //     console.log(error);
    //     console.log(data);
    // });
    // console.log("Database connect success");
})
.catch(error => {
    console.log(error.message);
})