import React, { useEffect, useState } from "react";
import api from "../../../../api/base";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotIntreted = ({ jobId }) => {
  const [applications, setApplications] = useState([]);
  const NotInterestedCard = ({
    id,
    name,
    email,
    phone,
    coverLetter,
    canJoinImmediately,
    startingDate,
    resume,
  }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };

    const truncatedCoverLetter = `${coverLetter.substring(0, 100)} `;

    return (
      <div className="applicant-card-container">
        <div className="name">{name}</div>
        <div className="email info">
          <span style={{ fontWeight: "bold" }}>Email : </span>
          {email}
        </div>
        <div className="phone info">
          <span style={{ fontWeight: "bold" }}>Phone No. : </span>
          {phone}
        </div>
        <div className="cover-letter info">
          <span style={{ fontWeight: "bold" }}>Cover Letter : </span>
          {isExpanded ? coverLetter : truncatedCoverLetter}
          <button onClick={toggleExpanded} className="see-more-button">
            {isExpanded ? "See less" : "See more"}
          </button>
        </div>
        <div className="available-from info">
          <span style={{ fontWeight: "bold" }}>Starting Date : </span>
          {canJoinImmediately === "No" ? startingDate : "Immediately"}
        </div>
        <div className="resume info">
          <a
            href={`https://internconnect-fdoz.onrender.com/assets/download-resume/${resume}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
        <div className="btns-wrapper">
          <div className="status-btns">
            <button onClick={() => deleteApplication(id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await api.get("applyform/get-resume");
        setApplications(response.data);
      } catch (error) {
        console.error("Failed to fetch applications", error);
      }
    };

    fetchApplications();
  }, []);

  const notInterestedApplications =
    applications &&
    applications.filter(application => {
      const matchesJobId = jobId ? application.jobid === jobId : true;
      const matchesStatus = application.status
        ? application.status === "NotInterested"
        : true;
      return matchesJobId && matchesStatus;
    });

  const deleteApplication = async id => {
    try {
      await api.delete(`/applyform/delete-not-interested/${id}`);
      console.log("Deleted application : ", id);
      setApplications(prevState =>
        prevState.filter(application => application._id !== id)
      );
      toast.error("Application Deleted !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      console.log(e.response.message);
    }
  };
  const deleteAll = async id => {
    try {
      await api.delete(`/applyform/deleteall/${id}`);
      setApplications(prevState =>
        prevState.filter(application => application._id !== id)
      );
      toast.error("Applications Deleted !", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      console.log(e.response.message);
    }
  };
  return (
    <div>
      <ToastContainer />
      <button onClick={() => deleteAll(jobId)}>Delete All</button>
      <input
        type="checkbox"
        id="SelectAll"
        name="SelectAll"
        value="SelectAll"
      />
      <div className="notinterested-application">
        {notInterestedApplications.length === 0 ? (
          <p>No Applications are shortlisted yet!</p>
        ) : (
          notInterestedApplications &&
          notInterestedApplications.map((application, id) => (
            <NotInterestedCard
              key={id}
              id={application._id}
              name={application.userName}
              jobTitle={application.jobTitle}
              email={application.userEmail}
              phone={application.userPhoneNumber}
              coverLetter={application.coverLetter}
              canJoinImmediately={application.canJoinImmediately}
              startingDate={application.startingDate}
              resume={application.resume}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NotIntreted;
