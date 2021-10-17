import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function moveis() {

  return (
    <div className="App">
      <h2>moveis</h2><br />
      welcome {sessionStorage["name"]} <br />


    </div>
  );
}
export default moveis;
