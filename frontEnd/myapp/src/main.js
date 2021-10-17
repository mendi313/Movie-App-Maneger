import { useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function LoginComp() {
  const [users, setUser] = useState([]);

  const getUsers = async () => {
    let resp = await axios.get('http://localhost:8000/api/login');
    setUser(resp.data);
  };

  return (
    <div className="App">
      <h2>Main</h2><br />
      welcome {sessionStorage["name"]} <br /> <br />

      <Link to="/movies">
        <input type="button" value="Movies" />
      </Link>
      &emsp;
      <Link to="/subscriptions">
        <input type="button" value="subscriptions" />
      </Link>
      &emsp;
      <Link to="/">
        <input type="button" value="Logout" />
      </Link>

    </div>
  );
}
export default LoginComp;
