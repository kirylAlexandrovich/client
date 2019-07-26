/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import cryptoJS from 'crypto-js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setEmail, logInUser, createError } from '../redux/actions/index';
import './log-in-page.css';
import LogInForm from './log-in-form';


class LogInPage extends Component {
  state = {
    email: '',
    password: '',
    isValidEmail: 'form-control',
  }

  onInput = (event) => {
    if (event.target.id === 'staticEmail') {
      this.setState({ email: event.target.value });
      const email = event.target.value;
      if (email.search(/.+@.+\.[a-z]{2,}/) === -1) {
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
    const { connectionState } = this.props;
    const cryptoPassword = cryptoJS.SHA256(password).toString();
    console.log(email.search(/.+@(gmail|mail)\.[a-z]{2,}/), 'submit');
    if (email.search(/.+@.+\.[a-z]{2,}/) !== -1) {
      this.props.logInUser(email, cryptoPassword);
      if (connectionState) {
        this.props.createError('');
        this.changePathToChat();
      }
    }
  }

  googleAuth = (response) => {
    console.log(response);
    this.props.setEmail(response.w3.U3);
    this.props.createError('');
    sessionStorage.setItem('connState', response.w3.U3);
    this.changePathToChat();
  }

  componentDidMount = () => {
    const { connectionState } = this.props;
    if (connectionState) {
      this.changePathToChat();
    }
  }

  componentDidUpdate = () => {
    const { connectionState } = this.props;
    if (connectionState) {
      this.changePathToChat();
    }
  }

  render() {
    const { isValidEmail } = this.state;
    const { error } = this.props;
    return (
      <React.Fragment>
        <LogInForm
          onInput={this.onInput}
          error={error}
          isValidEmail={isValidEmail}
          submit={this.submit}
          googleAuth={this.googleAuth}
        />
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  error: state.errors.error,
  connectionState: state.appStates.connectionState,
}), { setEmail, logInUser, createError })(LogInPage);
