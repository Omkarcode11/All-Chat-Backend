const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Routes');
const app = express();
const db = require('./Model/index');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
require('dotenv').config();

// db.connection.sync({ force: true });

app.use(cors());
app.use(bodyParser.json());
// app.use(express.urlencoded);
app.use(router);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
