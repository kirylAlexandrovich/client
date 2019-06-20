/* eslint-disable react/prop-types */
import './chatStyles.css';
import React from 'react';
import Chat from './Chat';
import ChatRooms from './ChatRooms';
import InputMessage from './InputMessage';
// import {connect} from 'react-redux';

export default function ChatPage(props) {
  const { history } = props;
  if (sessionStorage.getItem('connState') === null) {
    history.push('/');
  }
  return (
    <div className="chat-page-container">
      <Chat />
      <ChatRooms />
      <InputMessage />
    </div>
  );
}
