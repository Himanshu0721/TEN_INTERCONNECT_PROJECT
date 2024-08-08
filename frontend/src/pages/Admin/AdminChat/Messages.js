import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';
import "../../../pages.css/adminchat/messages.css";

const Messages = () => {
    const messages = useSelector(state => state.messages.messages);
    const messageEndRef = useRef(null);

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="messages-wrapper">
            <div className="messages-container">
                {messages.map((msg, index) => (
                    <Message key={index} message={msg} isOwner={true} />
                ))}
                <div ref={messageEndRef} />
            </div>
        </div>
    );
};

export default Messages;
