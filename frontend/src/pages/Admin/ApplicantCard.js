import React, { useState } from 'react';
import '../../pages.css/applicantCard.css';
import {useNavigate} from "react-router-dom";
//remove the css file after integration

const ApplicantCard = ({ name, email, phone, coverLetter, canJoinImmediately, startingDate }) => {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const truncatedCoverLetter = `${coverLetter.substring(0, 100)} `;

    // const handleOpenChat = () => {
    //     navigate("/admin/chat");
    // }

    return (
        <div className="applicant-card-container">
            <div className="name">
                {name}
            </div>
            <div className="email">
                <span style={{fontWeight:"bold"}}>Email : </span>
                {email}
            </div>
            <div className="phone">
                <span style={{fontWeight:"bold"}}>Phone No. : </span>
                {phone}
            </div>
            <div className="cover-letter">
                <span style={{fontWeight:"bold"}}>Cover Letter : </span>
                {isExpanded ? coverLetter : truncatedCoverLetter}
                <button onClick={toggleExpanded} className="see-more-button">
                    {isExpanded ? 'See less' : 'See more'}
                </button>
            </div>
            <div className="available-from">
                <span style={{fontWeight:"bold"}}>Starting Date : </span>
                {canJoinImmediately === "No" ? startingDate : "Immediately"}
            </div>
            {/*<div className="open-chat-btn">*/}
            {/*    <button onClick={handleOpenChat}>Open Chat</button>*/}
            {/*</div>*/}
        </div>
    );
};

export default ApplicantCard;
