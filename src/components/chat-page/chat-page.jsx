/* eslint-disable react/prop-types */
import './chat-styles.css';
import React from 'react';
import Chat from './chat';
import InputMessage from './input-message';
import store from '../redux/store';
import ClientsAndRooms from './clients-and-rooms';

export default function ChatPage({ history }) {
  const checkConnectionState = () => {
    if (!store.getState().appStates.connectionState) {
      history.push('/');
    }
  };

  store.subscribe(() => {
    checkConnectionState();
  });

  checkConnectionState();
  return (
    <div className="chat-page-container">
      <Chat key={Chat.id} />
      <ClientsAndRooms />
      <InputMessage />
    </div>
  );
}
