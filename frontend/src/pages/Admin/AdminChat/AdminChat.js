import React from 'react';
import '../../../pages.css/adminchat/adminChat.css'
import Sidebar from "./Sidebar";
import Chat from "./Chat"
const AdminChat = () => {
    return (
        <>
            <div className="admin-chat-wrapper">
                <div className="admin-chat-container">
                    <Sidebar/>
                    <Chat />
                </div>
            </div>
        </>
    );
};

export default AdminChat;