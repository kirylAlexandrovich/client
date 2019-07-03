/* eslint-disable react/prop-types */
import React from 'react';

export default function ClientsList(props) {
  const { clientsList, email } = props;
  const domClientsList = clientsList.map((element) => {
    if (element !== email) {
      return <li key={element}>{element}</li>;
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
