const express = require('express');
const usersCollection = require('../bls/usersCollectionBl');
const router = express.Router();

router.route('/').get(async function (req, resp) {
  let data = await usersCollection.getAll();
  return resp.json(data);
});

router.route('/:id').get(async function (req, resp) {
  let id = req.params.id;
  let data = await usersCollection.getUser(id);
  return resp.json(data);
});

router.route('/').post(async function (req, resp) {
  let obj = req.body;
  let result = await usersCollection.addUser(obj);
  return resp.json(result);
});

router.route('/:id').put(async function (req, resp) {
  let id = req.params.id;
  let obj = req.body;
  let result = await usersCollection.updateUser(id, obj);
  return resp.json(result);
});

router.route('/:id').delete(async function (req, resp) {
  let id = req.params.id;
  let result = await usersCollection.deletetUser(id);
  return resp.json(result);
});

module.exports = router;
