const Contact = require("../../models");
const statusContactSchema = require("../../schemas");
const { RequestError } = require("../../utilities");

const updateStatusContact = async (req, res, next) => {
  const { error } = statusContactSchema.validate(req.body);
  if (error) {
    throw RequestError(400, error.message);
  }
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateStatusContact;
