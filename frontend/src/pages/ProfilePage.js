import React from "react";

const ProfilePage = (props) => {
  const user = props.user;
  const {
    id,
    personalInfo,
    education,
    workExperienceInfo,
    socialMedia,
    skillset,
  } = user;

  return (
    <div className="userDetails">
      <h1>User Details</h1>
      <ul>{id}</ul>
      <ul>{personalInfo.firstName + " " + personalInfo.lastName}</ul>
      <ul>{education.school}</ul>
      <button>Update</button>
    </div>
  );
};

export default ProfilePage;
