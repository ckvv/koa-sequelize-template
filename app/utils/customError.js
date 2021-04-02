class CustomError extends Error {
  constructor({ code, msg }, message) {
    super(message || msg);
    this.code = code;
  }
}

module.exports = CustomError;
