const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const { User } = require("../../models");
const { RequestError } = require("../../utilities");
const { registerSchema } = require("../../schemas");

const register = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    throw RequestError(400, error.message);
  }
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const result = await User.create({
    email,
    password: hashPassword,
    subscription,
    avatarURL,
  });
  res.status(201).json({
    status: "Created",
    code: 201,
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = register;
