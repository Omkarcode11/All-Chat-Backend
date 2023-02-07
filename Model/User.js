const { hash } = require('bcrypt');
const crypto = require('crypto');

module.exports = (connection, datatypes) => {
  let User = connection.define('user', {
     id:{
      type:datatypes.BIGINT,
      autoIncrement:true,
      primaryKey:true
     },
     username: {
      type: datatypes.STRING,
      unique : true,
      allowNull:false,
    },
    name: {
      type: datatypes.STRING,
      allowNull: false,
    },
    email: {
      type: datatypes.STRING,
      allowNull: false,
    },
    password: {
      type: datatypes.STRING,
      allowNull: false,
    },
  });
  return User;
};
