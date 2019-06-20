/* eslint-disable no-console */
// import React from 'react';
// import Websocket from 'react-websocket';
import openSocket from 'socket.io-client';
import store from './store';

let socket;

const client = (nickname) => {
  console.log(nickname, 'nickname or email');
  const logIn = nickname !== 'undefined' ? nickname : 'TODO: email from lockal storage';
  store.dispatch({ type: 'CHANGE_CONNECTION_STATE', payload: true });
  socket = openSocket('http://localhost:8000');

  socket.on('connected', (clientsList) => {
    // sessionStorage.setItem('connState', true);
    console.log(clientsList, 'CLIENTS LIST FROM SERVER');
    store.dispatch({ type: 'RENDER_CLIENTS_LIST', payload: clientsList });
    console.log('connected');
    socket.emit('saveClient', logIn);
  });

  socket.on('changeClientsList', (clientsList) => {
    console.log('------------ changing list of clients', clientsList);
    store.dispatch({ type: 'RENDER_CLIENTS_LIST', payload: clientsList });
  });

  socket.on('message', (data) => {
    console.log('DATA', data);
    // sendMess(data);
    store.dispatch({ type: 'RENDER_MESS', payload: data });
  });

  socket.on('error', (err) => {
    console.log(err);
  });

  store.subscribe(() => {
    // console.log(store.getState().connectionState, '------------conn state ------------- - - - - -');
    if (store.getState().connectionState === false) {
      // sessionStorage.setItem('connState', false);
      console.log('dissconnect');
      socket.disconnect();
    }
  });
};

function sendMessage(mess, time) {
  socket.emit('message', { mess, time });
}

function startSocket(nick) {
  client(nick);
}

export { sendMessage, startSocket };
