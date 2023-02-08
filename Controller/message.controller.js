const db = require('./../Model/index')


const addMessage = async (req,res)=>{
    try{

        const newMessage = await db.message.create(req.body)
        res.status(200).json(newMessage)
        res.end()
    } catch(err){
        res.status(400).json(err)
        res.end()
    }
}


const getMessage =async (req,res)=>{
    try{

        const chats = req.params.conversationId;
        const allChats = await db.message.findAll({where:{
            conversationId : chats
        }})
        res.status(200).send(allChats)
        res.end()
    } catch(err){
        res.status(400).json(err)
        res.end()
    }
}


module.exports = {addMessage,getMessage}