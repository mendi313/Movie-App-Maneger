let movies = require('../models/moviesModel');

exports.getAll = function () {
  return new Promise((resolve, reject) => {
    movies.find({}, function (err, user) {
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
    movies.findById(id, function (err, user) {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
};

exports.addUser = function (obj) {
  const newUser = new movies({
    url: obj.url,
    name: obj.name,
    type: obj.type,
    language: obj.language,
    genres: obj.genres,
    status: obj.status,
    runtime: obj.runtime,
    premiered: obj.premiered,
    officialSite: obj.officialSite,
    schedule: {
      time: obj.schedule.time,
      days: obj.schedule.days,
    },
    rating: {
      average: obj.rating.average,
    },
    weight: obj.weight,
    network: {
      id: obj.network.daidys,
      name: obj.network.name,
      country: {
        name: obj.network.country.name,
        code: obj.network.country.code,
        timezone: obj.network.country.timezone,
      },
    },
    webChannel: obj.webChannel,
    externals: {
      tvrage: obj.externals.tvrage,
      thetvdb: obj.externals.thetvdb,
      imdb: obj.externals.imdb,
    },
    image: {
      medium: obj.image.medium,
      original: obj.image.original,
    },
    summary: obj.summary,
    updated: obj.updated,
    _links: {
      self: {
        href: obj._links.self.href,
      },
      previousepisode: {
        href: obj._links.previousepisode.href,
      },
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
  movies.findByIdAndUpdate(
    id,
    {
      url: obj.url,
      name: obj.name,
      type: obj.type,
      language: obj.language,
      genres: obj.genres,
      status: obj.status,
      runtime: obj.runtime,
      premiered: obj.premiered,
      officialSite: obj.officialSite,
      schedule: {
        time: obj.schedule.time,
        days: obj.schedule.days,
      },
      rating: {
        average: obj.rating.average,
      },
      weight: obj.weight,
      network: {
        id: obj.network.daidys,
        name: obj.network.name,
        country: {
          name: obj.network.country.name,
          code: obj.network.country.code,
          timezone: obj.network.country.timezone,
        },
      },
      webChannel: obj.webChannel,
      externals: {
        tvrage: obj.externals.tvrage,
        thetvdb: obj.externals.thetvdb,
        imdb: obj.externals.imdb,
      },
      image: {
        medium: obj.image.medium,
        original: obj.image.original,
      },
      summary: obj.summary,
      updated: obj.updated,
      _links: {
        self: {
          href: obj._links.self.href,
        },
        previousepisode: {
          href: obj._links.previousepisode.href,
        },
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
    movies.findByIdAndDelete(id, function (err, car) {
      if (err) {
        reject(err);
      } else {
        resolve('deleted !');
      }
    });
  });
};
