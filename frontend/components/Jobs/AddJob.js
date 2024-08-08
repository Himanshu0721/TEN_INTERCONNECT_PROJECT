import React, { useState } from "react";
import "../../componentsCss/employerstyles/addjob.css";

const AddJob = ({addjobhandler,jobDetails,setJobDetails}) => {
  // const [jobDetails, setJobDetails] = useState({
  //   role_name: "",
  //   skills_required: [],
  //   job_type: "",
  //   location: "",
  //   description: "",
  //   company_name: "",
  //   company_id: "",
  //   job_deadline: "",
  //   max_applicants: "",
  //   totalpositions: "",
  //   salary:""
  // });

  const handleInput = (field, value) => {
    setJobDetails({ ...jobDetails, [field]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    addjobhandler(jobDetails);
  };

  return (
    <div className="job-container">
      <div className="create-job mt-9">
        <div className="heading">
            <h2>Post Internship</h2>
        </div>
        <div className="form">
          <div className="input-text">
            <div className="form-row">
              <label className="tags">Company Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Company Name"
                value={jobDetails.company_name}
                onChange={(event) => handleInput("company_name", event.target.value)}
              />
            </div>
            <div className="form-row">
              <label className="tags">Company id</label>
              <input
                class="form-control"
                type="number"
                placeholder="Company id"
                value={jobDetails.company_id}
                onChange={(event) => handleInput("company_id", event.target.value)}
              />
            </div>
            <div className="form-row">
              <label className="tags">Company Location</label>
              <input
                class="form-control"
                type="text"
                placeholder="Company Location"
                value={jobDetails.location}
                onChange={(event) => handleInput("location", event.target.value)}
              />
            </div>
          </div>
          <div className="input-text">
            <div className="form-row">
              <label className="tags">Internship Title</label>
              <input
                class="form-control"
                type="text"
                placeholder="Job role"
                value={jobDetails.role_name}
                onChange={(event) =>
                  handleInput("role_name", event.target.value)
                }
              />
            </div>
            <div className="form-row">
              <label className="tags">Enter Required Skills</label>
              <input
                class="form-control"
                type="text"
                placeholder="Seperate by (,)"
                value={jobDetails.skills_required}
                onChange={(event) =>
                  handleInput("skills_required", event.target.value.split(","))
                }
              />
            </div>
          </div>

          <div className="input-text">
            <div className="form-row">
              <label className="tags">Internship Type</label>
              <select
                class="form-control"
                value={jobDetails.job_type}
                onChange={(event) => handleInput("job_type", event.target.value)}
              >
                <option value="">Select Internship Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Work From Home">Work From Home</option>
              </select>
            </div>
            {/* <div className="form-row">
              <label className="tags" for="duration">Duration</label>
              <select
                className="form-control"
                value={jobDetails.duration}
                name="duration"
                onChange={(event) =>
                  handleInput("duration", event.target.value)
                }
              >
                <option className="options" value="">Select Duration</option>
                <option className="options" value={0}>Flexible</option>
                <option className="options" value={1}>1 Month</option>
                <option className="options" value={2}>2 Months</option>
                <option className="options" value={3}>3 Months</option>
                <option className="options" value={4}>4 Months</option>
                <option className="options" value={5}>5 Months</option>
                <option className="options" value={6}>6 Months</option>
              </select> 
            </div> */}
            <div className="form-row">
            <label className="tags">Salary</label>
              <input
                className="form-control"
                type="number"
                placeholder="0"
                value={jobDetails.salary}
                min="0"
                max="1000000"
                onChange={(event) =>
                  handleInput("salary", event.target.value)
                }
              />
            </div>
          </div>

          <div className="input-text">
            <div className="form-row">
              <label className="tags">Application Deadline</label>
              <input
                class="form-control"
                type="date"
                value={jobDetails.job_deadline}
                onChange={(event) =>
                  handleInput("job_deadline", event.target.value)
                }
              />
            </div>
            <div className="form-row">
              <label className="tags">Max No.Of Applicants</label>
              <input
                class="form-control"
                type="number"
                placeholder="0"
                value={jobDetails.max_applicants}
                onChange={(event) =>
                  handleInput("max_applicants", event.target.value)
                }
              />
            </div>
            <div className="form-row">
              <label className="tags">Positions Available</label>
              <input
                class="form-control"
                type="number"
                placeholder="0"
                value={jobDetails.totalpositions}
                onChange={(event) =>
                  handleInput("totalpositions", event.target.value)
                }
              />
            </div>
          </div>

          <div className="form-row">
            <label className="tags">Description</label>
            <textarea
              class="form-control"
              rows="6"
              placeholder="Job Description"
              ng-model="description"
              name="description"
              required
              value={jobDetails.description}
              onChange={(event) =>
                handleInput("description", event.target.value)
              }
            ></textarea>
          </div>

          <div className="" id="postbtn">
            <button className="created" onClick={handleSubmit}>
              Post Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;