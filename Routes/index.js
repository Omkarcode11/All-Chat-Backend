const express = require('express');
const conversationRouter = require('./conversation.routes');
const messageRouter = require('./message.routes');
const userRouter = require('./user.routes');
const router = express.Router();

router.use('/user', userRouter);
router.use('/conversation', conversationRouter);
router.use('/message', messageRouter);



router.get('/', (req, res) => {
  res.status(200).send('Home is here');
  res.end();
});

module.exports = router;
