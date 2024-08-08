import React, { useState } from "react";
import './viewApplication.css'

import Database from "./rightSection/database";
import Application from "./rightSection/application";
import ShortListed from "./rightSection/shortlisted";
import HireSection from "./rightSection/hireSection";
import NotIntreted from "./rightSection/notIntrested";
import Assignment from "./rightSection/assignment";
import InterviewSection from "./rightSection/interview";
import ChatSection from "./rightSection/chatSection";
import {useLocation} from "react-router-dom";

const ViewApplication = () => {
  const [selectedItem, setSelectedItem] = useState("Access database"); 
  const location = useLocation();
  const { jobId, roleName, companyName } = location.state || {};
  const handleItemClick = (label) => {
    setSelectedItem(label);
  };

  const renderRightSection = () => {
    switch (selectedItem) {
      case "Access database":
        return <Database />;
        case "Application":
          return <Application jobId={jobId} roleName={roleName} companyName={companyName}/>;
      case "Shortlisted":
        return <ShortListed jobId={jobId} roleName={roleName} companyName={companyName} />;
      case "Hired":
        return <HireSection jobId={jobId} roleName={roleName} companyName={companyName} />;
      case "Not interested":
        return <NotIntreted jobId={jobId} roleName={roleName} companyName={companyName} />;
      case "Interviews":
        return <InterviewSection />;
      case "Chat messages":
        return <ChatSection />;
      default:
        return <Database />;
    }
  };

  return (
    <div className="view-box">
      <div className="view-application">
        <p className="application-internship-heading">
          Application for {roleName}
        </p>
      </div>

      <div className="internship-data">
        {/* left tabs */}
        <div className="left-section-internship">
          <div
            className={`left-item-internship ${selectedItem === "Access database" ? "selected" : ""}`}
            onClick={() => handleItemClick("Access database")}
          >
            Access database
          </div>
          <div
            className={`left-item-internship ${selectedItem === "Application" ? "selected" : ""}`}
            onClick={() => handleItemClick("Application")}
          >
            Applications received
          </div>
          <div
            className={`left-item-internship ${selectedItem === "Shortlisted" ? "selected" : ""}`}
            onClick={() => handleItemClick("Shortlisted")}
          >
            Shortlisted
          </div>
          <div
            className={`left-item-internship ${selectedItem === "Hired" ? "selected" : ""}`}
            onClick={() => handleItemClick("Hired")}
          >
            Hired
          </div>
          <div
            className={`left-item-internship ${selectedItem === "Not interested" ? "selected" : ""}`}
            onClick={() => handleItemClick("Not interested")}
          >
            Not interested
          </div>
          <div
            className={`left-item-internship ${selectedItem === "Interviews" ? "selected" : ""}`}
            onClick={() => handleItemClick("Interviews")}
          >
            Interviews
          </div>
        </div>

        {/* right section */}
        <div className="right-section">{renderRightSection()}</div>
      </div>
    </div>
  );
};

export default ViewApplication;
