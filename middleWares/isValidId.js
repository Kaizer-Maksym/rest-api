const { isValidObjectId } = require("mongoose");
const { RequestError } = require("../utilities");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  const result = isValidObjectId(id);
  if (!result) {
    next(RequestError(400, "Invalid id format"));
  }
  next();
};

module.exports = isValidId;
