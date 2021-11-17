let members = require('../models/membersModel');

exports.getAll = function () {
  return new Promise((resolve, reject) => {
    members.find({}, function (err, user) {
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
    members.findById(id, function (err, user) {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
};

exports.addUser = function (obj) {
  const newUser = new members({
    name: obj.name,
    username: obj.username,
    email: obj.email,
    address: {
      street: obj.address.street,
      suite: obj.address.suite,
      city: obj.address.city,
      zipcode: obj.address.zipcode,
      geo: {
        lat: obj.address.geo.lat,
        lng: obj.address.geo.lng,
      },
    },
    phone: obj.phone,
    website: obj.website,
    company: {
      name: obj.company.name,
      catchPhrase: obj.company.catchPhrase,
      bs: obj.company.bs,
    },
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
  members.findByIdAndUpdate(
    id,
    {
      name: obj.name,
      username: obj.username,
      email: obj.email,
      address: {
        street: obj.address.street,
        suite: obj.address.suite,
        city: obj.address.city,
        zipcode: obj.address.zipcode,
        geo: {
          lat: obj.address.geo.lat,
          lng: obj.address.geo.lng,
        },
      },
      phone: obj.phone,
      website: obj.website,
      company: {
        name: obj.company.name,
        catchPhrase: obj.company.catchPhrase,
        bs: obj.company.bs,
      },
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
    members.findByIdAndDelete(id, function (err, car) {
      if (err) {
        reject(err);
      } else {
        resolve('deleted !');
      }
    });
  });
};
