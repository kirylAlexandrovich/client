import React from 'react';

export default function Message(props) {
    const { message } = props;
    return (
        <div className="message">
            <span>{message.name}</span>
            <article>{message.mess}</article>
            <span>{message.time}</span>
        </div>
    )
}