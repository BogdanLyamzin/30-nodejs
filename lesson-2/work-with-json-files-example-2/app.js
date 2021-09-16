const productsOperations = require("./products");

/*
1. Получить все товары.
2. Получить один товар по id.
3. Добавить товар.
4. Обновить товар по id.
5. Удалить товар по id.
*/

const workWithProducts = async(type = "getAll", id, data)=> {
    try {
        switch(type){
            case "getAll":
                return await productsOperations.getAll();
            case "getById":
                return await productsOperations.getById(id);
            case "add":
                return await productsOperations.add(data);
            case "updateById":
                return await productsOperations.updateById(id, data);
            case "removeById":
                return await productsOperations.removeById(id);
        }
    }
    catch(error){
        throw error;
    }
};

// workWithProducts("getAll")
//     .then(data => console.log(data[0]))
//     .catch(error => console.log(error));

const id = "767580d5-f509-4f45-98f9-28e74ec4af66";
const updateId = "45e49510-98ee-408a-ba8a-459c8cc254d3";

// workWithProducts("getById", id)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// const newData = {
//     name: "iPhone X",
//     price: 18000,
//     location: "Apple store"
// };

// workWithProducts("add", "", newData)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// const updateData = {
//     name: "iPhone X",
//     price: 16000,
//     location: "Apple store"
// };

// workWithProducts("updateById", updateId, updateData)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

workWithProducts("removeById", updateId)
    .then(data => console.log(data))
    .catch(error => console.log(error));