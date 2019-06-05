/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';


class Chat extends Component{
  

  render() {
    return (
      <div className="chat-container">
        {this.props.messages.map((el, index) => (<Message message={el} key={index} />))}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//     return {
//         messages: state.messages,
//     }
// }

export default connect(state => ({ messages: state.messages }))(Chat);
