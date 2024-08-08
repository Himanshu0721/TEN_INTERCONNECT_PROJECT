import React, { useState } from "react";
import "../../componentsCss/UserProfile.css";

const PersonalInfoForm = ({ onNext, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    // const errors = {};
    // if (!firstName.trim()) {
    //   errors.firstName = "First name is required";
    // }
    // if (!lastName.trim()) {
    //   errors.lastName = "Last name is required";
    // }
    // if (!email.trim()) {
    //   errors.email = "Email is required";
    // }
    // if (!phone.trim()) {
    //   errors.phone = "Phone number is required";
    // }
    // setErrors(errors);

    // If there are no errors, move to next step
    if (Object.keys(errors).length === 0) {
      onNext({ personalInfo: formData });
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
        <h2> Your Personal Information</h2>
        <p>Enter your personal information to get closer to companies.</p>
      </div>
      <div className="input-text">
        <div className="input-div">
          <input
            type="text"
            required
            require
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            autoComplete="given-name"
          />
          <span>First Name</span>
        </div>

        <div className="input-div">
          <input
            type="text"
            required
            require
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <span>Last Name</span>
        </div>
      </div>
      {errors.firstName && (
        <div className="error-message">{errors.firstName}</div>
      )}

      {errors.lastName && (
        <div className="error-message">{errors.lastName}</div>
      )}

      <div className="input-text">
        <div className="input-div">
          <input
            type="Number"
            required
            require
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <span>Phone number</span>
        </div>
        <div className="input-div">
          <input
            type="email"
            required
            require
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span>E-mail Address</span>
        </div>
      </div>
      {errors.email && <div className="error-message">{errors.email}</div>}
      {errors.phone && <div className="error-message">{errors.phone}</div>}

      <div className="input-text">
        <div className="input-div">
          <input
            type="text"
            required
            require
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <span>Your Address</span>
        </div>
      </div>
      <div className="input-text">
        <div className="input-div">
          {/* <span>Your State</span> */}
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option>Select State</option>
            <option>New Delhi</option>
            <option>Paris</option>
            <option>London</option>
            <option>Washington D.C.</option>
            <option>Berlin</option>
            <option>Moscow</option>
            <option>Bejing</option>
            <option>Tokyo</option>
            <option>Islamabad</option>
          </select>
        </div>
      </div>
      <div className="input-text">
        <div className="input-div">
          <input
            type="text"
            required
            require
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <span>City</span>
        </div>
        <div className="input-div">
          <input
            type="Number"
            required
            require
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
          />
          <span>ZIP/Postal Code</span>
        </div>
      </div>

      <div className="buttons">
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

export default PersonalInfoForm;
