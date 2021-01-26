import React, { useState } from "react";
import "./styles.css";
import {
  BrowserRouter,
  NavLink,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Profile from "./components/Profile";
import Post from "./components/Post";
import Edit from "./components/Edit";
import Notfound from "./components/Notfound";
export default function App() {
  const [isLogin, setIslogin] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <h1>React Router Tutorial</h1>

        <ul className="nav">
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
        <button onClick={() => setIslogin(!isLogin)}>
          {isLogin ? "log out" : "log in"}
        </button>

        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/profile" component={Profile}>
            {/* {
        isLogin?<Profile/>:<Redirect to='/'/>
      } */}
            <Profile login={isLogin} />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/post:id" component={Post} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
