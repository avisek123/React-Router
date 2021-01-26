import React, { useEffect } from "react";
import View from "./View";
import Edit from "./Edit";
import {
  useHistory,
  Route,
  NavLink,
  Switch,
  useRouteMatch
} from "react-router-dom";
const Profile = ({ login }) => {
  const history = useHistory();
  useEffect(() => {
    if (!login) {
      history.push("/");
    }
  }, [login, history]);
  const { path, url } = useRouteMatch();
  console.log(useRouteMatch());

  return (
    <>
      <h1>Profile</h1>
      <ul>
        <li>
          <NavLink className="link" to={`${url}/viewprofile`}>
            View profile
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to={`${url}/editprofile`}>
            Edit profile
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/viewprofile`} component={View} />
        <Route path={`${path}/editprofile`} component={Edit} />
      </Switch>
    </>
  );
};
export default Profile;
