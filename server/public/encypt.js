const bcrypt = require("bcrypt");

const encyptCompare = async (newData, exData) => {
    try {
      const result = await bcrypt.compare(newData, exData);
      return result;
    } catch (error) {
      console.error(error);
    }
};

const getEncyptCode = async (data, salt) => {
    const hashPassword = await bcrypt.hash(data, salt);
    return hashPassword;
};

module.exports = {}