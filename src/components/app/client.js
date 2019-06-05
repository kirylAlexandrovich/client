/* eslint-disable no-console */
// import React from 'react';
// import Websocket from 'react-websocket';
import openSocket from 'socket.io-client';

let socket;

const client = (nickname) => {
  socket = openSocket('http://localhost:8000');
  socket.on('connected', () => {
    console.log('connected');
    socket.emit('saveClient', nickname);
  });

  socket.on('message', (data) => {
    console.log('DATA', data);
  });

  socket.on('error', (err) => {
    console.log(err);
  });
};

function sendMessage(mess) {
  socket.emit('message', mess);
}

function startSocket(nick) {
  client(nick);
}


export { sendMessage, startSocket };

// class WebClient extends React.Component {
//     constructor() {
//         super();
//         this.client = new WebSocket("ws://localhost:8080");
//     }
//     start() {
//         this.client.onmessage = (data) => {
//             console.log(data);
//             if (typeof data === 'string' && data.search(/#@[0-9]{5}/) !== -1) {
//                 console.log('Your port is: ' + data.match(/[0-9]{5}/));
//                 return;
//             }
//         }

//         this.client.onopen = () => this.client.send('Text');

//         this.client.onclose = () => {
//             console.log('Connection closed')
//         }
//     }

//     // sendMessage(button, str) {
//     //     button.addEvetListener('click', () => {
//     //         this.client.send()
//     //     });
//     // }

// }

// export default WebClient;
