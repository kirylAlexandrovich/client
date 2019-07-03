/* eslint-disable no-console */
// import React from 'react';
// import Websocket from 'react-websocket';
import openSocket from 'socket.io-client';
import store from './store';

let socket;

const client = (nickname) => {
  console.log(nickname, 'nickname or email');
  store.dispatch({ type: 'CHANGE_CONNECTION_STATE', payload: true });
  socket = openSocket('http://localhost:8000');

  socket.on('connected', () => {
    // store.dispatch({ type: 'RENDER_CLIENTS_LIST', payload: clientsList });
    console.log('connected');
    socket.emit('saveClient', nickname);
  });

  // socket.on('changeClientsList', (clientsList) => {
  //   console.log(clientsList);
  //   store.dispatch({ type: 'RENDER_CLIENTS_LIST', payload: clientsList });
  // });

  socket.on('message', (data) => {
    store.dispatch({ type: 'RENDER_MESS', payload: data });
  });

  socket.on('error', (err) => {
    console.log(err);
  });

  store.subscribe(() => {
    if (!store.getState().connectionState) {
      console.log('socket dissconnected');
      socket.disconnect();
    }
  });

  let currentRoom;

  store.subscribe(() => {
    const stateRoom = store.getState().roomName;
    // console.log('state room', stateRoom, 'current room', currentRoom);
    if (currentRoom !== stateRoom) {
      socket.emit('change_room', { stateRoom, currentRoom });
      currentRoom = stateRoom;
    }
  });
};

function sendMessage(email, mess, time, roomName) {
  socket.emit('message', {
    email,
    mess,
    time,
    roomName,
  });
}

store.subscribe(() => {
  const { email, connectionState } = store.getState();
  const storageEmail = sessionStorage.getItem('connState');
  if (email && connectionState === false && storageEmail !== 'false') {
    console.log('start socket with email:', [email, connectionState, storageEmail]);
    client(email);
  }
});

export default sendMessage;
