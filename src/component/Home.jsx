import React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

export default function Home() {
  const authToken = Cookies.get('czero-auth-token');
  let isAuthenticated = false;
  if (authToken /* TODO: && tokenIsValid(authToken)*/) {
    isAuthenticated = true;
  }

  return isAuthenticated ? <Redirect to='/dashboard' /> : <Redirect to='/login' />;
}