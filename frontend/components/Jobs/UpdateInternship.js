import React, { useState } from "react";
import "../../componentsCss/employerstyles/addjob.css";
import axios from "axios";

const UpdateInternship = ({
  updateinternhandler,
  backbtnhandler,
  update,
  submitbtn,
}) => {
  const [internshipDetails, setinternshipDetails] = useState({
    internship_id: update._id,
    role_name: update.role_name,
    requiredSkills: update.requiredSkills,
    internship_Type: update.internship_Type,
    company_Location: update.company_Location,
    description: update.description,
    company_Name: update.company_Name,
    company_Id: update.company_Id,
    applicationDeadline: update.applicationDeadline,
    maxNoOfApplicants: update.maxNoOfApplicants,
    positionsAvailable: update.positionsAvailable,
    stipend: update.stipend,
    duration: update.duration,
  });

  const handleInput = (field, value) => {
    setinternshipDetails({ ...internshipDetails, [field]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("Details:", internshipDetails);
    // let skillsRequired = internshipDetails.requiredSkills;
    // let skillsRequiredArray = skillsRequired.split(',');
    console.log("Skills : ", internshipDetails.requiredSkills);
    const updatedInternshipDetails = {
      internship_id: update._id,
      role_name: internshipDetails.role_name,
      requiredSkills: internshipDetails.requiredSkills,
      internship_Type: internshipDetails.internship_Type,
      company_Location: internshipDetails.company_Location,
      description: internshipDetails.description,
      company_Name: internshipDetails.company_Name,
      company_Id: internshipDetails.company_Id,
      applicationDeadline: internshipDetails.applicationDeadline,
      maxNoOfApplicants: internshipDetails.maxNoOfApplicants,
      positionsAvailable: internshipDetails.positionsAvailable,
      stipend: internshipDetails.stipend,
      duration: internshipDetails.duration,
    };
    updateinternhandler(
      internshipDetails.internship_id,
      updatedInternshipDetails
    );
    submitbtn();
  };

  return (
    <div className="job-container">
      <div className="create-job mt-9">
        <div className="heading">
          <h2>Update Internship</h2>
        </div>
        <div className="form">
          <div className="input-text">
            <div className="form-row">
              <label className="tags">Company Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Company Name"
                value={internshipDetails.company_Name}
                onChange={event =>
                  handleInput("company_Name", event.target.value)
                }
              />
            </div>
            <div className="form-row">
              <label className="tags">Company id</label>
              <input
                class="form-control"
                type="number"
                placeholder="Company id"
                value={internshipDetails.company_Id}
                onChange={event =>
                  handleInput("company_Id", event.target.value)
                }
              />
            </div>
            <div className="form-row">
              <label className="tags">Company Location</label>
              <input
                class="form-control"
                type="text"
                placeholder="Company Location"
                value={internshipDetails.company_Location}
                onChange={event =>
                  handleInput("company_Location", event.target.value)
                }
              />
            </div>
          </div>
          <div className="input-text">
            <div className="form-row">
              <label className="tags">Internship Title</label>
              <input
                class="form-control"
                type="text"
                placeholder="Internship role"
                value={internshipDetails.role_name}
                onChange={event => handleInput("role_name", event.target.value)}
              />
            </div>
            <div className="form-row">
              <label className="tags">Enter Required Skills</label>
              <input
                class="form-control"
                type="text"
                placeholder="Seperate by (,)"
                value={internshipDetails.requiredSkills}
                onChange={event =>
                  handleInput("requiredSkills", event.target.value.split(","))
                }
              />
            </div>
          </div>

          <div className="input-text">
            <div className="form-row">
              <label className="tags">Internship Type</label>
              <select
                class="form-control"
                value={internshipDetails.internship_Type}
                onChange={event =>
                  handleInput("internship_Type", event.target.value)
                }
              >
                <option value="">Select Internship Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Work From Home">Work From Home</option>
              </select>
            </div>
            <div className="form-row">
              <label className="tags">Duration</label>
              <select
                className="form-control"
                value={internshipDetails.duration}
                onChange={event => handleInput("duration", event.target.value)}
              >
                <option value="">Select Duration</option>
                <option value={0}>Flexible</option>
                <option value={1}>1 Month</option>
                <option value={2}>2 Months</option>
                <option value={3}>3 Months</option>
                <option value={4}>4 Months</option>
                <option value={5}>5 Months</option>
                <option value={6}>6 Months</option>
              </select>
            </div>
            <div className="form-row">
              <label className="tags">Stipend</label>
              <input
                className="form-control"
                type="number"
                placeholder="0"
                value={internshipDetails.stipend}
                min="0"
                max="1000000"
                onChange={event => handleInput("stipend", event.target.value)}
              />
            </div>
          </div>

          <div className="input-text">
            <div className="form-row">
              <label className="tags">Application Deadline</label>
              <input
                class="form-control"
                type="date"
                value={internshipDetails.applicationDeadline}
                onChange={event =>
                  handleInput("applicationDeadline", event.target.value)
                }
              />
            </div>
            <div className="form-row">
              <label className="tags">Max No.Of Applicants</label>
              <input
                class="form-control"
                type="number"
                placeholder="0"
                value={internshipDetails.maxNoOfApplicants}
                onChange={event =>
                  handleInput("maxNoOfApplicants", event.target.value)
                }
              />
            </div>
            <div className="form-row">
              <label className="tags">Positions Available</label>
              <input
                class="form-control"
                type="number"
                placeholder="0"
                value={internshipDetails.positionsAvailable}
                onChange={event =>
                  handleInput("positionsAvailable", event.target.value)
                }
              />
            </div>
          </div>

          <div className="form-row">
            <label className="tags">Description</label>
            <textarea
              class="form-control"
              rows="6"
              placeholder="Internship Description"
              ng-model="description"
              name="description"
              required
              value={internshipDetails.description}
              onChange={event => handleInput("description", event.target.value)}
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
              Update Internship
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateInternship;
