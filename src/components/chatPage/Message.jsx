import React from 'react';

export default function Message(props) {
  // eslint-disable-next-line react/prop-types
  const { message } = props;
  const messClass = message.name === 'You:' ? 'message your-message' : 'message';
  return (
    <div className={messClass}>
      <span>{message.name}</span>
      <article>{message.mess}</article>
      <span>{message.time}</span>
    </div>
  );
}
