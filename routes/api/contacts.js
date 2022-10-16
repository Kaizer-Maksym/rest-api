const express = require("express");
const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../utilities");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.add));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

router.put("/:id", ctrlWrapper(ctrl.updateById));

module.exports = router;
