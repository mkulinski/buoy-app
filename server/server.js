const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
// const userController = require('./controllers/userController');

const mongoURI = 'mongodb://localhost:27017/buoy';
mongoose.connect(mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client')));


app.listen(3000, () => {
  console.log('server running');
});
