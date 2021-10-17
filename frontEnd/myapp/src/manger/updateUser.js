import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import membersUtils from '../utils/membersUtils'
import userCollictionUtils from '../utils/userCollictionUtils'


function UpdateUser(props) {

  const [memberData, setMember] = useState([]);
  const [userData, setUser] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [userName, setUserName] = useState([]);
  const [timeOut, setTime] = useState([]);
  const [CreatedDate, setCD] = useState([]);


  useEffect(async () => {
    let user = await userCollictionUtils.getById(props.match.params.id);
    let members = await membersUtils.getById(props.match.params.id);
    setMember(members.data);
    setUser(user.data);
    setFirstName(user.data.FirstName);
    setLastName(user.data.LastName);
    setUserName(members.data.username);
    setTime(user.data.SessionTimeOut);
    setCD(user.data.CreatedDate);

  }, []);

  const customSumbit = async (e) => {
    e.preventDefault();
    let obj = memberData;
    let myobj = {
      name: firstName + ' ' + lastName,
      username: userName,
      email: obj.email,
      address: {
        street: obj.address.street,
        suite: obj.address.suite,
        city: obj.address.city,
        zipcode: obj.address.zipcode,
        geo: {
          lat: obj.address.geo.lat,
          lng: obj.address.geo.lng,
        },
      },
      phone: obj.phone,
      website: obj.website,
      company: {
        name: obj.company.name,
        catchPhrase: obj.company.catchPhrase,
        bs: obj.company.bs
      }
    }
    let obj1 = {
      FirstName: firstName,
      LastName: lastName,
      CreatedDate: CreatedDate,
      SessionTimeOut: timeOut
    }
    await membersUtils.update(props.match.params.id, myobj)
    await userCollictionUtils.update(props.match.params.id, obj1)
    alert("user updated");
    props.history.push("/manageUsers")
  }

  return (
    <div style={
      {
        border: '2px solid black',
        marginRight: '50%',
        marginTop: '10px',
        marginBottom: '10px'
      }}>
      <form onSubmit={e => customSumbit(e)} >
        First Name : <span>&nbsp;</span><input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" /><br></br>
            Last Name : <span>&nbsp;</span><input value={lastName} onChange={e => setLastName(e.target.value)} type="text" /><br></br>
            User Name : <span>&nbsp;</span><input value={userName} onChange={e => setUserName(e.target.value)} type="text" /><br></br>
            Seesion Time Out(Minutes) :<span>&nbsp;</span><input value={timeOut} onChange={e => setTime(e.target.value)} type="text" /><br></br>
            Created Date: {userData.CreatedDate}<br></br>
            permissions:<br></br>
        <input type="submit" value="update" />

        <Link to="/manageUsers">
          <input type="button" value="cancel" />
        </Link><br />
      </form>
    </div>
  );
}
export default UpdateUser;
