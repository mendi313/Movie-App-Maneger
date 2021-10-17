import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logInUtils from '../utils/logInUtils'
import membersUtils from '../utils/membersUtils'

function LoginComp(props) {
  const [users, setUser] = useState([]);
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [members, setMembers] = useState([]);

  useEffect(async () => {
    let res = await logInUtils.getAll();
    setUser(res.data);
    let resp = await membersUtils.getAll();
    setMembers(resp.data)
  }, []);

  const getUsers = async () => {
    let exsist = users.filter(x => x.username == username && x.password == password)
    if (exsist.length > 0) {
      let user = members.filter(x => x.username == username)
      sessionStorage["id"] = user[0]._id;
      sessionStorage["name"] = user[0].name;
      if (username == "mendi" && password == 4363634) {
        props.history.push('/mangerMain')
      }
      else {
        props.history.push('/main')
      }
    }
    else {
      alert("failed attempt")
    }

  };

  return (
    <div className="App">
      <h2>Log in Page</h2>
      <br />
      <br />
      User Name :<input type="text" name="name" autocomplete="username" onChange={(e) => setName(e.target.value)} />
      <br />
      Password :<input type="text" name="tel" autocomplete="tel" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <input type="button" value="Login" onClick={getUsers} />
      <br />
      New User ?
      <Link to="/createUser">
        {' '}
        <Button variant="contained" color="primary">
          Create Account
        </Button>
      </Link>
      <br />
    </div>
  );
}
export default LoginComp;
