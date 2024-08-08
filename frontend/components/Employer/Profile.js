import React, { useState } from "react";
import "../../componentsCss/employerstyles/addjob.css";

const Profile = () => {
  const [profileDetails, setProfileDetails] = useState({
    name: "",
    bio: "",
  });
  const [phone, setPhone] = useState("");

  const handleInput = (field, value) => {
    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleUpdate = () => {};

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Profile</h2>
      <div className="profile-paper">
        <div className="input-container">
          <label className="input-label">Name</label>
          <input
            type="text"
            className="text-input"
            value={profileDetails.name}
            onChange={(event) => handleInput("name", event.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="input-label">Company Name</label>
          <input
            type="text"
            className="text-input"
            value={profileDetails.company}
            onChange={(event) => handleInput("company", event.target.value)}
          />
        </div>
        <div className="input-container">
          <label className="input-label">Description (upto 250 words)</label>
          <textarea
            className="bio-textarea"
            value={profileDetails.bio}
            onChange={(event) => {
              if (
                event.target.value.split(" ").filter(function (n) {
                  return n !== "";
                }).length <= 250
              ) {
                handleInput("bio", event.target.value);
              }
            }}
          />
        </div>
        <div className="input-container">
          <label className="input-label">Phone</label>
          <input
            type="tel"
            className="phone-input"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <button className="update-button" onClick={handleUpdate}>
          Update Details
        </button>
      </div>
    </div>
  );
};

export default Profile;
