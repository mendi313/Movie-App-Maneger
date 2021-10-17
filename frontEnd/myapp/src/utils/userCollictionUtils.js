import axios from 'axios';

const url = "http://localhost:8000/api/users"

let getAll = async () => {
  let resp = await axios.get(url);
  return resp;
}

let getById = async (id) => {
  let resp = await axios.get(url + '/' + id);
  return resp;
}


let post = async (obj) => {

  let resp = await axios.post(url, obj);
}

let update = async (id, obj) => {
  let resp = await axios.put(url + '/' + id, obj);
}

let deletUser = async (id) => {

  await axios.delete(url + '/' + id);
}

export default { getAll, post, getById, deletUser, update }
