const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  CreatedDate: String,
  SessionTimeOut: String,
});

module.exports = mongoose.model('usersCollection', Schema);
