const express = require('express');
const membersBl = require('../bls/membersBl');
const router = express.Router();

router.route('/').get(async function (req, resp) {
  let data = await membersBl.getAll();
  return resp.json(data);
});

router.route('/:id').get(async function (req, resp) {
  let id = req.params.id;
  let data = await membersBl.getUser(id);
  return resp.json(data);
});

router.route('/').post(async function (req, resp) {
  let obj = req.body;
  let result = await membersBl.addUser(obj);
  return resp.json(result);
});

router.route('/:id').put(async function (req, resp) {
  let id = req.params.id;
  let obj = req.body;
  let result = await membersBl.updateUser(id, obj);
  return resp.json(result);
});

router.route('/:id').delete(async function (req, resp) {
  let id = req.params.id;
  let result = await membersBl.deletetUser(id);
  return resp.json(result);
});

module.exports = router;
