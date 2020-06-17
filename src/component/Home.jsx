import React from 'react';
import Cookies from 'js-cookie';
// import {navigate} from 'hookrouter';

export default class Home extends React.Component {
  render() {
    const authToken = Cookies.get('czero-auth-token');
    let isAuthenticated = false;
    if (authToken /* TODO: && tokenIsValid(authToken)*/) {
      isAuthenticated = true;
    }
    // navigate(isAuthenticated ? '/dashboard' : '/login', true);
    return <h3>Home</h3>;
  }
}