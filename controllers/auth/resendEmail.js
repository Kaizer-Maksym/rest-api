const { User } = require("../../models");
const {
  RequestError,
  sendEmail,
  createVerifyEmail,
} = require("../../utilities");

const { emailSchema } = require("../../schemas");

const resendEmail = async (req, res) => {
  const { error } = emailSchema.validate(req.body);
  if (error) {
    throw RequestError(400, error.message);
  }

  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw RequestError(404);
  }

  if (user.verify) {
    throw RequestError(400, "Verification has already been passed");
  }

  const mail = createVerifyEmail(email, user.verificationToken);
  await sendEmail(mail);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendEmail;
