import React from "react";

import Home from "./component/Home";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";

const routes = {
  "/": () => <Home />,
  "/login": () => <Login />,
  "/dashboard": () => <Dashboard />
};
export default routes;