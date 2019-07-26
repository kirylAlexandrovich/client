/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message';
import { rerenderMessage, getRoomMessages } from '../redux/actions';

class Chat extends Component {
  getChatContainer = (node) => { this.chatContainer = node; }

  scrollToBottom = () => {
    this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
  }

  componentDidUpdate = () => {
    this.scrollToBottom();
  }

  render() {
    const heightStyle = {
      height: `${window.innerHeight - 156}px`,
    };
    const {
      messages, email, roomName, getRM,
    } = this.props;

    if (messages.length === 0 && roomName) {
      getRM(roomName);
    }
    return (
      <div ref={this.getChatContainer} className="chat-container" style={heightStyle}>
        {messages.map(el => <Message message={el} email={email} key={el.mess + el.time} />)}
      </div>
    );
  }
}

export default connect(state => ({
  email: state.user.email,
  messages: state.lists.messages,
  connectionState: state.appStates.connectionState,
  roomName: state.rooms.roomName,
}), { rerenderMessage, getRM: getRoomMessages })(Chat);
