import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function mangerMain() {

  return (
    <div className="App">
      <h2>manger Main</h2><br />
      welcome {sessionStorage["name"]} <br /> <br />
      <Link to="/movies">
        <input type="button" value="Movies" />
      </Link>
      &emsp;
      <Link to="/subscriptions">
        <input type="button" value="subscriptions" />
      </Link>
      &emsp;
      <Link to="/manageUsers">
        <input type="button" value="manageUsers" />
      </Link>
      &emsp;
      <Link to="/">
        <input type="button" value="Logout" />
      </Link>


    </div>
  );
}
export default mangerMain;
