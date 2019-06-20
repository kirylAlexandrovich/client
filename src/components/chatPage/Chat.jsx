/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router';
import Message from './Message';

class Chat extends Component {
  getChatContainer = (node) => { this.chatContainer = node; }

  scrollToBottom = () => {
    this.chatContainer.scrollTop = this.chatContainer.scrollHeight - this.chatContainer.clientHeight;
    // console.log(this.chatContainer.scrollTop, this.chatContainer.scrollHeight, this.chatContainer.clientHeight);
  }

  componentWillUpdate = () => {
    // console.log('------');
    this.scrollToBottom();
  }

  render() {
    const heightStyle = {
      height: `${window.innerHeight - 156}px`,
    };
    const { messages } = this.props;

    return (
      <div ref={this.getChatContainer} className="chat-container" style={heightStyle}>
        {messages.map((el, index) => (<Message message={el} key={el.time + index} />))}
      </div>
    );
  }
}

export default connect(state => ({
  messages: state.messages,
  connectionState: state.connectionState,
}))(Chat);
