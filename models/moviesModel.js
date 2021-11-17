const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
  url: String,
  name: String,
  type: String,
  language: String,
  genres: [String],
  status: String,
  runtime: Number,
  premiered: String,
  officialSite: String,
  schedule: {
    time: String,
    days: [String],
  },
  rating: {
    average: Number,
  },
  weight: Number,
  network: {
    id: Number,
    name: String,
    country: {
      name: String,
      code: String,
      timezone: String,
    },
  },
  webChannel: Number,
  externals: {
    tvrage: Number,
    thetvdb: Number,
    imdb: String,
  },
  image: {
    medium: String,
    original: String,
  },
  summary: String,
  updated: Number,
  _links: {
    self: {
      href: String,
    },
    previousepisode: {
      href: String,
    },
  },
});

module.exports = mongoose.model('movies', Schema);
