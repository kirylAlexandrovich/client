import './chatStyles.css';
import React, { Component } from 'react';
import Chat from './Chat';
import ChatRooms from './ChatRooms';
import InputMessage from './InputMessage';
// import {connect} from 'react-redux';

class ChatPage extends Component {
    
    render() {
        return (
            <div className="chat-page-container">
                <Chat/>
                <ChatRooms />
                <InputMessage />
            </div>
        );
    }
}


export default ChatPage;