import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import membersUtils from '../utils/membersUtils'
import userCollictionUtils from '../utils/userCollictionUtils'


function User(props) {

  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(async () => {
    let res = await userCollictionUtils.getById(props.id);
    setUserData(res.data);
    let resp = await membersUtils.getById(props.id);
    setUser(resp.data);
  }, []);

  const deleteUser = async (id) => {
    await userCollictionUtils.deletUser(id);
    await membersUtils.deletUser(id);
    alert("user deleted");
    window.location.reload();
  }

  return (
    <div style={
      {
        border: '2px solid black',
        marginRight: '50%',
        marginTop: '10px',
        marginBottom: '10px'
      }}>
      Name : <span>&nbsp;</span>{user.name}<br></br>
            User Name : <span>&nbsp;</span>{user.username}<br></br>
            Seesion Time Out(Minutes) :<span>&nbsp;</span>{userData.SessionTimeOut}<br></br>
            Created Date: {userData.CreatedDate}<br></br>
            permissions:<br></br>
      <Link to={`/updateUser/${user._id}`}>
        <br /><input type="button" value="Edit" />
      </Link>
      <input type="button" value="delete" onClick={() => deleteUser(`${user._id}`)} />
    </div>
  );
}
export default User;
