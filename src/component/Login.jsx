import * as React from 'react';
import { withRouter } from "react-router-dom";
import {AnchorButton, Button, FormGroup, Icon, InputGroup, Intent, Spinner} from '@blueprintjs/core';
const {default: axios} = require('axios');
import Cookies from 'js-cookie';

import style from './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  handleResponse(response) {
    // console.log(response);
    if (response && 200 == response.status) {
      Cookies.set(
        'czero-auth-token',   // TODO: make tunable auth token name
        response.data.authToken,
        {
          expires: 30,        // TODO: get expiry info from backend
          sameSite: 'strict', // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
        });
        this.props.history.push('/dashboard')
    } else {
      console.error(`login errror: ${response}`)
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const api = 'http://localhost:3000/api/v0';
    const payload = {
      email: this.state.username,
      password: this.state.password,
    };

    axios
      .post(api + '/login', payload)
      .then(r => this.handleResponse(r))
      .catch(e => console.log(e))
  }


  render() {
    const { username, password } = this.state;
    return (
      <form>
        <h3>Login</h3>
        <p>You are not authenticated.</p>
        <div className={style.loginContainer}>
          <FormGroup
              // label='Email'
              labelFor='txtLogin'
              // labelInfo='(required)'
              >
            <InputGroup id='txtLogin' name='username' value={username} placeholder='email' onChange={(e) => this.handleChange(event)} type='email' />
          </FormGroup>
          <FormGroup
              // label='Password'
              labelFor='txtPassword'
              // labelInfo='(required)'
              >
            <InputGroup id='txtPassword' name='password' value={password} placeholder='password' onChange={(e) => this.handleChange(event)} type='password' />
          </FormGroup>
          <Button className={style.btnLogin} id='btnLogin' type='submit' onClick={(e) => this.handleSubmit(e)}>Login</Button>
        </div>
      </form>
    );
  }
}

export default withRouter(Login);  // ensure props from react-router are added to our component