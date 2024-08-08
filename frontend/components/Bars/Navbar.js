/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../componentsCss/Bars/navbar.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faSignOutAlt,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [colorChange, setColorChange] = useState(false);
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const response = await fetch(
          "https://internconnect-fdoz.onrender.com/user/login/verify",
          {
            headers: {
              "Content-Type": "application/json",
              authtoken: localStorage.getItem("auth-token"),
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setLoggedInUser(data.user);
        } else {
          console.log("verification failed");
        }
      } catch (error) {
        console.log("Error fetching logged-in user:", error);
      }
    };

    fetchLoggedInUser();
  }, []);

  const handleLogout = async () => {
    try {
      alert("Pressed logout button");
      localStorage.clear();
      setLoggedInUser(null);
      navigate("/user/login");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  const handleMyApplications = e => {
    navigate("/user/applications");
  };

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
    <div className="sticky">
      <nav className={colorChange ? "navbar-colorChange" : "navbar-top"}>
        <div className="navbar navbar-expand-lg">
          <div className="navbar-bg-class">
            <Link
              style={{ color: colorChange && "white" }}
              to="/"
              className="our-title"
            >
              Intern
              <span style={{ color: "blue" }}>Connect</span>
            </Link>

            <div className="menu-icon" onClick={handleMenuToggle}>
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </div>

            <div
              className={`navbar-collapse ${menuOpen ? "open" : ""}`}
              id="navbarSupportedContent"
            >
              <div className="header-menu">
                <a className="nav-link active" aria-current="page" href="#">
                  <span className="nav-text">
                    <Link style={{ color: colorChange && "white" }} to="/jobs">
                    Find Jobs
                    </Link>
                  </span>
                </a>

                <a className="nav-link active" aria-current="page" href="#">
                  <span className="nav-text">
                    <Link
                      style={{ color: colorChange && "white" }}
                      to="/contactus"
                    >
                      Contact Us
                    </Link>
                  </span>
                </a>

                {loggedInUser ? (
                  <>
                    <a className="nav-link active" aria-current="page" href="#">
                      <button
                        className="dropdown-toggle nav-text"
                        onClick={handleDropdownToggle}
                      >
                        <FontAwesomeIcon
                          icon={faCircleUser}
                          style={{
                            color: "#66a5e1",
                            fontSize: "24px",
                            right: "20px",
                          }}
                        />
                      </button>
                    </a>
                    <ul className="nav navbar-nav">
                      <li className="dropdown">
                        {dropdownVisible && (
                          <ul
                            className="dropdown-menu dropdown-menu-right"
                            style={{
                              display: "block",
                              opacity: "1",
                              top: "60px",
                            }}
                          >
                            <li>
                              <i className="fa fa-user"></i>
                              <Link
                                className="sidebarbtns"
                                to="/eprofile"
                                onClick={handleDropdownToggle}
                              >
                                My Profile
                              </Link>
                            </li>
                            <li>
                              <button onClick={handleMyApplications}>
                                {" "}
                                My Applications
                              </button>
                            </li>
                            <li>
                              <a href="#">
                                <button>Something</button>
                              </a>
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faSignOutAlt} />
                              <button onClick={handleLogout}>Logout</button>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <a className="nav-link active" aria-current="page">
                      <span className="nav-text">
                        <Link
                          style={{ color: colorChange && "white" }}
                          to="/user/login"
                        >
                          Login
                        </Link>
                      </span>
                    </a>
                    <a className="nav-link active" aria-current="page">
                      <span className="nav-text">
                        <Link
                          style={{ color: colorChange && "white" }}
                          to="/user/register"
                        >
                          Register
                        </Link>
                      </span>
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ overflowY: "scroll", height: "0px" }}></div>
    </div>
  );
};

export default Navbar;
