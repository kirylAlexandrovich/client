/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { setEmail } from '../redux/actions/index';
import './logInPage.css';
import { startSocket } from '../app/client';
// import googleAuth from './auth';


class LogInPage extends Component {
  state = {
    email: '',
    password: '',
    isValidEmail: 'form-control',
    emailOrPasswordErr: '',
  }

  onInput = (event) => {
    if (event.target.id === 'staticEmail') {
      this.setState({ email: event.target.value });
      // localStorage.setItem('email', event.target.value);
      const email = event.target.value;
      if (email.search(/.+@(gmail|mail)\.[a-z]{2,}/) === -1) {
        this.setState({ isValidEmail: 'form-control is-invalid' });
      } else {
        this.setState({ isValidEmail: 'form-control is-valid' });
      }
    } else {
      this.setState({ password: event.target.value });
    }
  }

  changePathToChat = () => {
    const { history } = this.props;
    history.push('/chat');
  }

  submit = () => {
    const { password, email } = this.state;
    if (email.search(/.+@(gmail|mail)\.[a-z]{2,}/) !== -1) {
      axios.post('http://localhost:8080/login', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if (res.data === 'no such client') {
          this.setState({ emailOrPasswordErr: 'Incorrect email or password' });
          return;
        }
        startSocket(res.data.email);
        sessionStorage.setItem('connState', res.data.email);
        this.props.setEmail(res.data.email);
        this.changePathToChat();
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  googleAuth = (response) => {
    this.props.setEmail(response.w3.U3);
    startSocket(response.w3.U3);
    this.changePathToChat();
  }

  render() {
    const { isValidEmail, emailOrPasswordErr } = this.state;
    // const responseFacebook = (response) => {
    //   console.log(response);
    // };

    return (
      <div className="log-in-container">
        <h3 className="log-in-header">Log In:</h3>
        <span>{emailOrPasswordErr}</span>
        <form>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                type="email"
                name="login"
                className={isValidEmail}
                id="staticEmail"
                placeholder="Enter your email"
                required
                onChange={this.onInput}
                tabIndex={0}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                required
                onChange={this.onInput}
                tabIndex={0}
              />
            </div>
          </div>
          <div
            className="btn btn-outline-success my-2 my-sm-0"
            onKeyDown={(event) => { console.log(event.key); }}
            onClick={this.submit}
            role="button"
            tabIndex={0}
          >
            Log In
          </div>
        </form>
        <div className="oauth-butt-container">
          <GoogleLogin
            className="google-button"
            clientId="786972375663-9vi42776suiq2kb561dhedtkdiog104f.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.googleAuth}
            onFailure={this.googleAuth}
            cookiePolicy="single_host_origin"
          />
          {/* <FacebookLogin
            appId="1088597931155576"
            autoLoad
            fields="name,email,picture"
            // onClick={componentClicked}
            callback={responseFacebook}
          /> */}
        </div>
        <span>or</span>
        <Link to="/register" className="nav-link sign-in-link">Register</Link>
      </div>
    );
  }
}

export default connect(null, { setEmail })(LogInPage);
