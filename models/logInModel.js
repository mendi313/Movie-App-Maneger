const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
  username: String,
  password: Number,
});

module.exports = mongoose.model('userslogin', Schema);
