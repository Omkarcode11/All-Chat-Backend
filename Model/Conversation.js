const { DataTypes } = require('sequelize');

module.exports = (connection, datatypes) => {
  const Conversation = connection.define('conversation', {
    id: {
      type: datatypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    members: {
      type: DataTypes.STRING,
      allowNull : false
    },
  });
  return Conversation;
};
