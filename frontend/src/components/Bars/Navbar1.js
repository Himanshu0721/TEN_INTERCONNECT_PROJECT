import React, { useState, useEffect } from "react";
import "../../componentsCss/Bars/navbar1.css";
import {
  faBars,
  faSignOutAlt,
  faCircleUser,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar1() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  const togglebtn = () => {
    setDropdownVisible(!dropdownVisible);
    // console.log("togglebtn working.");
  };

  const handleLogout = async () => {
    try {
      // alert("Pressed logout button");
      toast.success("Logged Out !", {
        position: toast.POSITION.TOP_CENTER,
      });
      // const response = await axios.post("/user/logout");
      // if (response.ok) {
      //   setLoggedInUser(null);
      //   navigate("/user/login");
      // }
      sessionStorage.clear();
      setLoggedInUser(null);
      // navigate("/user/login");
      navigate("/");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  const handleLogout2 = async () => {
    try {
      // alert("Pressed logout button");
      toast.success("Logged Out !", {
        position: toast.POSITION.TOP_CENTER,
      });
      // const response = await axios.post("/user/logout");
      // if (response.ok) {
      //   setLoggedInUser(null);
      //   navigate("/user/login");
      // }
      setDropdownVisible(!dropdownVisible);
      sessionStorage.clear();
      setLoggedInUser(null);
      // navigate("/user/login");
      navigate("/");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const response = await fetch(
          "https://internconnect-fdoz.onrender.com/user/login/verify",
          {
            headers: {
              "Content-Type": "application/json",
              authtoken: sessionStorage.getItem("auth-token"),
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setLoggedInUser(data.user);
          // console.log(data.user)
        } else {
          console.log("verification failed");
        }
      } catch (error) {
        console.log("Error fetching logged-in user:", error);
      }
    };

    fetchLoggedInUser();
  }, []);

  const changeNavbarColor = () => {
    if (window.scrollY >= 500) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    changeNavbarColor();
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);
  return (
    <div className="navbarsection">
      <div className={colorChange ? "navbarchangecolor" : "navbar"}>
        <div className="navbarLeft">
          <Link
            to="/"
            style={colorChange ? { color: "white" } : { color: "black" }}
          >
            Ten<span style={{ color: "blue" }}>Internships </span>
          </Link>
        </div>

        <div className="navbarRight">
          {loggedInUser ? (
            <>
              <Link
                style={colorChange ? { color: "white" } : { color: "black" }}
                to="/jobs"
                className="navbarRightbtns"
              >
                Find Internships
              </Link>
              <Link
                style={colorChange ? { color: "white" } : { color: "black" }}
                to="/contactus"
                className="navbarRightbtns"
              >
                Contact Us
              </Link>
              <Link
                style={colorChange ? { color: "white" } : { color: "black" }}
                to="/eprofile"
                className="navbarRightbtns"
              >
                My Profile
              </Link>
              <Link
                style={{color: colorChange ? "white" : "black", ...(loggedInUser.userType == "admin" && { display: "none" })}}
                to="/user/applications"
                className="navbarRightbtns"
              >
                My Applications
              </Link>
              <div
                style={{color: colorChange ? "white" : "black", cursor: "pointer" }}
                onClick={handleLogout}
                className="navbarRightbtns"
                id="signoutbtn"
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                <div>Logout</div>
                <ToastContainer />
              </div>
            </>
          ) : (
            <>
              <Link
                style={colorChange ? { color: "white" } : { color: "black" }}
                to="/jobs"
                className="navbarRightbtns"
              >
                Find Internships
              </Link>
              <Link
                style={colorChange ? { color: "white" } : { color: "black" }}
                to="/contactus"
                className="navbarRightbtns"
              >
                Contact Us
              </Link>
              <Link
                style={colorChange ? { color: "white" } : { color: "black" }}
                to="/user/login"
                className="navbarRightbtns"
              >
                Login
              </Link>
              <Link
                style={colorChange ? { color: "white" } : { color: "black" }}
                to="/user/register"
                className="navbarRightbtns"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <div className="togglebtn" onClick={togglebtn}>
          {loggedInUser ? (
            colorChange ? (
              <FontAwesomeIcon
                style={{ fontSize: "1.7rem", color: "white" }}
                icon={faCircleUser}
              />
            ) : (
              <FontAwesomeIcon
                style={{ fontSize: "1.7rem" }}
                icon={faCircleUser}
              />
            )
          ) : colorChange ? (
            <FontAwesomeIcon
              style={{ fontSize: "1.7rem", color: "white" }}
              icon={faBars}
            />
          ) : (
            <FontAwesomeIcon style={{ fontSize: "1.7rem" }} icon={faBars} />
          )}
        </div>

        {dropdownVisible && (
          <div className="righttogglebox">
            {loggedInUser ? (
              <>
                <Link onClick={togglebtn} to="/jobs" className="toggleboxbtns">
                Find Internships
                </Link>
                <Link
                  onClick={togglebtn}
                  to="/contactus"
                  className="toggleboxbtns"
                >
                  Contact Us
                </Link>
                <Link
                  onClick={togglebtn}
                  to="/eprofile"
                  className="toggleboxbtns"
                >
                  My Profile
                </Link>
                <Link
                  onClick={togglebtn}
                  to="/user/applications"
                  className="toggleboxbtns"
                >
                  My Applications
                </Link>
                <div
                  onClick={handleLogout2}
                  className="toggleboxbtns"
                  id="togglesignoutbtn"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <div>Logout</div>
                  <ToastContainer />
                </div>
              </>
            ) : (
              <>
                <Link onClick={togglebtn} to="/jobs" className="toggleboxbtns">
                Find Internships
                </Link>
                <Link
                  onClick={togglebtn}
                  to="/contactus"
                  className="toggleboxbtns"
                >
                  Contact Us
                </Link>
                <Link
                  onClick={togglebtn}
                  to="/user/login"
                  className="toggleboxbtns"
                >
                  Login
                </Link>
                <Link
                  onClick={togglebtn}
                  to="/user/register"
                  className="toggleboxbtns"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar1;
