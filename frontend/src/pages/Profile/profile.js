/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
// import "../App.css";
import "../../pages.css/profile.css";
import { FaFacebook, FaSquareInstagram, FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = ({ history }) => {
  const [userdetail, setUserdetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/eprofile/edit");
  };
  const getdata = async () => {
    // const TOKEN = localStorage.getItem("auth-token");
    await axios
      .get("https://internconnect-fdoz.onrender.com/user/me", {
        headers:{
          "Content-Type": "application/json",
          authtoken: sessionStorage.getItem("auth-token"),
        },
      })
      .then(res => {
        // console.log(res.data.user);
        setUserdetail(res.data.user);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="contain_profile">
      <div className="left_container">
        <div>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAnQMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQQFAwIH/8QALBABAAIBAgQEBgIDAAAAAAAAAAECAwQRITFBUQUSMnETIjRhgZFDUkJyof/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABgRAQEBAQEAAAAAAAAAAAAAAAABESES/9oADAMBAAIRAxEAPwD6oA0wAAAAAAAkEAkMQAAAAAAAAAAAAAA7YNNfNO8bRX+0wnS4PjZOPprzlqVrFYiK8I7JqyOOPSYqc6+ae8u0UrHKI/T0I08WxUv6qRP4Vc2hrMb4p8s9p5LoDEvjtS01vG09nlr6nBXNTafV0lkzE1tMTziV1moAVAAAAAAAABO6HvHHmyVjvaCjV02P4WGtevV1IGWwAAABn+I49rVyRHCeEtBW18b6eZ7TErErMQlCsgAAAAAAAD1SfLkpPSJh5SDbjklw0mWMmGOPGOEuzLaQAAARKtr7baefvMLMs7xDL5rxSv8Ajz9yJVQShpkAAAAAAAAAB202acOTr5Z5w1KXresWrO8TyliuuHNfFPy24dYnkmK2BUxa3Hbhf5Z/47xnxTyyV/aLroONtThrzyV/HFWy67eNsUbfeQ131WojFXaJ3vPKGXMza0zM7zuWmbTvaZmfuhZGb0AUAAAAAAAAAdMeK+WdqV3juK5i/j0Ff5Lbz2hZpgxUj5aQmrjJiszyiZ/CfhZP6W/TYiIjkk1MYs47xzpb9Inhz3baJpWecRPuaeWINXJo8N+VfLP2VcuivXjSfNHbqaYqCbR5Z2mJie0oVAAAAAABKF7Q6f8AlvH+sSaYjTaPzRFs34qv1rERtEREdoEstgAAAAAAAOWbDTLG1o/PVm6jBfDbjxr0s13m9IvWa2jeJEsYqHXUYZw5Jid5jpLm0lQAIAA66fH8XLWvTr7NeIjaFDw6vG9vaGgy1AAUAAAAAAAAABw1eL4mGe9eMMptyxstfLlvHaZWJY8AKyAAv+Hei/uvKPhvov7rzLUABQAAAAAAAAABj6n6jJ7teWRqvqMnusSuQCs0ABf8N9F/deBlsAAAAAAAAAAABEsjVfUZPdIsSuICs1//2Q=="
            alt="profile"
            className="profile_image"
          />
        </div>
        <h2>{`${userdetail.firstName} ${userdetail.lastName}`}</h2>
        <div>
          <p className="desc_text">{userdetail.email}</p>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ultamco laboris nisi ut
            aliquip ex ea commodo
          </p> */}
        </div>

        <button className="custom-button" onClick={handleEdit}>
          Edit profile
        </button>
        <div>
          <div className="custom-heading">Get in touch</div>
        </div>

        <div className="social-icons">
          <FaFacebook className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaSquareInstagram className="social-icon" />
          <FaLinkedin className="social-icon" />
          <MdEmail className="social-icon" />
        </div>
      </div>

      <div
        style={{
          width: "50%",
          background: "linear-gradient(to top, #00f0, #25f, #FFF)",
        }}
      ></div>
    </div>
  );
};

export default Profile;
