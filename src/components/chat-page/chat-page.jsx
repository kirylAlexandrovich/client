/* eslint-disable react/prop-types */
import './chat-styles.css';
import React from 'react';
import Chat from './chat';
import InputMessage from './input-message';
// import RoomsList from './rooms-list';
import ClientsAndRooms from './clients-and-rooms';

export default function ChatPage(props) {
  const { history } = props;
  // if (sessionStorage.getItem('connState') === null) {
  //   history.push('/');
  // }
  return (
    <div className="chat-page-container">
      <Chat history={history} key={Chat.id} />
      <ClientsAndRooms />
      <InputMessage />
    </div>
  );
}
