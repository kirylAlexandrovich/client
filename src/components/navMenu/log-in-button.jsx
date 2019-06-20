/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeConnState } from '../redux/actions';

class LogInButton extends React.Component {
  signOut = () => {
    // const { connection } = this.props;
    console.log('sign out');
    // eslint-disable-next-line react/destructuring-assignment
    this.props.changeConnState(false);
    localStorage.setItem('email', false);
  }

  render() {
    const { email, connectionState } = this.props;
    // this.setState({ conn: connection });
    // console.log(localStorage.getItem('email'), connection);
    // const { conn } = this.state;
    const SignOutButton = () => (
      <React.Fragment>
        <span className="userEmail">{email}</span>
        <div
          className="btn btn-outline-success my-2 my-sm-0"
          role="button"
          tabIndex={0}
          onClick={this.signOut}
          onKeyDown={() => { }}
        >
          Sign-out
        </div>
      </React.Fragment>
    );

    const LinkToLogIn = () => (<Link to="/" className="btn btn-outline-success my-2 my-sm-0">Log-In</Link>);

    return (
      <div className="login-button-container">
        {connectionState ? <SignOutButton /> : <LinkToLogIn />}
      </div>
    );
  }
}

export default connect(state => ({
  connectionState: state.connectionState,
  email: state.email,
}),
  { changeConnState })(LogInButton);
