import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function subscriptions() {

  return (
    <div className="App">
      <h2>subscriptions</h2><br />
      welcome {sessionStorage["name"]}


    </div>
  );
}
export default subscriptions;
