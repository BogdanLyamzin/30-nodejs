const express = require("express");

const app = express();

app.get("/", (request, response)=>{
    response.send("<h2>Главная страница</h2>");
});

app.get("/contacts", (request, response)=>{
    response.send("<h2>Наши контакты</h2>");
});

app.get("/about-us", (request, response)=> {
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers);
    response.send("<h2>О нас</h2>");
});

app.listen(3000);

