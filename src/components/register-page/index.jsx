/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { connect } from 'react-redux';
import React from 'react';
import cryptoJS from 'crypto-js';
import RegisterForm from './register-form';
import './register-page.css';
import { sendUserDetails, createError } from '../redux/actions';

class RegisterPage extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  }

  onInput = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  changePathToChat = () => {
    const { history } = this.props;
    history.push('/chat');
  }

  onSubmit = () => {
    const {
      email, password,
      confirmPassword,
      firstName, lastName,
    } = this.state;
    const { error } = this.props;
    if (!email || !password || !firstName || !lastName) {
      error('Please, fill all required fields');
      return;
    }

    if (password !== confirmPassword) {
      error('Password does not match');
      return;
    }

    const cryptoPassword = cryptoJS.SHA256(password).toString();
    const userDetails = {
      email, firstName, lastName, cryptoPassword,
    };

    error('');

    this.props.sendUserDetails(userDetails);
  }

  componentDidUpdate = () => {
    const { connectionState, error } = this.props;
    if (connectionState) {
      error('');
      this.changePathToChat();
    }
  }

  render() {
    const { errorMsg } = this.props;
    return (
      <RegisterForm onInput={this.onInput} onSubmit={this.onSubmit} error={errorMsg} />
    );
  }
}

export default connect(state => ({
  errorMsg: state.error,
  connectionState: state.connectionState,
}), { sendUserDetails, error: createError })(RegisterPage);
