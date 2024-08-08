import React, { useEffect, useState } from "react";
import "../../pages.css/admin.css";
import AllInternship from "../Jobs/AllInternship.js";
import AllJobs1 from "../Jobs/AllJobs1.js";

const AdminDashboardAllJobs = props => {
  const [visiblebtn, setVisiblebtn] = useState("postedbtn1");
  
  return (
    <div className="home">
      <div className="section1">
        <div className="post_job_title">All Posted Jobs/Internships</div>
      </div>
      <div className="section2">
        {visiblebtn === "postedbtn1" && (
          <AllJobs1
            deletejobhandler={props.deletejobhandler}
            jobsarr={props.jobsarray}
            updatejobhandler={props.updatejobhandler}
            setView={props.setView}
            viewApplication={props.viewApplicationjobhandler}
            button={props.setView}
          />
        )}
      
      </div>
    </div>
  );
};

export default AdminDashboardAllJobs;
