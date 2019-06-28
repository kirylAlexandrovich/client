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
      messages,
      email,
      connectionState,
      history,
      getRM,
    } = this.props;
    if (messages.length === 0 && connectionState) {
      getRM('general');
    }
    return (
      <div ref={this.getChatContainer} className="chat-container" style={heightStyle}>
        {connectionState ? messages.map(el => (<Message message={el} email={email} key={el.time} />)) : history.push('/')}
      </div>
    );
  }
}

export default connect(state => ({
  email: state.email,
  messages: state.messages,
  connectionState: state.connectionState,
}), { rerenderMessage, getRM: getRoomMessages })(Chat);
