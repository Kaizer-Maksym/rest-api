const handleSaveErrors = (error, data, next) => {
  const { name } = error;
  error.status = name === "ValidationError" ? 400 : 500;

  next();
};

module.exports = handleSaveErrors;
