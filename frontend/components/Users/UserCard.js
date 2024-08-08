/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import user from "../../images/user.png";
import "../../pages.css/admin.css";

const UserCard = (props) => {
  const {
    id,
    firstName,
    lastName,
    // education,
    // workExperienceInfo,
    // socialMedia,
    // skillset,
  } = props.user;

  const handleClick = () => {
    props.setCurrentUser(props.user);
  };

  return (
    <div class="user-card" onClick={() => handleClick()}>
      <div class="user-body">
        <img src={user} className="" alt="user" />
        {/* <h5 class="card-title">{personalInfo.email}</h5> */}
        <p class="card-text">
          {firstName + " " + lastName}
        </p>
        <i
          className="fa fa-trash-o"
          style={{
            color: "red",
            marginTop: "7px",
            float: "right",
            fontSize: "20px",
          }}
          onClick={() => props.deleteUser(id)}
        ></i>
      </div>
    </div>
  );
};

export default UserCard;
