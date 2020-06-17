// import {useRoutes} from 'hookrouter';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';


import Home from "./component/Home";
import Dashboard from './component/Dashboard';
import Login from './component/Login';

export function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/login">Login</Link> </li>
          <li> <Link to="/dashboard">Dashboard</Link> </li>
        </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
