/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "../../api/base";
import React, { useState, useEffect } from "react";
import "../../componentsCss/logInpage.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const { REACT_APP_SERVER_URL } = process..env;

function LogIn() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("auth-token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://internconnect-fdoz.onrender.com/user/login",
        {
          email,
          password,
        }
      );
      if (email === "admin@gmail.com" && password === "admin@1234") {
        const accessToken = response?.data?.authtoken;
        sessionStorage.setItem("auth-token", accessToken);
        navigate("/admin");
        window.location.reload();
        return;
      }

      if (response.status === 200) {
        const accessToken = response?.data?.authtoken;
        sessionStorage.setItem("auth-token", accessToken);
        window.location.reload();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Incorrect Email or Password!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="mt-5 full-height justify-content-center">
      <div className="mt-3 text-center align-self-center py-3">
        <div className="section pb-1 pt-2 pt-sm-2 text-center">
          <div className="card-3d-wrap mx-auto">
            <div className="card-3d-wrapper">
              <div className="card-front mt-3">
                <div className="center-wrap" style={{ top: "52%" }}>
                  <span className="registered">
                    New to IC?{" "}
                    <Link
                      to="/user/register"
                      style={{ color: "#ffeba7", fontWeight: 400 }}
                    >
                      Register
                    </Link>
                  </span>
                  <div className="section text-center">
                    <form className="logInForm" onSubmit={handleSubmit}>
                      <h4 className="mb-4 pb-3">Log In</h4>
                      <div className="form-group">
                        <input
                          type="email"
                          onChange={e => setEmail(e.target.value)}
                          name="logemail"
                          className="form-style"
                          placeholder="Your Email"
                          id="logemail"
                          autoComplete="off"
                        />
                        <i className="input-icon uil uil-at"></i>
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="password"
                          onChange={e => setPassword(e.target.value)}
                          name="logpass"
                          className="form-style"
                          placeholder="Your Password"
                          id="logpass"
                          autoComplete="off"
                        />
                        <i className="input-icon uil uil-lock-alt"></i>
                      </div>
                      <button
                        type="submit"
                        value="logInBtn"
                        className="btn mt-4"
                      >
                        Submit
                      </button>
                      <ToastContainer />
                    </form>
                    <div className="col-md-12">
                      <div className="login-or">
                        <div className="mt-2">
                          <span className="span-or">or</span>
                        </div>
                      </div>
                    </div>
                    <div className="accounts">
                      <div className="line"></div>
                      <p className="message">Login with Accounts</p>
                      <div className="line"></div>
                    </div>
                    <div className="social-icons">
                      <a href="https://internconnect-fdoz.onrender.com/auth/google/register">
                        <button aria-label="Login with Google" className="icon">
                          <div className="g_icon">
                            <i className="fa fa-google"></i>
                          </div>
                        </button>
                      </a>
                      <a href="#">
                        <button
                          aria-label="Login with LinkedIn"
                          className="icon"
                        >
                          <div className="g_icon">
                            <i className="fa fa-linkedin"></i>
                          </div>
                        </button>
                      </a>
                      <a href="#">
                        <button aria-label="Login with GitHub" className="icon">
                          <div className="g_icon">
                            <i className="fa fa-github"></i>
                          </div>
                        </button>
                      </a>
                    </div>
                    <p className="mb-0 mt-2 pb-3 text-center">
                      <a href="#0" className="link">
                        Forgot your password?
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
