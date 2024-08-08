import React, { useState } from "react";
import "../../componentsCss/employerstyles/addjob.css";

const UpdateJob = ({ updatejobhandler, backbtnhandler, update, submitbtn }) => {
  const [currjobdetails, setCurrjobdetails] = useState({
    company_id: update.company_id,
    company_name: update.company_name,
    description: update.description,
    job_id: update._id,
    job_deadline: update.job_deadline,
    job_type: update.job_type,
    location: update.location,
    max_applicants: update.max_applicants,
    role_name: update.role_name,
    salary: update.salary,
    skills_required: update.skills_required,
    totalpositions: update.totalpositions,
  });

  const change = (e) => {
    const { name, value } = e.target;
    setCurrjobdetails({ ...currjobdetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Update Array input : ", update);
    console.log("Company_id is ", update.company_id);
    console.log(currjobdetails);
    let skillsRequired = currjobdetails.skills_required;
    let skillsArray = skillsRequired.split(",");
    const updatedJobDetails = {
      company_id: currjobdetails.company_id,
      company_name: currjobdetails.company_name,
      description: currjobdetails.description,
      job_id: update._id,
      job_deadline: currjobdetails.job_deadline,
      job_type: currjobdetails.job_type,
      location: currjobdetails.location,
      max_applicants: currjobdetails.max_applicants,
      role_name: currjobdetails.role_name,
      salary: currjobdetails.salary,
      skills_required: skillsArray,
      totalpositions: currjobdetails.totalpositions,
    };
    console.log("Updated Job details : ", updatedJobDetails);
    updatejobhandler(currjobdetails.job_id, updatedJobDetails);
    submitbtn();
  };

  return (
    <div className="job-container" id="updatejob-container">
      <div className="create-job mt-9" id="update-job">
        <div className="heading">
          <h2>Update Internship </h2>
        </div>
        <div className="form">
          <div className="input-text">
            <div className="form-row">
              <label className="tags">Company Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Company Name"
                name="company_name"
                value={currjobdetails.company_name}
                onChange={change}
              />
            </div>
            <div className="form-row">
              <label className="tags">Company id</label>
              <input
                className="form-control"
                type="number"
                placeholder="Company id"
                name="company_id"
                value={currjobdetails.company_id}
                onChange={change}
              />
            </div>
            <div className="form-row">
              <label className="tags">Company Location</label>
              <input
                className="form-control"
                type="text"
                placeholder="Company Location"
                name="location"
                value={currjobdetails.location}
                onChange={change}
              />
            </div>
          </div>
          <div className="input-text">
            <div className="form-row">
              <label className="tags">Internship  Title</label>
              <input
                className="form-control"
                type="text"
                placeholder="Job role"
                name="role_name"
                value={currjobdetails.role_name}
                onChange={change}
              />
            </div>
            <div className="form-row">
              <label className="tags">Enter Required Skills</label>
              <input
                className="form-control"
                type="text"
                placeholder="Seperate by (,)"
                name="skills_required"
                value={currjobdetails.skills_required}
                onChange={change}
              />
            </div>
          </div>
          <div className="input-text">
            <div className="form-row">
              <label className="tags">Job Type</label>
              <select
                className="form-control"
                name="job_type"
                value={currjobdetails.job_type}
                onChange={change}
              >
                <option value="">Select Internship  Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Work From Home">Work From Home</option>
              </select>
            </div>
            <div className="form-row">
              <label className="tags">Salary</label>
              <input
                className="form-control"
                type="number"
                placeholder="0"
                name="salary"
                value={currjobdetails.salary}
                onChange={change}
                min="0"
                max="1000000"
              />
            </div>
          </div>
          <div className="input-text">
            <div className="form-row">
              <label className="tags">Application Deadline</label>
              <input
                className="form-control"
                type="date"
                name="job_deadline"
                value={currjobdetails.job_deadline}
                onChange={change}
              />
            </div>
            <div className="form-row">
              <label className="tags">Max No.Of Applicants</label>
              <input
                className="form-control"
                type="number"
                placeholder="0"
                name="max_applicants"
                value={currjobdetails.max_applicants}
                onChange={change}
              />
            </div>
            <div className="form-row">
              <label className="tags">Positions Available</label>
              <input
                className="form-control"
                type="number"
                placeholder="0"
                name="totalpositions"
                value={currjobdetails.totalpositions}
                onChange={change}
              />
            </div>
          </div>
          <div className="form-row">
            <label className="tags">Description</label>
            <textarea
              className="form-control"
              rows="6"
              placeholder="Job Description"
              name="description"
              required
              value={currjobdetails.description}
              onChange={change}
            ></textarea>
          </div>
          <div id="updatejobbtns">
            <button className="created" onClick={backbtnhandler}>
              Back
            </button>
            <button
              className="created"
              id="updatejobbtn"
              onClick={handleSubmit}
            >
              Update Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateJob;
