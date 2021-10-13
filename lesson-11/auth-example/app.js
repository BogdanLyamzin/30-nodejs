const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const ordersRouter = require("./routes/api/orders");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res)=>{
    res.status(404).json({
        status: "error",
        code: 404,
        message: "Not Found"
    })
});

app.use((error, req, res, next)=>{
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({
        status: "error",
        code: status,
        message
    })
});

const {DB_HOST, PORT = 3000} = process.env;
// const {DB_USER, DB_USER_PASS, DB_NAME} = process.env;
// const DB_HOST = `mongodb+srv://${DB_USER}:${DB_USER_PASS}@cluster0.fbkoo.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> app.listen(PORT))
.catch(error => {
    console.log(error.message);
    process.exit(1);
});