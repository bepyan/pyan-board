const bcrypt = require("bcrypt");

const bcryptCompare = (data, hash) => {
  const match = bcrypt.compareSync(data, hash);
  return match;
};

const bcryptHash = (data) => {
  const saltRounds = 10;
  const code = bcrypt.hashSync(data, saltRounds);
  console.log(code);
  return code;
};

module.exports = { bcryptCompare, bcryptHash }