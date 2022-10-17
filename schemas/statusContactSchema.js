const Joi = require("joi");

const statusContactSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = statusContactSchema;
