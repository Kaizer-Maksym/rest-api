const Contact = require("../../models");
const { RequestError } = require("../../utilities");
const { addSchema } = require("../../schemas");

const add = async (req, res, next) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw RequestError(400, error.message);
  }
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

module.exports = add;
