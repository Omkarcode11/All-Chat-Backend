const express = require('express')
const conversationRouter = express.Router()
const conversationController = require('./../Controller/conversation.controller')


conversationRouter.post('/',conversationController.addConversation)
conversationRouter.get('/:username',conversationController.getConversation)




module.exports = conversationRouter