/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setEmail, logInUser } from '../redux/actions/index';
import './logInPage.css';
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
    const { connectionState } = this.props;
    if (email.search(/.+@(gmail|mail)\.[a-z]{2,}/) !== -1) {
      this.props.logInUser(email, password);
      if (connectionState) {
        this.changePathToChat();
      }
    }
  }

  googleAuth = (response) => {
    this.props.setEmail(response.w3.U3);
    sessionStorage.setItem('connState', response.w3.U3);
    this.changePathToChat();
  }

  render() {
    const { isValidEmail } = this.state;
    const { error, connectionState } = this.props;
    console.log('render login page', connectionState);
    return (
      <React.Fragment>
        {connectionState
          ? this.changePathToChat()
          : (
            <LogInForm
              onInput={this.onInput}
              error={error}
              isValidEmail={isValidEmail}
              submit={this.submit}
              googleAuth={this.googleAuth}
            />
          )}
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  error: state.error,
  connectionState: state.connectionState,
}), { setEmail, logInUser })(LogInPage);
