import React, { useState } from "react";

import JobList from "../Jobs/JobList";
import JobForm from "../Jobs/JobForm";
import "../../pages.css/admin.css";

const AdminDashboardJob = (props) => {
  const [currentJob, setCurrentJob] = useState(null);
  const removeJobHandler = props.removeJobHandler;
  const createJobHandler = props.createJobHandler;

  return (
    <div className="container-ulist-uprofile ">
      <div className="uform">
        <JobForm onSubmit={createJobHandler} />
      </div>
      <div className="ulist">
        <JobList
          jobs={props.jobs}
          removeJobHandler={removeJobHandler}
          setCurrentJob={setCurrentJob}
        />
      </div>

      {/* <div className="u-profile">
        {currentJob && <JobDetails job={currentJob} />}
      </div> */}
    </div>
  );
};

export default AdminDashboardJob;
