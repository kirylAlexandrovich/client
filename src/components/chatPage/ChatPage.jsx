import './chatStyles.css';
import React from 'react';
import Chat from './Chat';
import ChatRooms from './ChatRooms';
import InputMessage from './InputMessage';
// import {connect} from 'react-redux';

export default function ChatPage() {
  return (
    <div className="chat-page-container">
      <Chat />
      <ChatRooms />
      <InputMessage />
    </div>
  );
}
