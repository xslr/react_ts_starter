import React from 'react';
import Cookies from 'js-cookie';
// import {navigate} from 'hookrouter';

import Dashboard from './Dashboard';
import Login from './Login';

export default class Home extends React.Component {
  render() {
    const authToken = Cookies.get('czero-auth-token');
    let isAuthenticated = false;
    if (authToken /* TODO: && tokenIsValid(authToken)*/) {
      isAuthenticated = true;
    }

    return isAuthenticated ? <Dashboard/> : <Login/>
  }
}