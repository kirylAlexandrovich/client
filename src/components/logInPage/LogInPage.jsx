/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router';
import './logInPage.css';
import { startSocket } from '../app/client';

class LogInPage extends Component {
  state = {
    email: '',
    isValidEmail: 'form-control',
    password: '',
  }

  onInput = (event) => {
    if (event.target.id === 'staticEmail') {
      this.setState({ email: event.target.value });
      const { email } = this.state;
      console.log(email);
      if (email.search(/.+@(gmail|mail)\.[a-z]{2,}/) === -1) {
        this.setState({ isValidEmail: 'form-control is-invalid' });
      } else {
        this.setState({ isValidEmail: 'form-control is-valid' });
      }
    } else {
      this.setState({ password: event.target.value });
    }
  }

  submit = (target) => {
    // eslint-disable-next-line react/prop-types
    const { history } = this.props;
    console.log(target.key);
    const { email } = this.state;
    if (email.search(/.+@(gmail|mail)\.[a-z]{2,}/) !== -1) {
      startSocket(email);
      history.push('/chat');
    }
  }

  render() {
    const { isValidEmail } = this.state;
    return (
      <div className="log-in-container">
        <h3 className="log-in-header">Log In:</h3>
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
        <span>or</span>
        <Link to="/register" className="nav-link sign-in-link">Register</Link>
      </div>
    );
  }
}

export default LogInPage;
