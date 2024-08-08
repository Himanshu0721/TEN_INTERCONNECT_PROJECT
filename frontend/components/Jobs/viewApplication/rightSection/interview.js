import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { toast, ToastContainer } from "react-toastify";
import api from "../../../../api/base";

const InterviewSection = ({ jobId }) => {
  const [applications, setApplications] = useState([]);
  const InterviewCard = ({
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
            href={`https://internconnect-fdoz.onrender.com/get-resume/${resume}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
        <div className="btns-wrapper">
          <div className="status-btns">
            <button onClick={() => updateStatus(id, "NotInterested")}>
              Not Interested
            </button>
            <button onClick={() => updateStatus(id, "Hired")}>Hire</button>
            <ToastContainer />
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

  const interviewApplications =
    applications &&
    applications.filter(application => {
      const matchesJobId = jobId ? application.jobid === jobId : true;
      const matchesStatus = application.status
        ? application.status === "Interview"
        : true;
      return matchesJobId && matchesStatus;
    });
  const updateStatus = async (id, status) => {
    try {
      await api.patch(`applyform/update-status/${id}`, { status });
      console.log(`Updated Status for ${id} : ${status}`);
      if (status === "Hired") {
        toast.success("Applicant Hired!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else if (status === "NotInterested") {
        toast.warning("Application is Not Interested!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      setApplications(prevState =>
        prevState.filter(application => application._id !== id)
      );
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="shortlisted">
      {/* text section */}
      <div className="shortlist-section">
        <div>
          <div>Showing {interviewApplications.length} results</div>
        </div>
        <div className="shortlisted-application">
          {interviewApplications.length === 0 ? (
            <p>No Applications are shortlisted yet!</p>
          ) : (
            interviewApplications &&
            interviewApplications.map((application, id) => (
              <InterviewCard
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
    </div>
  );
};

export default InterviewSection;
