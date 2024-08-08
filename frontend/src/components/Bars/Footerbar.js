/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../../componentsCss/Bars/Footerbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../api/base";

function Footerbar() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const getdata = async () => {
    const TOKEN = sessionStorage.getItem("auth-token");
    await axios
      .get("https://internconnect-fdoz.onrender.com/user/me", {
        headers: { authtoken: TOKEN },
      })
      .then(res => {
        console.log(res.data.user);
        const response = res.data.user;
        if (response.email === "admin@gmail.com") {
          toast.success("Welcome to Admin Panel!", {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate("/admin");
        } else {
          // alert("Cannot Post a Job!")
          toast.error("Can't Post A Job!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch(err => {
        console.log(err);
        // alert("Login as admin to post a job!")
        toast.error("Login as an admin!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("user/login");
      });
  };
  const handlePostAJob = () => {
    getdata();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email)
    try {
      const response = await api.post("/send-email/subscribe",  email );
      if (response.status === 200) {
        toast.success("Mail Sent!", {
          position: toast.POSITION.TOP_CENTER,
        });
        setEmail("");
      }
    } catch (error) {
      console.error(error.response.data);
      toast.error("Failed to send mail!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <footer className="footer-section">
      <div className="block">
        <div className="footer-cta pt-2 pb-0">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Get in Touch</h3>
                </div>
                {/* <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "white" }}
                  size="xl"
                />
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>+91 78277 38719</span>
                </div> */}
                <div className="footer-widget">
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    style={{ color: "white" }}
                    size="xl"
                  />
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>info@entrepreneurshipnetwork.net</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Quick Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/aboutus">About</a>
                  </li>
                  <li>
                    <div className="a" onClick={()=>{navigate("/jobs")}}>Browse Internships</div>
                  </li>
                  {/*<li>*/}
                  {/*  <a href="#">Browse Companies</a>*/}
                  {/*</li>*/}
                  <li>
                    <a href="careers">Career Advice</a>
                  </li>
                  <li>
                    <a href="/guidelines">Guidelines</a>
                  </li>
                  {/*<li>*/}
                  {/*  <a href="#">Job Search</a>*/}
                  {/*</li>*/}
                  <li>
                    <button
                      onClick={handlePostAJob}
                      style={{
                        backgroundColor: "rgb(3, 3, 61)",
                        height: "0rem",
                        marginTop: "-1rem",
                        letterSpacing: "0",
                        color: "#878787",
                        textTransform: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Post a Internship
                    </button>
                  </li>
                  <li>
                    <a href="/contactus">Contact us</a>
                  </li>
                  <li>
                    <a href="/helpcenter">Help center</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    Don't miss any updates of your application, kindly fill the
                    form below..!
                  </p>
                </div>
                <div className="subscribe-form">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="row">
          <div className="col-xl-6 col-lg-6 text-center text-lg-left">
            <div className="copyright-text">
              <p>Copyright &copy; 2024, All Right Reserved</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/terms/privacy">Privacy</a>
                </li>
                <li>
                  <a href="/terms/policy">Policy</a>
                </li>
                <li>
                  <a href="/contactus">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footerbar;
