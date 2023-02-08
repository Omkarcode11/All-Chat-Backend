const express = require('express')
const conversationRouter = express.Router()
const conversationController = require('./../Controller/conversation.controller')


conversationRouter.post('/',conversationController.addConversation)
conversationRouter.get('/:username1/:username2',conversationController.getConversation)




module.exports = conversationRouter