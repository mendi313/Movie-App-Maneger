let users = require('../models/logInModel');

exports.getAll = function () {
  return new Promise((resolve, reject) => {
    users.find({}, function (err, user) {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
};

exports.getUser = function (id) {
  return new Promise((resolve, reject) => {
    users.findById(id, function (err, user) {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
};

exports.addUser = function (obj) {
  const newUser = new users({
    username: obj.username,
    password: obj.password,
  });
  newUser.save(function (err) {
    return new Promise((resolve, reject) => {
      if (err) {
        reject(err);
      } else {
        resolve('creatad !');
      }
    });
  });
};

exports.updateUser = function (id, obj) {
  users.findByIdAndUpdate(
    id,
    {
      username: obj.username,
      password: obj.password,
    },
    function (err) {
      return new Promise((resolve, reject) => {
        if (err) {
          reject(err);
        } else {
          resolve('updated !');
        }
      });
    }
  );
};

exports.deletetUser = function (id) {
  return new Promise((resolve, reject) => {
    users.findByIdAndDelete(id, function (err, car) {
      if (err) {
        reject(err);
      } else {
        resolve('deleted !');
      }
    });
  });
};
