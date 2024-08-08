import React from 'react';
import "../../pages.css/adminchat/chats.css"
import DemoImage from "../../images/userAvatar.png";
const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="header">
                Managers
            </div>
            <div className="chats">
                <div className="applicantInfo">
                    <img src={DemoImage} alt=""/>
                    Manager 1
                </div>
            </div>
        </div>
    );
};

export default SideBar;