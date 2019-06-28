/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';


export default function LogInForm(props) {
  const {
    isValidEmail,
    onInput,
    error,
    submit,
    googleAuth,
  } = props;
  return (
    <div className="log-in-container">
      <h3 className="log-in-header">Log In:</h3>
      <span>{error}</span>
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
              onChange={onInput}
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
              onChange={onInput}
              tabIndex={0}
            />
          </div>
        </div>
        <div
          className="btn btn-outline-success my-2 my-sm-0"
          onKeyDown={(event) => { console.log(event.key); }}
          onClick={submit}
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
      <span>or</span>
      <Link to="/register" className="nav-link sign-in-link">Register</Link>
    </div>
  );
}
