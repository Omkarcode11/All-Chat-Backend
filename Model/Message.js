
 module.exports = (connection,datatypes)=>{
    const Message = connection.define('message',{
        id:{
            type:datatypes.BIGINT,
            autoIncrement : true,
            primaryKey: true
        },
        conversationId : {
            type:datatypes.STRING,
            allowNull : false
        },
        sender: {
            type : datatypes.STRING
        },
        text:{
            type : datatypes.STRING
        }
    })
    return Message
 }