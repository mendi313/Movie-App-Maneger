let users = require('../models/usersCollectionModel');

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
    FirstName: obj.FirstName,
    LastName: obj.LastName,
    CreatedDate: obj.CreatedDate,
    SessionTimeOut: obj.SessionTimeOut,
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
      FirstName: obj.FirstName,
      LastName: obj.LastName,
      CreatedDate: obj.CreatedDate,
      SessionTimeOut: obj.SessionTimeOut,
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
