const contacts = require("../../models/contacts");
const { RequestError } = require("../../utilities");

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await contacts.getById(id);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = getById;
