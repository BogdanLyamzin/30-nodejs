const express = require("express");

const {productSchema} = require("../../schemas");
const {controllerWrapper, validation} = require("../../middlewares");
const {products: ctrl} = require("../../controllers");

const router = express.Router();

/*
1. Получить все товары.
2. Получить один товар по id.
3. Добавить товар.
4. Обновить товар по id.
5. Удалить товар по id.
*/

router.get("/", controllerWrapper(ctrl.getAll));

router.get("/:id", controllerWrapper(ctrl.getById));

router.post("/", validation(productSchema), controllerWrapper(ctrl.add));

router.put("/:id", validation(productSchema), controllerWrapper(ctrl.updateById));

router.delete("/:id", controllerWrapper(ctrl.removeById));

module.exports = router;