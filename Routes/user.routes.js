const express = require('express')
const userRouter = express.Router()
const userController = require('./../Controller/user.controller')



userRouter.get('/',userController.getAllUsers)
userRouter.post('/add',userController.addUser)
userRouter.post('/get',userController.getUser)



module.exports = userRouter