const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
  Permissions: [String],
});

module.exports = mongoose.model('permissionsCollection', Schema);
