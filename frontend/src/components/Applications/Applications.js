import React, { useEffect, useState } from "react";
import "../../componentsCss/applications.css";
import axios from "axios";

const Applications = () => {

  const [applications, setApplications] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const fetchApplications = async () => {
    try {
      const res = await axios.get("https://internconnect-fdoz.onrender.com/jobs/applications");
      // console.log("Applications fetched: ", res.data);
      setApplications(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchLoggedInUser = async () => {
    try {
      const response = await fetch(
          "https://internconnect-fdoz.onrender.com/user/login/verify",
          {
            headers: {
              "Content-Type": "application/json",
              authtoken: sessionStorage.getItem("auth-token"),
            },
          }
      );
      if (response.ok) {
        const data = await response.json();
        setLoggedInUser(data.user);
        // console.log("Logged in user: ", data.user);
      } else {
        console.log("Verification failed");
      }
    } catch (error) {
      console.log("Error fetching logged-in user:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchLoggedInUser();
      await fetchApplications();
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   if (loggedInUser) {
  //     console.log("Logged in user email: ", loggedInUser.email);
  //   }
  // }, [loggedInUser]);

  const userApplications = applications.filter((application) => {
    return loggedInUser && loggedInUser.email
        ? application.userEmail === loggedInUser.email
        : true;
  });

  return (
      <div className="application-container">
        <div className="applications-content">
          <h2>
            My<span style={{ color: "blue" }}>Applications</span>
          </h2>
          <div className="applications-list" style={{marginBottom: "2rem"}}>
            {userApplications.length > 0 ? (
                userApplications.map((app, index) => (
                    <div key={index} className="application-card">
                      <div className="job-details">
                        <h3>
                          <strong>Internship Title</strong> : {app.jobTitle}
                        </h3>
                        <p>
                          <strong>Status : </strong>
                          {app.status}
                        </p>
                      </div>
                    </div>
                ))
            ) : (
                <p>No Applications submitted!</p>
            )}
          </div>
        </div>
      </div>
  );
};

export default Applications;
