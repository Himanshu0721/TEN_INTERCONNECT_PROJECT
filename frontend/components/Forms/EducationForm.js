import React, { useState } from "react";
import "../../componentsCss/UserProfile.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EducationForm = ({ formData, onNext, setFormData, onPrevious }) => {
  const [errors, setErrors] = useState({});

  const handlePrevious = (e) => {
    e.preventDefault();
    onPrevious();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here

    if (Object.keys(errors).length === 0) {
      onNext({ education: formData });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <small>
        <i className="fa fa-smile-o"></i>
      </small>
      <div className="text">
        <h2>Education</h2>
        <p>Inform companies about your education life.</p>
      </div>
      <div className="input-text">
        <div className="input-div">
          <input
            type="text"
            name="clg"
            required
            require
            value={formData.clg}
            onChange={handleChange}
          />
          <span>College Name</span>
        </div>
        <div className="input-div">
          <input
            type="text"
            name="branch"
            required
            require
            value={formData.branch}
            onChange={handleChange}
          />
          <span>Branch of Study</span>
        </div>
      </div>

      {/* <div className="input-text">
        <div className="input-div">
          <input
            type="text"
            name="college"
            required
            require
            value={formData.major}
            onChange={handleChange}
          />
          <span>College/University name</span>
        </div>
      </div> */}
      <div className="input-text">
        <div className="input-div">
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            required
            require
            type="text"
          >
            <option>Education Level</option>
            <option>BCA</option>
            <option>B-TECH</option>
            <option>BA</option>
            <option>B-COM</option>
            <option>B-SC</option>
            <option>MBA</option>
            <option>MCA</option>
            <option>M-COM</option>
            <option>M-TECH</option>
          </select>
        </div>
      </div>

      <div className="calender">
        <div className="input-text">
          <div className="input-div">
            {/* <label htmlFor="startDate">Start Date:</label>
          <DatePicker
            id="startDate"
            name="startDate"
            selected={formData.startDate}
            onChange={(date) =>
              handleChange({ target: { name: "startDate", value: date } })
            }
            dateFormat="dd/MM/yyyy"
          /> */}

            <span for="date">Start Date:</span>
            <input
              type="date"
              id="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              dateFormat="dd/mm/yyyy"
              required
            ></input>
          </div>

          <div className="input-div">
            <span for="date">End Date:</span>
            <input
              type="date"
              id="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              dateFormat="dd/mm/yyyy"
              required
            ></input>
          </div>
        </div>
      </div>

      <div className="buttons button_space">
        <button
          className="previous"
          onClick={handlePrevious}
          style={{ padding: "10px 20px" }}
        >
          Previous
        </button>
        <button
          type="submit"
          className="next_button"
          style={{ padding: "10px 20px" }}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default EducationForm;
