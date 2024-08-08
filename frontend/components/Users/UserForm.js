import React, { useState } from "react";
import api from "../../api/base";

const UserForm = () => {
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
    },
    education: {
      school: "",
      branch: "",
      educationLevel: "",
      startDate: "",
      endDate: "",
    },
    workExperienceInfo: {
      workExperiences: [],
    },
    socialMedia: {
      linkedInUrl: "",
      githubUrl: "",
      portfolioUrl: "",
    },
    skillset: {
      skills: [],
    },
  });

  // ADD user
  const addUserHandler = async (user) => {
    const request = {
      id: user.id,
      ...user,
    };

    const response = await api.post("/users", request);
    setUsers([...users, response.data]);
  };

  const handlePersonalInfoChange = (e) => {
    setUser({
      ...user,
      personalInfo: {
        ...user.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleEducationChange = (e) => {
    setUser({
      ...user,
      education: {
        ...user.education,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleWorkExperienceChange = (e, index) => {
    const updatedWorkExperiences = [...user.workExperienceInfo.workExperiences];
    updatedWorkExperiences[index] = e.target.value;

    setUser({
      ...user,
      workExperienceInfo: {
        workExperiences: updatedWorkExperiences,
      },
    });
  };

  const handleSocialMediaChange = (e) => {
    setUser({
      ...user,
      socialMedia: {
        ...user.socialMedia,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSkillsetChange = (e) => {
    setUser({
      ...user,
      skillset: {
        skills: e.target.value.split(","),
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUserHandler(user);
    setUser({
      personalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
      },
      education: {
        school: "",
        branch: "",
        educationLevel: "",
        startDate: "",
        endDate: "",
      },
      workExperienceInfo: {
        workExperiences: [],
      },
      socialMedia: {
        linkedInUrl: "",
        githubUrl: "",
        portfolioUrl: "",
      },
      skillset: {
        skills: [],
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Personal Information</h2>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={user.personalInfo.firstName}
        onChange={handlePersonalInfoChange}
        // required
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={user.personalInfo.lastName}
        onChange={handlePersonalInfoChange}
        // required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={user.personalInfo.email}
        onChange={handlePersonalInfoChange}
        // required
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={user.personalInfo.phone}
        onChange={handlePersonalInfoChange}
        // required
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        value={user.personalInfo.location}
        onChange={handlePersonalInfoChange}
        // required
      />

      <h2>Education</h2>
      <label htmlFor="school">School:</label>
      <input
        type="text"
        id="school"
        name="school"
        value={user.education.school}
        onChange={handleEducationChange}
        // required
      />

      <label htmlFor="branch">Branch:</label>
      <input
        type="text"
        id="branch"
        name="branch"
        value={user.education.branch}
        onChange={handleEducationChange}
        // required
      />

      <label htmlFor="educationLevel">Education Level:</label>
      <input
        type="text"
        id="educationLevel"
        name="educationLevel"
        value={user.education.educationLevel}
        onChange={handleEducationChange}
        // required
      />

      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={user.education.startDate}
        onChange={handleEducationChange}
        // required
      />

      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        name="endDate"
        value={user.education.endDate}
        onChange={handleEducationChange}
        // required
      />

      <h2>Work Experience</h2>
      {user.workExperienceInfo.workExperiences.map((workExperience, index) => (
        <input
          key={index}
          type="text"
          value={workExperience}
          onChange={(e) => handleWorkExperienceChange(e, index)}
          // required
        />
      ))}
      <button
        type="button"
        onClick={() =>
          setUser({
            ...user,
            workExperienceInfo: {
              workExperiences: [...user.workExperienceInfo.workExperiences, ""],
            },
          })
        }
      >
        Add Work Experience
      </button>

      <h2>Social Media</h2>
      <label htmlFor="linkedInUrl">LinkedIn URL:</label>
      <input
        type="text"
        id="linkedInUrl"
        name="linkedInUrl"
        value={user.socialMedia.linkedInUrl}
        onChange={handleSocialMediaChange}
        // required
      />

      <label htmlFor="githubUrl">GitHub URL:</label>
      <input
        type="text"
        id="githubUrl"
        name="githubUrl"
        value={user.socialMedia.githubUrl}
        onChange={handleSocialMediaChange}
        // required
      />

      <label htmlFor="portfolioUrl">Portfolio URL:</label>
      <input
        type="text"
        id="portfolioUrl"
        name="portfolioUrl"
        value={user.socialMedia.portfolioUrl}
        onChange={handleSocialMediaChange}
        // required
      />

      <h2>Skillset</h2>
      <label htmlFor="skills">Skills (comma-separated):</label>
      <input
        type="text"
        id="skills"
        name="skills"
        value={user.skillset.skills.join(",")}
        onChange={handleSkillsetChange}
        // required
      />

      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;
