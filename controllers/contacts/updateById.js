const contacts = require("../../models/contacts");
const { RequestError } = require("../../utilities");
const { addSchema } = require("../../schemas/contacts");

const updateById = async (req, res, next) => {
  const { error } = addSchema.validate(req.body);
  if (error) {
    throw RequestError(400, error.message);
  }
  const { id } = req.params;
  const result = await contacts.updateContact(id, req.body);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateById;
