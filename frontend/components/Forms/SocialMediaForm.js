import React, { useState } from "react";

const SocialMediaForm = ({ formData, onNext, setFormData, onPrevious }) => {
  const [errors, setErrors] = useState({});

  const handlePrevious = (e) => {
    e.preventDefault();
    onPrevious();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here

    if (Object.keys(errors).length === 0) {
      onNext();
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
        <h2>Social Media</h2>
        <p>
          Connect with us: Share your digital footprint and stay linked through
          our social media channels.
        </p>
      </div>
      <div className="input-text">
        <div className="input-div">
          <input
            type="text"
            // required
            // require
            id="linkedInUrl"
            name="linkedInUrl"
            value={formData.linkedInUrl}
            onChange={handleChange}
          />
          <span>LinkedIn URL</span>
        </div>
      </div>
      <div className="input-text">
        <div className="input-div">
          <input
            type="text"
            // required require
            id="githubUrl"
            name="githubUrl"
            value={formData.githubUrl}
            onChange={handleChange}
          />
          <span>Github URL</span>
        </div>
      </div>
      <div className="input-text">
        <div className="input-div">
          <input
            type="text"
            // required require
            id="portfolioUrl"
            name="portfolioUrl"
            value={formData.portfolioUrl}
            onChange={handleChange}
          />
          <span>Portfolio URL</span>
        </div>
      </div>
      <div className="buttons button_space">
        <button style={{ width: "100px" }} onClick={handlePrevious}>
          Previous
        </button>
        <button type="submit" style={{ width: "100px" }}>
          Next
        </button>
      </div>
    </form>
  );
};

export default SocialMediaForm;
