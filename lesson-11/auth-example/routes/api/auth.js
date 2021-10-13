const express = require("express");

const {joiSchema} = require("../../models/user");
const {controllerWrapper, validation, authenticate} = require("../../middlewares");
const {auth: ctrl} = require("../../controllers");

const router = express.Router();

// api/auth/register
router.post("/register", validation(joiSchema), controllerWrapper(ctrl.register));
// router.post("/signup")

router.get("/verify/:verifyToken", controllerWrapper(ctrl.verify));

router.post("/login", validation(joiSchema), controllerWrapper(ctrl.login));
// router.post("/signin")

router.get("/logout", authenticate, controllerWrapper(ctrl.logout));
// router.get("/signuot")

module.exports = router;