/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import RoomsList from './rooms-list';
import ClientsList from './clients-list';
import {
  rerenderMessage, getRoomMessages,
  getRoomsList, getUsersList, changeRoom,
} from '../redux/actions';


class ClientsAndRooms extends Component {
  state = {
    switchOn: false,
    peopleBtnClass: 'tabs active-tab',
    chatListBtnClass: 'tabs',
  }

  switchToPeople = () => {
    this.props.getUsersList();
    this.setState({
      switchOn: false,
      peopleBtnClass: 'tabs active-tab',
      chatListBtnClass: 'tabs hover-tab',
    });
  }

  switchToChatList = () => {
    this.setState({
      switchOn: true,
      peopleBtnClass: 'tabs hover-tab',
      chatListBtnClass: 'tabs active-tab',
    });
  }

  componentDidMount = () => {
    const { email } = this.props;
    console.log('DID MOUNT');
    this.props.getUsersList();
    if (email !== null) {
      this.props.getRoomsList(email);
    }
  }

  chooseRoom = (event) => {
    this.props.getRoomMessages(event.target.innerText);
  }

  render() {
    const {
      peopleBtnClass,
      chatListBtnClass,
      switchOn,
    } = this.state;
    const { email, clientList, roomsList } = this.props;
    return (
      <div className="clients-and-rooms-container">
        <div className="buttons-container">
          <div className={peopleBtnClass} onClick={this.switchToPeople} onKeyDown={() => { }} role="button" tabIndex={0}>People</div>
          <div className={chatListBtnClass} onClick={this.switchToChatList} onKeyDown={() => { }} role="button" tabIndex={0}>Chats list</div>
        </div>
        {switchOn
          ? <RoomsList onClick={this.chooseRoom} roomsList={roomsList} />
          : <ClientsList email={email} clientsList={clientList} />}
      </div>
    );
  }
}

export default connect(state => ({
  email: state.email,
  clientList: state.clientsList,
  roomsList: state.roomsList,
}), {
  rerenderMessage, getRoomMessages, getRoomsList, getUsersList, changeRoom,
})(ClientsAndRooms);
