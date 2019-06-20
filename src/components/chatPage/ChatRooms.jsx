/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import store from '../app/store';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class ChatRooms extends React.Component {
  render() {
    const { clientList, email } = this.props;
    const domClientsList = clientList.map((element) => {
      if (element !== email) {
        return <li key={element}>{element}</li>;
      }
      return true;
    });
    return (
      <div className="chat-rooms-container" id="chatRoomsContainer">
        <ul className="users-list">
          {domClientsList}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  clientList: state.clientsList,
  email: state.email,
}))(ChatRooms);
