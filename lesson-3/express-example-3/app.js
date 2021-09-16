const express = require("express");
const fs = require("fs/promises");
const moment = require("moment");
const cors = require("cors");

const products = require("./products");

const app = express();

app.use(cors());

// 15.09.2021_21:03:54 GET /products
// 15.09.2021_21:04:05 POST /products

// app.use(async (req, res, next)=> {
//     const {url, method} = req;
//     const now = moment().format("DD.MM.YYYY_hh:mm:ss");
//     const data = `\n${now} ${method} ${url}`;
//     await fs.appendFile("server.log", data);
//     next();
// });

// app.use((req, res, next)=> {
//     console.log("First middleware");
//     next();
// });

// app.use((req, res)=> {
//     console.log("Second middleware");
//     next();
// });

app.get("/products", (req, res)=> {
    res.json(products);
});

app.post("/products", (req, res)=> {
    res.json({
        message: "Товар успешно добавлен"
    })
});

// app.use((req, res, next)=> {
//     console.log("Last middleware");
// });



app.listen(3000);