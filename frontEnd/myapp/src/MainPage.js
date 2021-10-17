import { Switch, Route } from 'react-router-dom';
import LogInComp from './user/logIn';
import CreateUserComp from '../src/user/createUser';
import MangerMainComp from '../src/manger/mangerMain';
import MainComp from './main';
import MoviesComp from './movies';
import SubscriptionsComp from './subscriptions';
import ManageUsersComp from './manger/manageUsers';
import AddNewUserComp from './manger/addNewUser';
import UpdateUserComp from './manger/updateUser';

function MainPageComp() {
  return (
    <div>
      <h1>Moveis - Subscriptions Web Site</h1>

      <Switch>
        <Route path="/" exact component={LogInComp} />
        <Route path="/createUser" exact component={CreateUserComp} />
        <Route path="/mangerMain" exact component={MangerMainComp} />
        <Route path="/main" exact component={MainComp} />
        <Route path="/movies" exact component={MoviesComp} />
        <Route path="/subscriptions" exact component={SubscriptionsComp} />
        <Route path="/manageUsers" exact component={ManageUsersComp} />
        <Route path="/addNewUser" exact component={AddNewUserComp} />
        <Route path="/updateUser/:id" exact component={UpdateUserComp} />
      </Switch>
    </div>
  );
}
export default MainPageComp;
