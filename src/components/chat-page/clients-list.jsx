/* eslint-disable react/prop-types */
import React from 'react';

export default function ClientsList({
  clientsList, email, onClick,
}) {
  const domClientsList = clientsList.map((element) => {
    if (element !== email) {
      return (
        <li key={element} onClick={() => { onClick(element); }} onKeyDown={() => {}} tabIndex={0} role="menuitem">
          {element}
        </li>
      );
    }
    return true;
  });
  return (
    <div className="clients-list" id="chatRoomsContainer">
      <ul className="users-list">
        {domClientsList}
      </ul>
    </div>
  );
}
