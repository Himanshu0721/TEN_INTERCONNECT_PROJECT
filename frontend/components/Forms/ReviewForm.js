import React, { useState } from 'react';



const ReviewForm = ({ personalInfo, education, workExperience }) => {
  const [btn, setBtn] = useState({});

  return (
    <div className="review-form">
      <h2>Review your information</h2>
      <div className="personal-info">
        <h3>Personal Information</h3>
        <div className="info">
          <p><strong>Name:</strong> {personalInfo.name}</p>
          <p><strong>Email:</strong> {personalInfo.email}</p>
          <p><strong>Phone:</strong> {personalInfo.phone}</p>
          <p><strong>Address:</strong> {personalInfo.address}</p>
        </div>
      </div>
      <div className="education">
        <h3>Education</h3>
        {Array.isArray(education) && education.map((edu, index) => (
          <div className="info" key={index}>
            <p><strong>School:</strong> {edu.school}</p>
            <p><strong>Degree:</strong> {edu.degree}</p>
            <p><strong>Field of Study:</strong> {edu.fieldOfStudy}</p>
            <p><strong>Graduation Date:</strong> {edu.graduationDate}</p>
          </div>
        ))}
      </div>
      <div className="work-experience">
        <h3>Work Experience</h3>
        {Array.isArray(workExperience) && workExperience.map((exp, index) => (
          <div className="info" key={index}>
            <p><strong>Company:</strong> {exp.company}</p>
            <p><strong>Position:</strong> {exp.position}</p>
            <p><strong>Start Date:</strong> {exp.startDate}</p>
            <p><strong>End Date:</strong> {exp.endDate}</p>
          </div>
        ))}
      </div>
      <div className="buttons button_space">
        <button type="submit" onClick={() => setBtn(-1)} >Back</button>
        <button type="submit" onClick={() => setBtn(1)} >Next</button>
      </div>
    </div>
  );
};

export default ReviewForm;
