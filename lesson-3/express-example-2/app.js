const express = require("express");

const products = require("./products");

const app = express();

// app.set("space", 8);
// app.set("json replacer", " ");

app.get("/products", (req, res) => {
    res.json({
        status: "success",
        data: {
            result: products
        }
    });
    // res.json(null);
    // res.send(null);
});

app.post("/products", (req, res)=> {
    res.send({
        message: "товар успешно добавлен"
    });
});

app.listen(3000);