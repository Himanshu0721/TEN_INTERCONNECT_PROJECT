import React from 'react';
import Chats from "./Chats";
import "../../../pages.css/adminchat/sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="header">
                Hired Candidates
            </div>
            <Chats />
        </div>
    );
};

export default Sidebar;