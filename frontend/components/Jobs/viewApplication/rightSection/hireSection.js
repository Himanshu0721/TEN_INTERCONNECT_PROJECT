import React, { useEffect, useState } from "react";
import LoadingBox from "../LoadingBox";
import "../viewApplication.css";
import api from "../../../../api/base";

const HireSection = ({ jobId }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  const HireCard = ({
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
      </div>
    );
  };

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);
        const response = await api.get("applyform/get-resume");
        setApplications(response.data);
      } catch (error) {
        console.error("Failed to fetch applications", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const hiredApplicants =
    applications &&
    applications.filter(application => {
      const matchesJobId = jobId ? application.jobid === jobId : true;
      const matchesStatus = application.status
        ? application.status === "Hired"
        : true;
      return matchesJobId && matchesStatus;
    });

  return (
    <div className="hired-applicant-container">
      <section>
        <div className="hired-applicant-content">
          <h2>
            Hired <span style={{ color: "blue" }}>Applicants</span>
          </h2>
          <div className="hired-applicants-listings">
            <div style={{ marginBottom: "2rem" }}>
              Showing {hiredApplicants.length} results
            </div>
            <div className="applicants-box">
              {loading ? (
                <LoadingBox />
              ) : hiredApplicants && hiredApplicants.length === 0 ? (
                <div className="no-result">
                  <h4>No applicants hired yet</h4>
                </div>
              ) : (
                hiredApplicants &&
                hiredApplicants.map((application, id) => (
                  <HireCard
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
      </section>
    </div>
  );
};

export default HireSection;
