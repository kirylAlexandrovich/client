/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import RoomsList from './rooms-list';
import ClientsList from './clients-list';
import {
  rerenderMessage, getRoomMessages,
  getRoomsList, getUsersList, changeRoom,
  resetNewMessages, createRoom,
} from '../redux/actions';


class ClientsAndRooms extends Component {
  state = {
    switchOn: true,
    peopleBtnClass: 'tabs hover-tab',
    chatListBtnClass: 'tabs active-tab',
  }

  switchToPeople = () => {
    if (this.props.clientsList.length === 0) {
      this.props.getUsersList();
    }
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

  chooseRoom = (roomName) => {
    this.props.getRoomMessages(roomName);
    this.props.resetNewMessages(roomName);
  }

  choosePrivateRoom = (userName) => {
    const { privateRoomsList, email } = this.props;

    const result = privateRoomsList.filter((element) => {
      if (element.members.includes(userName)) {
        this.props.getRoomMessages(element.name);
        return true;
      }
      return false;
    });
    if (result.length === 0) {
      this.props.createRoom([userName], userName + email, email, true);
    }
  }

  render() {
    const {
      peopleBtnClass,
      chatListBtnClass,
      switchOn,
    } = this.state;

    const {
      email, clientsList, roomsList, currentRoom, hasRoomNewMessage,
    } = this.props;
    if (email && roomsList.length === 0) {
      this.props.getRoomsList(email);
    }
    return (
      <div className="clients-and-rooms-container">
        <div className="buttons-container">
          <div className={peopleBtnClass} onClick={this.switchToPeople} onKeyDown={() => { }} role="button" tabIndex={0}>People</div>
          <div className={chatListBtnClass} onClick={this.switchToChatList} onKeyDown={() => { }} role="button" tabIndex={0}>Chats list</div>
        </div>
        {switchOn
          ? <RoomsList onClick={this.chooseRoom} roomsList={roomsList} currentRoom={currentRoom} hasRoomNewMessage={hasRoomNewMessage} />
          : <ClientsList email={email} clientsList={clientsList} onClick={this.choosePrivateRoom} hasRoomNewMessage={hasRoomNewMessage} />}
      </div>
    );
  }
}

export default connect(state => ({
  email: state.user.email,
  clientsList: state.lists.clientsList,
  roomsList: state.rooms.roomsList,
  currentRoom: state.rooms.roomName,
  hasRoomNewMessage: state.rooms.hasRoomNewMessage,
  privateRoomsList: state.rooms.privateRoomsList,
}), {
  resetNewMessages,
  rerenderMessage,
  getRoomMessages,
  getRoomsList,
  getUsersList,
  changeRoom,
  createRoom,
})(ClientsAndRooms);
