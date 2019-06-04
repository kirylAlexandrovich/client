import React, { Component } from 'react';
import {connect} from 'react-redux';
import Message from './Message';

class Chat extends Component {

    render() {
        // const {messages} = this.props;
        console.log(this.props.messages);
        return (
            <div className="chat-container">
                {this.props.messages.map((el, index) =>(<Message message = {el} key={index}/>))}
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         messages: state.messages,
//     }
// }

export default  connect (state => ({messages: state.messages})) (Chat);