import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../componentsCss/Apply.css";
import LoadingBox from "../../Component/LoadingBox";
import CardElement from "../../Component/CardElement";
import { useSelector } from "react-redux";

function Apply() {
  const navigate = useNavigate();
  const location = useLocation();
  const { jobs, loading } = useSelector(state => state.loadJobs);
  const {
    jobTitle,
    description,
    category,
    jobLocation,
    name,
    email,
    phone,
    coverLetter,
    canJoinImmediately,
    startingDate,
  } = location.state || {};
  const [showApplicantsDetails, setShowApplicantsDetail] = useState(false);

  const handleViewDetails = e => {
    e.preventDefault();
    setShowApplicantsDetail(!showApplicantsDetails);
  };

  // console.log(location.state);

  const handleGoBack = () => {
    navigate("/jobs");
  };
  const handleViewApplications = () => {
    navigate("/user/applications");
  };

  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <section className="apply-section">
        <div className="apply-success-msg">
          <div className="apply-success-content">
            <h2>Applied successfully</h2>
            {jobTitle && (
              <div className="job-details">
                <h3>Internship Details:</h3>
                <p>
                  <strong>Title:</strong> {jobTitle}
                </p>
                <p>
                  <strong>Description:</strong> {description}
                </p>
                <p>
                  <strong>Category:</strong> {category}
                </p>
                <p>
                  <strong>Location:</strong> {jobLocation}
                </p>
              </div>
            )}
          </div>
          <div className="show-applicant-details">
            <button onClick={handleViewDetails}>
              {showApplicantsDetails ? "Hide Details" : "View Details"}
            </button>
            {showApplicantsDetails && (
              <div className="applicant-details">
                <h3>Applicant Details:</h3>
                <p>
                  <strong>Name:</strong> {name}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Phone:</strong> {phone}
                </p>
                <p>
                  <strong>Cover Letter:</strong> {coverLetter}
                </p>
                <p>
                  <strong>Can Join Immediately:</strong>{" "}
                  {canJoinImmediately === "Yes" ? "Yes" : "No"}
                </p>
                {canJoinImmediately === "No" && (
                  <p>
                    <strong>Available From:</strong> {startingDate}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="go-back-content">
          <button id="go-back" onClick={handleGoBack}>
            Go back to search internship
          </button>
        </div>
        <div className="applications-btn">
          <button id="applications-b" onClick={handleViewApplications}>
            View my Applications
          </button>
        </div>
      </section>

      <section>
        <div className="more-opportunities-container">
          <div className="more-opportunities-content">
            <h2>
              <span>More Opportunities</span>
            </h2>
            <div className="job-listings">
              <div className="load-box">
                {loading ? (
                  <LoadingBox />
                ) : jobs && jobs.length === 0 ? (
                  <div className="no-result">
                    <h1>No result found!</h1>
                  </div>
                ) : (
                  jobs &&
                  jobs.map((job, i) => (
                    <CardElement
                      key={i}
                      id={job.job_id}
                      jobTitle={job.role_name}
                      description={job.description}
                      category={job.job_type ? job.job_type : "No category"}
                      location={job.location}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Apply;
