import { useState, useEffect } from 'react';
import axios from 'axios';

const url = "http://localhost:8000/api/members"

let getAll = async () => {
  let resp = await axios.get(url);
  return resp;
}

let getById = async (id) => {
  let resp = await axios.get(url + '/' + id);
  return resp;
}

let update = async (id, obj) => {
  let resp = await axios.put(url + '/' + id, obj);
}

let deletUser = async (id) => {

  await axios.delete(url + '/' + id);
}
export default { getAll, getById, deletUser, update };
