/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMess } from '../redux/actions';
import { sendMessage } from '../app/client';

class InputMessage extends Component {
  state = {
    message: '',
  }

  onSendMessage = () => {
    const { message } = this.state;
    const time = new Date().toString().split(' ');
    const newTime = `${time[2]} ${time[1]} ${time[3]} ${time[4]}`;
    const myMessage = {
      name: 'Name',
      mess: message,
      time: newTime,
    };

    sendMessage(message);
    this.setState({ message: '' });
    this.props.sendMess(myMessage);
  }

  keyPress = (event) => {
    if (event.key === 'Enter') {
      this.onSendMessage();
    }
  }

  onChangeMessage = (event) => {
    this.setState({ message: event.target.value });
  }


  render() {
    const { message } = this.state;

    return (
      <div className="input-mess-container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control mess-input"
            id="inputMessage"
            value={message}
            aria-describedby="button-addon2"
            autoFocus
            onChange={this.onChangeMessage}
            onKeyPress={this.keyPress}
          />
          <div className="input-group-append">
            <button
              className="btn btn-success"
              type="button"
              id="button-addon2"
              onClick={this.onSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { sendMess })(InputMessage);
