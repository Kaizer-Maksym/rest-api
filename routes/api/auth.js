const express = require("express");

const { auth: ctrl } = require("../../controllers");

const { ctrlWrapper } = require("../../utilities");
const { authenticate } = require("../../middleWares");

const router = express.Router();

router.post("/register", ctrlWrapper(ctrl.register));
router.post("/login", ctrlWrapper(ctrl.login));
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

module.exports = router;
