const { BASE_URL } = process.env;

const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_balank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`,
  };
  return mail;
};

module.exports = createVerifyEmail;
