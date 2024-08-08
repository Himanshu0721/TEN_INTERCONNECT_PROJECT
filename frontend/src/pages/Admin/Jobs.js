/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './jobs.module.css';
import api from "../../api/base";
import JobList from "../../components/Jobs/JobList";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState(null);
  // GET all jobs
  const retriveJobs = async () => {
    // const response = await api.get("/jobs");
    const response = await api.get("jobs/show");
    return response.data;
  };

  // ADD job
  const addJobHandler = async (job) => {
    const request = {
      id: job.id,
      ...job,
    };
    const response = await api.post("/jobs", request);
    setJobs([...jobs, response.data]);
  };

  // DELETE job
  const removeJobHandler = async (id) => {
    await api.delete(`/jobs/${id}`);
    const newJobsList = jobs.filter((job) => {
      return job.id !== id;
    });

    setJobs(newJobsList);
  };

  // update job
  const updateJobHandler = async (job) => {
    const response = await api.put(`/jobs/${job.id}`, job);
    const { id, role, company, location, description, datePosted } =
      response.data;
    setJobs(
      jobs.map((job) => {
        return job.id === id ? { ...response.data } : job;
      })
    );
  };

  useEffect(() => {
    const getAllJobs = async () => {
      const allJobs = await retriveJobs();
      if (allJobs) setJobs(allJobs);
    };

    getAllJobs();
  }, []);

  return (
    <div className={styles.jobs}>
        <div className="ulist">
          <JobList
            jobs={jobs}
            setCurrentJob={setCurrentJob}
            removeJobHandler={removeJobHandler}
          />
        </div>
      {/* {currentJob && <JobDetails job={currentJob} />} */}
    </div>
  );
}

export default Jobs;
