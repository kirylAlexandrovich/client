/* eslint-disable react/prop-types */
import React from 'react';

function RoomsList(props) {
  const { roomsList, onClick } = props;
  const domRoomsList = roomsList.map(element => (
    <li key={element} onClick={() => { onClick(element); }} onKeyDown={() => { }} tabIndex={0} role="menuitem">{element}</li>
  ));
  return (
    <div className="clients-list" id="chatRoomsContainer">
      <ul className="users-list">
        <li key="general" onClick={() => { onClick('general'); }} onKeyDown={() => { }} tabIndex={0} role="menuitem">general</li>
        {domRoomsList}
      </ul>
    </div>
  );
}

export default RoomsList;
