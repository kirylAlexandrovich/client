/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import {
  changeConnState, setEmail, changeRoomsList, renderClientsList,
} from '../redux/actions';
import SignOutButton from './sign-out-button';
import LinkToLogIn from './link-to-login';
import ModalCreateRoom from './modal-dialog';

class LogInButton extends React.Component {
  signOut = () => {
    this.props.setEmail(false);
    this.props.changeConnState(false);
    sessionStorage.setItem('connState', false);
    this.props.changeRoomsList([]);
    this.props.renderClientsList([]);
  }

  componentDidMount = () => {
    const { email } = this.props;
    const storageEmail = sessionStorage.getItem('connState');
    if (email === null && storageEmail !== 'false') {
      this.props.setEmail(storageEmail);
    }
  }

  render() {
    const { email, connectionState, clientsList } = this.props;

    return (
      <React.Fragment>
        {connectionState ? <ModalCreateRoom clientsList={clientsList} email={email} /> : ''}
        <div className="login-button-container">
          {connectionState
            ? <SignOutButton email={email} signOut={this.signOut} />
            : <LinkToLogIn />}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  connectionState: state.appStates.connectionState,
  email: state.user.email,
  clientsList: state.lists.clientsList,
}),
{
  changeConnState, setEmail, changeRoomsList, renderClientsList,
})(LogInButton);
