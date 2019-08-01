/* eslint-disable no-console */
// import React from 'react';
// import Websocket from 'react-websocket';
import openSocket from 'socket.io-client';
import store from '../components/redux/store';

let socket;

const client = (nickname) => {
  store.dispatch({ type: 'CHANGE_CONNECTION_STATE', payload: true });
  socket = openSocket('http://192.168.1.65:8000');

  socket.on('connected', () => {
    console.log('Socket connected');
    socket.emit('saveClient', nickname);
  });

  // socket.on('changeClientsList', (clientsList) => {
  //   console.log(clientsList);
  //   store.dispatch({ type: 'RENDER_CLIENTS_LIST', payload: clientsList });
  // });

  socket.on('message', (data) => {
    if (store.getState().rooms.roomName === data.roomName) {
      store.dispatch({ type: 'RENDER_MESS', payload: data });
    } else {
      store.dispatch({ type: 'NEW_MESSAGE', payload: data.roomName });
      store.dispatch({ type: 'SAVE_MESSAGES_MAP', payload: data });
    }
  });

  socket.on('error', (err) => {
    console.log(err);
  });

  let currentRoomsList;
  let currentPrivateRoomsList;

  store.subscribe(() => {
    const { roomsList, privateRoomsList } = store.getState().rooms;

    if (JSON.stringify(roomsList) !== JSON.stringify(currentRoomsList)) {
      currentRoomsList = roomsList;
      socket.emit('joinToRooms', roomsList);
    }

    if (JSON.stringify(privateRoomsList) !== JSON.stringify(currentPrivateRoomsList)) {
      currentPrivateRoomsList = privateRoomsList;
      const roomsArr = [];
      currentPrivateRoomsList.forEach((el) => {
        roomsArr.push(el.name);
      });
      socket.emit('joinToRooms', roomsArr);
    }

    if (!store.getState().appStates.connectionState) {
      console.log('socket disconnected');
      socket.disconnect();
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
  const { user, appStates } = store.getState();
  const storageEmail = sessionStorage.getItem('connState');
  // console.log(storageEmail, 'STORAGE EMAIL', [user.email]);
  if (user.email && appStates.connectionState === false && storageEmail !== 'false') {
    client(user.email);
  }
});

export default sendMessage;
