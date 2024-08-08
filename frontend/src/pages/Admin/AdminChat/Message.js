import React from 'react';
import DemoImage from "../../../images/userAvatar.png";
import "../../../pages.css/adminchat/message.css";

const Message = ({message}) => {
    const isOwner = true;

    return (
        <div className={`message ${isOwner ? "owner" : ""}`}>
            <img src={DemoImage} alt=""/>
            <div className="message-container">
                <div className="message-content">{message}</div>
            </div>
        </div>
    );
};

export default Message;
