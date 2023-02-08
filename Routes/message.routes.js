const express = require('express')
const messageRouter = express.Router()
const messageController = require('./../Controller/message.controller')



messageRouter.post('/add',messageController.addMessage)
messageRouter.get('/get/:conversationId',messageController.getMessage)


module.exports = messageRouter