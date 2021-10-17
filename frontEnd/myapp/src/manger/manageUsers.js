import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import membersUtils from '../utils/membersUtils'
import userCollictionUtils from '../utils/userCollictionUtils'
import User from '../manger/user'


function MangeUser() {

  const [users, setMembers] = useState([]);

  useEffect(async () => {
    let res = await membersUtils.getAll();
    setMembers(res.data);
  }, []);


  return (
    <div style={{ border: '2px solid black' }}>
      <h2>Users</h2><br />
      <input type="button" value="All Users" />
      <span>&nbsp;&nbsp;</span>
      <Link to="/addNewUser">
        <input type="button" value="Add User" />
      </Link><br />

      {
        users.map((item, index) => {
          return <User key={index} id={item._id} />
        })
      }



    </div >
  );
}
export default MangeUser;
