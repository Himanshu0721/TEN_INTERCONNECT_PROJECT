import React from 'react';
import '../../pages.css/adminchat/adminChat.css'
import SideBar from "./SideBar";
import Chat from "../../pages/Admin/AdminChat/Chat"
const UserChat = () => {
    return (
        <>
            <div className="admin-chat-wrapper">
                <div className="admin-chat-container">
                    <SideBar/>
                    <Chat />
                </div>
            </div>
        </>
    );
};

export default UserChat;