import axios from 'axios';

const url = "http://localhost:8000/api/login"

let getAll = async () => {
  let resp = await axios.get(url);
  return resp;
}


let post = async (obj) => {

  let resp = await axios.post(url, obj);
}
export default { getAll, post }
