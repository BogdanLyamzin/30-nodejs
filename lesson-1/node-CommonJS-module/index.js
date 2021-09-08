// const nodemon = require("nodemon");
// const users = require("./users");

// console.log(users);

// const obj = require("./users");

// console.log(obj);

// const {clients} = require("./users");

// console.log(clients);

// const dateFunctions = require("./date");
// const {getCurrentMonth} = require("./date");
// const getCurrentMonth = require("./date/getCurrentMonth")

// const {getCurrentMonth} = require("./date");

// console.log(`Текущий месяц - ${getCurrentMonth()}`)

const currentMonth = require("./date/getCurrentMonth")();

console.log(`Текущий месяц - ${currentMonth}`);






