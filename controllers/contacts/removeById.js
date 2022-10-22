const Contact = require("../../models");
const { RequestError } = require("../../utilities");

const removeById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({
    message: "Delete success",
  });
};

module.exports = removeById;
