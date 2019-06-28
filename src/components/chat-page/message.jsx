import React from 'react';

export default function Message(props) {
  // eslint-disable-next-line react/prop-types
  const { message, email } = props;
  const messClass = message.email === email ? 'message your-message' : 'message';
  const messName = message.email !== email ? message.email : 'You:';
  return (
    <div className={messClass}>
      <span>{messName}</span>
      <article>{message.mess}</article>
      <span>{message.time}</span>
    </div>
  );
}
