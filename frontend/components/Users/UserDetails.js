/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const UserDetails = (props) => {
  const {
    id,
    personalInfo,
    education,
    workExperienceInfo,
    socialMedia,
    skillset,
  } = props.user;

  const renderSkills = skillset.skills.map((skill) => {
    return <span>{skill} </span>;
  });

  return (
    <>
      <h3>User Details</h3>
      <div className="">
        <p>{id}</p>
        <p>{personalInfo.firstName + " " + personalInfo.lastName}</p>
        <p>{education.school}</p>
        <p>{socialMedia.linkedInUrl}</p>
        {renderSkills}
      </div>
    </>
  );
};

export default UserDetails;
