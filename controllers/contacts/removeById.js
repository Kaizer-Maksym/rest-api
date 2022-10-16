const contacts = require("../../models/contacts");
const { RequestError } = require("../../utilities");

const removeById = async (req, res, next) => {
  const { id } = req.params;
  const result = await contacts.removeContact(id);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({
    message: "Delete success",
  });
};

module.exports = removeById;
