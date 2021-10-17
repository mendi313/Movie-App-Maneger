import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import logInUtils from '../utils/logInUtils'
import membersUtils from '../utils/membersUtils'

function LoginComp(props) {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [members, setMebers] = useState([]);

  useEffect(() => {
    membersUtils.getAll().then(res => setMebers(res))
  }, []);

  const createUser = async (e) => {
    e.preventDefault();
    let exsist = members.filter((x) => x.username == username);
    console.log(exsist.length);
    if (exsist.length > 0) {
      console.log('exsist');
      let obj = {
        username: username,
        password: password,
      };
      logInUtils.post(obj);
      alert('User Created !');
      props.history.push('/');
    } else {
      alert('creation was failed');
    }
  };

  return (
    <div className="App">
      <h2>Create an Accont</h2>
      <br />
      <br />
      <form onSubmit={(e) => createUser(e)}>
        User Name :
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        Password :
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <input type="submit" value="create" />
        <br />
        <br />
        <br />
        <Link to="/">
          {' '}
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
      </form>
      <br />

      <br />
    </div>
  );
}
export default LoginComp;
