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

  changePathToLogIn = () => {
    const { connectionState, history } = this.props;
    if (!connectionState) {
      history.push('/');
    }
  }

  componentDidUpdate = () => {
    this.changePathToLogIn();
    this.scrollToBottom();
  }

  componentDidMount = () => {
    const {
      messages, connectionState, roomName, getRM,
    } = this.props;

    if (messages.length === 0 && connectionState) {
      getRM(roomName);
    }
    this.changePathToLogIn();
  }

  render() {
    const heightStyle = {
      height: `${window.innerHeight - 156}px`,
    };
    const {
      messages, email,
    } = this.props;
    return (
      <div ref={this.getChatContainer} className="chat-container" style={heightStyle}>
        {messages.map(el => <Message message={el} email={email} key={el.mess + el.time} />)}
      </div>
    );
  }
}

export default connect(state => ({
  email: state.email,
  messages: state.messages,
  connectionState: state.connectionState,
  roomName: state.roomName,
}), { rerenderMessage, getRM: getRoomMessages })(Chat);
