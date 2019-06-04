/* eslint-disable no-console */
// import React from 'react';
// import Websocket from 'react-websocket';
import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:8000');

function client() {
    socket.on('connection', () => {
        console.log('connected');
    });
    socket.on('message', (data) => {

        console.log(data);
    });
    console.log(socket);
    socket.send('hello', socket.id);
}

export { client };

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