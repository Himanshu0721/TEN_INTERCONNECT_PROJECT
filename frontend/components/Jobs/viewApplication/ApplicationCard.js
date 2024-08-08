import React, { useState } from 'react';
import './viewApplication.css';

const ApplicantCard = ({ name, email, phone, coverLetter, canJoinImmediately, startingDate }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const truncatedCoverLetter = `${coverLetter.substring(0, 100)} `;

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
        </div>
    );
};

export default ApplicantCard;
