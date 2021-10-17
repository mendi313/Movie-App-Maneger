const express = require('express');
const permissionsCollectionBl = require('../bls/permissionsCollectionBl');
const router = express.Router();

router.route('/').get(async function (req, resp) {
  let data = await permissionsCollectionBl.getAll();
  return resp.json(data);
});

router.route('/:id').get(async function (req, resp) {
  let id = req.params.id;
  let data = await permissionsCollectionBl.getUser(id);
  return resp.json(data);
});

router.route('/').post(async function (req, resp) {
  let obj = req.body;
  let result = await permissionsCollectionBl.addUser(obj);
  return resp.json(result);
});

router.route('/:id').put(async function (req, resp) {
  let id = req.params.id;
  let obj = req.body;
  let result = await permissionsCollectionBl.updateUser(id, obj);
  return resp.json(result);
});

router.route('/:id').delete(async function (req, resp) {
  let id = req.params.id;
  let result = await permissionsCollectionBl.deletetUser(id);
  return resp.json(result);
});

module.exports = router;
