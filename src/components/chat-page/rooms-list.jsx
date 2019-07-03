/* eslint-disable react/prop-types */
import React from 'react';
// import {Button} from 'reactstrap';

function RoomsList(props) {
  const { roomsList, onClick } = props;
  const domRoomsList = roomsList.map(element => (
    <li key={element} onClick={onClick} onKeyDown={() => { }} tabIndex={0} role="menuitem">{element}</li>
  ));

  return (
    <div className="clients-list" id="chatRoomsContainer">
      <ul className="users-list">
        <li key="general" onClick={onClick} onKeyDown={() => { }} tabIndex={0} role="menuitem">general</li>
        {domRoomsList}
      </ul>
    </div>
  );
}

export default RoomsList;
