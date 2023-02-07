const sequelize = require('sequelize');
let env = 'development'
const dbConfig = require('../config/db.config')[env];

let db = {}

db.connection = new sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host : dbConfig.HOST,
    dialect : dbConfig.DIALECT,
    operatorAliases : 0,
     pool : dbConfig.POOL 
})


db.sequelize = sequelize
db.user = require('./User')(db.connection,sequelize.DataTypes)
db.message = require('./Message')(db.connection,sequelize.DataTypes)
db.conversation = require('./Conversation')(db.connection,sequelize.DataTypes)


module.exports = db