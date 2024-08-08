import React, { useState } from "react";
import api from "../../api/base";

const JobForm = () => {
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState(null);

  // ADD job
  const addJobHandler = async (job) => {
    const request = {
      id: job.id,
      ...job,
    };
    const response = await api.post("/jobs", request);
    setJobs([...jobs, response.data]);
  };

  const [job, setJob] = useState({
    id: "",
    role: "",
    company: "",
    location: "",
    description: "",
    datePosted: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJobHandler(job);
    setJob({
      id: "",
      role: "",
      company: "",
      location: "",
      description: "",
      datePosted: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Internship</h2>

      <span>Role:</span>
      <input
        type="text"
        id="role"
        name="role"
        value={job.role}
        onChange={handleChange}
      />

      <span>Company:</span>
      <input
        type="text"
        id="company"
        name="company"
        value={job.company}
        onChange={handleChange}
      />

      <span htmlFor="location">Location:</span>
      <input
        type="text"
        id="location"
        name="location"
        value={job.location}
        onChange={handleChange}
      />

      <span htmlFor="description">Description:</span>
      <textarea
        id="description"
        name="description"
        value={job.description}
        onChange={handleChange}
      ></textarea>

      <span htmlFor="datePosted">Date Posted:</span>
      <input
        type="date"
        id="datePosted"
        name="datePosted"
        value={job.datePosted}
        onChange={handleChange}
      />

      <button type="submit">Create Internship</button>
    </form>
  );
};

export default JobForm;
