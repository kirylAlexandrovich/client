/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { Form, Label } from 'reactstrap';


export default function LogInForm({
  isValidEmail, onInput, error, submit, googleAuth, onEnter,
}) {
  return (
    <div className="log-in-container">
      <h3 className="log-in-header">Log In:</h3>
      <span className="throw-error">{error}</span>
      <Form onKeyDown={(event) => { onEnter(event.key); }}>
        <div className="form-group row">
          <Label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</Label>
          <div className="col-sm-10">
            <input
              type="email"
              name="login"
              className={isValidEmail}
              id="staticEmail"
              placeholder="Enter your email"
              required
              onChange={onInput}
              tabIndex={0}
            />
          </div>
        </div>
        <div className="form-group row">
          <Label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</Label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              required
              onChange={onInput}
              tabIndex={0}
              onKeyDown={(event) => { console.log(event.key); }}
            />
          </div>
        </div>
        <div className="form-group row button-group">
          <button
            className="btn btn-success log-in-btn"
            onKeyDown={(event) => { console.log(event.key); }}
            onClick={submit}
            type="button"
            tabIndex={0}
          >
            Log In
          </button>
          <div className="oauth-btn-container">
            <GoogleLogin
              className="google-button"
              clientId="786972375663-9vi42776suiq2kb561dhedtkdiog104f.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={googleAuth}
              onFailure={googleAuth}
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
        </div>
      </Form>
      <Link to="/register" className="nav-link sign-in-link">Register</Link>
    </div>
  );
}
