/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const AdminJobCard = (props) => {
  const { id, role, company, location, description, datePosted } = props.job;

  const handleClick = () => {
    props.setCurrentJob(props.job);
  };

  return (
    <div class="card-box" onClick={() => handleClick()}>
      <div class="card-body">
        <h5 class="card-title">
          {role}
          <span class="btns">
            <a href="#">
              <span class="fa fa-heart"></span>
            </a>

            <a href="#">Apply</a>
          </span>
        </h5>

        <p class="card-text">
          {location}
          {company}
          {description}
          {datePosted}
        </p>

        <i
          className="fa fa-trash-o"
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => props.deleteJob(id)}
        ></i>
      </div>
    </div>
  );
};

export default AdminJobCard;
