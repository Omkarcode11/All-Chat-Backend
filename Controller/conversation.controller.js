const { Op } = require('sequelize');
const db = require('./../Model/index');

const addConversation = async (req, res) => {
    try{

        let conversation = await db.conversation.create({
            members : req.body.members
        });
        res.status(200).json(conversation);
        res.end();
    } catch(err){
        res.status(400).json(err)
        res.end()
    }
};


const getConversation = async (req,res)=>{
    try{
        const username= req.params.username
        let conversations = await db.conversation.findAll({
          where: {
            members: {
              [Op.substring]: 'pica',
            },
          },
        });
        res.status(200).json(conversations)
        res.end()
     } catch(err){
        console.log(err)
        res.status(500).json(err)
        res.end()
     }
}

module.exports = { addConversation ,getConversation };
