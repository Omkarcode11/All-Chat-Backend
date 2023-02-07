const db = require('./../Model/index');
const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat');

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const api_id = process.env.STREAM_APP_ID;

const getAllUsers = async (req, res) => {
  let allUsers = await db.user.findAll();
  res.status(200).json(allUsers);
  res.end();
};

const addUser = async (req, res) => {
  if (req.body.name.length < 2 || req.body.email.length < 5 || req.body.password < 3) {
    res.send('Enter Value for Creating account');
    return;
  }
  try {
    const { name, password } = req.body;
    const serverClient = connect(api_key, api_secret, api_id);
    const hashedPassword = await bcrypt.hash(password, 10);
   let user =  await db.user.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      username:req.body.username
    });
    res.status(200).json(user);
    res.end();
  } catch (err) {
    res.status(400).json(err);
    res.end();
  }
};

const getUser = async (req, res) => {
  try {
    const serverClient = connect(api_key, api_secret, api_id);
    // const client = StreamChat.getInstance(api_key, api_secret);
    let user = await db.user.findOne({
      where: {
        name: req.body.name,
      },
    });
    if (user) {
      const hPassword = await bcrypt.compare(req.body.password, user.password);
      if (hPassword) {
        // const token = serverClient.createUserToken(user.id);
        res.status(200).json({name: user.name, id: user.id});
        return;
      } else {
        res.status(300).send('Your Password is Wrong');
        return;
      }
    } else {
      res.status(400).send('user not found sign up first');
      return;
    }
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
    res.end();
  }
};

module.exports = { getAllUsers, addUser, getUser };
