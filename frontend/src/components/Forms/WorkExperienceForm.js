import "../../componentsCss/WorkExperienceForm.css";
import React, { useState, useEffect } from "react";

const WorkExperienceForm = ({ onNext, onPrevious, formData, setFormData }) => {
  const [errors, setErrors] = useState({});
  const { workExperiences } = formData;
  const [workExperience, setWorkExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
    FullTime: false,
    PartTime: false,
    Internship: false,
  });

  const handleInputChange = (e) => {
    const { name, id, checked } = e.target;

    if (e.target.type === "radio") {
      setWorkExperience((prevExperience) => ({
        ...prevExperience,
        [id]: checked,
      }));
    } else {
      setWorkExperience((prevExperience) => ({
        ...prevExperience,
        [name]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      onNext();
    }
  };

  const handleAddExperience = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      workExperiences: [...workExperiences, workExperience],
    });
    setWorkExperience({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      FullTime: false,
      PartTime: false,
      Internship: false,
    });
  };

  useEffect(() => {
    if (formData.workExperiences.length) {
      formData.workExperiences.forEach((experience, index) => {
        if (
          experience.company === "" ||
          experience.position === "" ||
          experience.startDate === "" ||
          experience.endDate === "" ||
          experience.description === ""
        ) {
          alert("Please add all the fields");
          formData.workExperiences.pop();
          setFormData({
            ...formData,
            workExperiences: formData.workExperiences,
          });
        }
      });
    }
    setWorkExperience({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      FullTime: false,
      PartTime: false,
      Internship: false,
    });
  }, [formData]);

  const handleRemoveExperience = (experience) => {
    const updatedWorkExperiences = workExperiences.filter(
      (exp) => exp !== experience
    );
    setFormData({ ...formData, workExperiences: updatedWorkExperiences });
  };

  return (
    <form onSubmit={handleSubmit} className="work-experience-form">
      <div>
        <small>
          <i className="fa fa-smile-o"></i>
        </small>
        <div className="text">
          <h2>Work Experience</h2>
          <p>
            Showcase your professional journey, achievements, and the expertise
            gained along the way.
          </p>
        </div>
        {formData.workExperiences.map((experience, index) => (
          <div key={index}>
            <div className="input-text">
              <div className="input-div">
                <input
                  type="text"
                  name="company"
                  value={experience.company}
                  onChange={handleInputChange}
                  required
                />
                <span>Company Name:</span>
              </div>
            </div>
            <div className="input-text">
              <div className="input-div">
                <input
                  type="text"
                  name="position"
                  value={experience.position}
                  onChange={handleInputChange}
                  required
                />
                <span>Position/Role:</span>
              </div>
            </div>
            <div className="input-text">
              <div className="input-div">
                <input
                  type="text"
                  name="description"
                  value={experience.description}
                  onChange={handleInputChange}
                  required
                />
                <span>Description:</span>
              </div>
            </div>

            <div className="input-text">
              <div className="input-div">
                <input
                  type="date"
                  name="startDate"
                  value={experience.startDate}
                  onChange={handleInputChange}
                  required
                />
                <span>Start Date:</span>
              </div>

              <div className="input-div">
                <input
                  type="date"
                  name="endDate"
                  value={experience.endDate}
                  onChange={handleInputChange}
                  required
                />
                <span>End Date:</span>
              </div>
            </div>

            <div className="input-text">
              <div className="input-div">
                <input
                  type="radio"
                  id="FullTime"
                  value="Full-Time"
                  checked={experience.FullTime}
                  required
                />
                <label htmlFor="FullTime" style={{ fontSize: "12px" }}>
                  Full-Time
                </label>
              </div>
              <div className="input-div">
                <input
                  type="radio"
                  id="PartTime"
                  value="Part-time"
                  checked={experience.PartTime}
                  required
                />
                <label htmlFor="PartTime" style={{ fontSize: "12px" }}>
                  Part-time
                </label>
              </div>
              <div className="input-div">
                <input
                  type="radio"
                  id="Internship"
                  value="Internship"
                  checked={experience.Internship}
                  required
                />
                <label htmlFor="Internship" style={{ fontSize: "12px" }}>
                  Internship
                </label>
              </div>
            </div>

            <button onClick={() => handleRemoveExperience(experience)}>
              <div className="del">
                <div className="del-button">
                  <i className="fa fa-trash-o"></i>
                  <span> Remove </span>
                </div>
              </div>
            </button>
            <div style={{ margin: "30px" }}>
              <hr />
            </div>
          </div>
        ))}

        <div className="experience-section">
          <div className="input-text">
            <div className="input-div">
              <input
                type="text"
                name="company"
                value={workExperience.company}
                onChange={handleInputChange}
              />
              <span>Company Name:</span>
            </div>
          </div>
          <div className="input-text">
            <div className="input-div">
              <input
                type="text"
                name="position"
                value={workExperience.position}
                onChange={handleInputChange}
              />
              <span>Position/Role:</span>
            </div>
          </div>
          <div className="input-text">
            <div className="input-div">
              <input
                type="text"
                name="description"
                value={workExperience.description}
                onChange={handleInputChange}
              />
              <span>Description:</span>
            </div>
          </div>
          <div className="calender">
            <div className="input-text">
              <div className="input-div">
                <input
                  type="date"
                  name="startDate"
                  value={workExperience.startDate}
                  onChange={handleInputChange}
                />
                <span>Start Date:</span>
              </div>

              <div className="input-div">
                <input
                  type="date"
                  name="endDate"
                  value={workExperience.endDate}
                  onChange={handleInputChange}
                />
                <span>End Date:</span>
              </div>
            </div>
          </div>

          <div className="input-text">
            <div className="input-div">
              <input
                type="radio"
                id="FullTime"
                name="type"
                value="Full-Time"
                checked={workExperience.FullTime}
                onChange={handleInputChange}
              />
              <label htmlFor="FullTime" style={{ fontSize: "12px" }}>
                Full-Time
              </label>
            </div>
            <div className="input-div">
              <input
                type="radio"
                id="PartTime"
                name="type"
                value="Part-time"
                checked={workExperience.PartTime}
                onChange={handleInputChange}
              />
              <label htmlFor="PartTime" style={{ fontSize: "12px" }}>
                Part-time
              </label>
            </div>
            <div className="input-div">
              <input
                type="radio"
                id="Internship"
                name="type"
                value="Internship"
                checked={workExperience.Internship}
                onChange={handleInputChange}
              />
              <label htmlFor="Internship" style={{ fontSize: "12px" }}>
                Internship
              </label>
            </div>
          </div>
        </div>

        <div>
          <div
            className="add"
            style={{
              cursor: "pointer",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            <button onClick={handleAddExperience}>
              <div className="add-button" style={{ cursor: "pointer" }}>
                <span> + Add Experience </span>
              </div>
            </button>
          </div>
        </div>

        <hr />
        <div className="bu button_space">
          <button className="previous" onClick={onPrevious}>
            Previous
          </button>
          <button type="submit" className="next_button">
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default WorkExperienceForm;
