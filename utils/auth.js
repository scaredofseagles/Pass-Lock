const bcrypt = require("bcryptjs");

const hashPassword = async password => {
  let salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const authenticatePass = async (hash, password) => {
  return await bcrypt.compare(password, hash);
};

module.exports = { hashPassword, authenticatePass };
