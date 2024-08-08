import React, {useEffect, useState} from "react";
import "../../componentsCss/employerstyles/alljobs.css";
import UpdateJob from "./UpdateJob.js";
import {useNavigate} from "react-router-dom";


// let updatejobarr = [];

const AllJobs1 = ({ deletejobhandler, jobsarr, updatejobhandler, setView }) => {
  const Currdate = new Date();
  const navigate = useNavigate();
  const [updatejobarr, setUpdatejobarr] = useState([]);
  // const compare = (jobdeadline) => {
  //     if (new Date(jobdeadline).getTime() < new Date(Currdate).getTime()) {
  //         <div>Closed</div>
  //     }
  //     else {
  //         <div>Active</div>
  //     }
  //     console.log(`Interval is working`);
  // }

  const checkJobStatus = jobDeadline => {
    const jobDeadlineTime = new Date(jobDeadline).getTime();
    const currentDate = new Date().getTime();

    if (jobDeadlineTime < currentDate) {
      return <div style={{ color: "red" }}>Closed</div>;
    } else {
      return <div style={{ color: "green" }}>Active</div>;
    }

    const openupdatejob = (jobId, indexId) => {
      console.log(jobId, indexId);
      document.getElementById("allinternships").style.border = "none";
      document.getElementById("updatesection").style.display = "block";
      document.getElementById("alljobstable").style.border = "none";
      // updatejobarr = jobsarr[indexId];
      // console.log(updatejobarr);
      const updatedJobData = {
        id: jobId,
        ...jobsarr[indexId],
      };
      setUpdatejobarr(updatedJobData); // Refactoring Error
      console.log(updatejobarr);
    };
  };

  const openupdatejob = (jobId, indexId) => {
    console.log(jobId, indexId);

    document.getElementById("allinternships").style.border = "none";
    document.getElementById("updatesection").style.display = "block";
    document.getElementById("alljobstable").style.border = "none";
    const jobUpdatedDetails =  {
        ...jobsarr[indexId],
        job_id: jobId
    }
    // updatejobarr = jobsarr[indexId];
    // console.log(updatejobarr);const jobUpdate
    setUpdatejobarr(jobUpdatedDetails); // Refactoring Error
    console.log(updatejobarr);
  };

  const backbtn = () => {
    document.getElementById("updatesection").style.display = "none";
    document.getElementById("allinternships").style.border = "block";
    // updatejobarr=[];
    // console.log(updatejobarr);
  };

  const submitbtn = () => {
    document.getElementById("updatesection").style.display = "none";
    document.getElementById("allinternships").style.border = "block";
  };

  const deletejob = jobId => {
    console.log(jobId);
    deletejobhandler(jobId);
  };
    function handleViewApplication(jobId,roleName,companyName) {
        navigate("/admin/viewapplication",{
          state: { jobId , roleName,companyName }
        })
    }

    return (
    <div id="allinternships">
      {jobsarr.length !== 0 ? (
        <div className="tablesection">
          <table id="alljobstable">
            <thead>
              <th>Internship Profile</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
              <th>Action</th>
            </thead>
            <tbody>
              {jobsarr &&
                jobsarr.map((job, index) => (
                  <tr key={index}>
                    <td className="">{job.role_name}</td>
                    <td className="">
                      {
                        // {console.log(job.job_deadline)}
                        // setInterval(() => {
                        //   if (new Date(job.job_deadline).getTime() < new Date(Currdate).getTime()) {
                        //     <div>Closed</div>
                        //   }
                        //   else {
                        //     <div>Active</div>
                        //   }
                        //   console.log(`Interval is working`);
                        // }, 5000)

                        // new Date(job.job_deadline).getTime() < new Date(Currdate).getTime() ?
                        //     <div style={{ "color": "red" }}>Closed</div> :
                        //     <div style={{ "color": "green" }}>Active</div>

                        checkJobStatus(job.job_deadline)
                      }
                    </td>
                    <td className="">
                      <input
                        type="button"
                        value="Update"
                        onClick={() => openupdatejob(job._id, index)}
                        className="alljobsbtns"
                      />
                    </td>
                    <td className="">
                      <input
                        type="button"
                        value="Delete"
                        onClick={() => deletejob(job._id)}
                        className="alljobsbtns"
                      />
                    </td>
                    <td className="">
                      <input
                        type="button"
                        value="View Applications"
                        className="alljobsbtns"
                        onClick={() => handleViewApplication(job.job_id,job.role_name,job.company_Name)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div id="hire">
          <div className="hiresection1">
            <div className="hiresubsection1">
              Hire the best freshers <div id="spantext">faster</div> and{" "}
              <div id="spantext">Better.</div> Now guaranteed!
            </div>
            <div className="hiresubsection2">
              <input
                type="button"
                className="postbtn"
                value="Post Job"
                onClick={() => setView("postjob")}
              />
            </div>
          </div>
          <div className="hiresection2">
            <img
              src="https://img.freepik.com/premium-vector/online-recruitment-concept-people-searching-candidate-new-employee-hiring-concept-illustration_138260-629.jpg"
              alt=""
            />
          </div>
        </div>
      )}
      <div id="updatesection">
        <UpdateJob
          updatejobhandler={updatejobhandler}
          backbtnhandler={backbtn}
          update={updatejobarr}
          submitbtn={submitbtn}
        />
      </div>
    </div>
  );
};

export default AllJobs1;
