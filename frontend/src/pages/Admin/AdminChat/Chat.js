import React from 'react';
import { useSelector } from 'react-redux';
import Messages from "./Messages";
import Input from "./Input";
import "../../../pages.css/adminchat/chat.css"

const Chat = () => {
    const selectedApplicant = useSelector((state) => state.selectedApplicant);

    return (
        <>
            <div className="chat-info">
                <div className="display-name">
                    {selectedApplicant ? selectedApplicant : "Select a user to chat"}
                </div>
                <Messages />
                <Input />
            </div>
        </>
    );
};

export default Chat;
