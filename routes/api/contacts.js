const express = require("express");

const { contacts: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../utilities");
const { isValidId } = require("../../middleWares");
const { authenticate } = require("../../middleWares");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));

router.get("/:id", authenticate, isValidId, ctrlWrapper(ctrl.getById));

router.post("/", authenticate, ctrlWrapper(ctrl.add));

router.delete("/:id", authenticate, isValidId, ctrlWrapper(ctrl.removeById));

router.put("/:id", authenticate, isValidId, ctrlWrapper(ctrl.updateById));

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
