/* eslint-disable react/prop-types */
import React from 'react';

function RoomsList({
  roomsList, onClick, currentRoom, hasRoomNewMessage,
}) {
  const domRoomsList = roomsList.map(element => (
    <li key={element} onClick={() => { onClick(element); }} onKeyDown={() => {}} tabIndex={0} role="menuitem" className={element === currentRoom ? 'current-room' : ''}>
      {hasRoomNewMessage[element] && <span className="number-new-messages">{hasRoomNewMessage[element]}</span>}
      {element}
    </li>
  ));

  return (
    <div className="clients-list" id="chatRoomsContainer">
      <ul className="users-list">
        {domRoomsList}
      </ul>
    </div>
  );
}

export default RoomsList;
