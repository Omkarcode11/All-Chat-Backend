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
        const username1= req.params.username1
        const username2= req.params.username2
        let conversations = await db.conversation.findOrCreate({
          where: {
            members: {
              [Op.and]: [{ [Op.substring]: username1 }, { [Op.substring]: username2 }],
            },
          },
          defaults: {
            members: username1+","+username2,
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
