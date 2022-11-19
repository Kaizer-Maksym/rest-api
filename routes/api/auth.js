const express = require("express");

const { auth: ctrl } = require("../../controllers");

const { ctrlWrapper } = require("../../utilities");
const { authenticate } = require("../../middleWares");
const { upload } = require("../../middleWares");

const router = express.Router();

// signup
router.post("/register", ctrlWrapper(ctrl.register));
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verify));
router.post("/verify", ctrlWrapper(ctrl.resendEmail));

// signin
router.post("/login", ctrlWrapper(ctrl.login));
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
