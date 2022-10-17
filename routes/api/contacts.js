const express = require("express");

const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../utilities");
const { isValidId } = require("../../middleWares");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.add));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));

router.put("/:id", isValidId, ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", isValidId, ctrlWrapper(ctrl.updateStatusContact));

module.exports = router;
