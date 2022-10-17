const Joi = require("joi");
const phoneRegexp = /^\(\d{3}\)\s\d{3}-\d{4}$/;

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
  favorite: Joi.boolean(),
});

module.exports = {
  addSchema,
};
