import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../componentsCss/ApplyForm.css";
import api from "../../api/base";
import axios from "axios";

function ApplyForm() {
  const location = useLocation();
  const {
    jobTitle,
    description,
    category,
    location: jobLocation,
    id,
  } = location.state || {};
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
    canJoinImmediately: "Yes",
    startingDate: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const getdata = async () => {
    const TOKEN = localStorage.getItem("auth-token");
    await axios
      .get("https://internconnect-fdoz.onrender.com/user/me", {
        headers:{
          "Content-Type": "application/json",
          authtoken: sessionStorage.getItem("auth-token"),
        },
      })
      .then(res => {
        // console.log(res.data.user);
        const {email} = res.data.user;
        setFormData({...formData,email});
        // setuseremail(res.data.user.email);
        // setUserdetail(res.data.user);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);
  
  useEffect(() => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    // if (!formData.email) errors.email = "Email is required";
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (formData.phone.length !== 10) {
      errors.phone = "Phone number must be exactly 10 digits";
    }
    if (!formData.coverLetter) {
      errors.coverLetter = "Cover letter is required";
    } else {
      const wordCount = formData.coverLetter.trim().split(/\s+/).length;
      if (wordCount < 150) {
        errors.coverLetter = "Cover letter must be at least 150 words";
      } else if (wordCount > 2000) {
        errors.coverLetter = "Cover letter must be no more than 2000 words";
      }
    }
    if (!formData.resume) errors.resume = "Resume is required";
    if (formData.canJoinImmediately === "No" && !formData.startingDate) {
      errors.startingDate = "Starting date is required";
    }
    setFormErrors(errors);
    setIsSubmitDisabled(Object.keys(errors).length > 0);
  }, [formData]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = e => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (Object.keys(formErrors).length === 0) {
  //         const application = {
  //             jobTitle: jobTitle,
  //             jobLocation: jobLocation,
  //             category: category,
  //             description: description,
  //             name: formData.name,
  //             email: formData.email,
  //             phone: formData.phone,
  //             coverLetter: formData.coverLetter,
  //             canJoinImmediately: formData.canJoinImmediately,
  //             startingDate: formData.startingDate,
  //         }
  //
  //         dispatch(addApplication(application));
  //         navigate('/apply', {
  //             state: { ...formData, jobTitle, description, category, jobLocation }
  //         });
  //     }
  //
  // };
  const handleSubmit = async e => {
    e.preventDefault();
    if (Object.keys(formErrors).length === 0) {
      const formDataToSend = new FormData();
      formDataToSend.append("jobTitle", jobTitle);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("coverLetter", formData.coverLetter);
      formDataToSend.append("resume", formData.resume);
      formDataToSend.append("canJoinImmediately", formData.canJoinImmediately);
      formDataToSend.append("startingDate", formData.startingDate);
      formDataToSend.append("jobid", id);

      try {
        await api.post(`/applyform/apply`, formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        navigate("/apply", {
          state: { ...formData, jobTitle, description, category, jobLocation },
        });
      } catch (error) {
        console.error("Failed to submit application", error);
      }
    }
  };

  // console.log("Job id: ", id);
  // console.log("User Email ",formData);

  return (
    <div className="apply-form-container">
      <div className="apply-form-content">
        <h2>
          Apply for<span style={{ color: "blue" }}>{jobTitle}</span>
        </h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {formErrors.name && (
            <p className="error-message">{formErrors.name}</p>
          )}

          {/* <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && (
            <p className="error-message">{formErrors.email}</p>
          )} */}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {formErrors.phone && (
            <p className="error-message">{formErrors.phone}</p>
          )}

          <textarea
            name="coverLetter"
            placeholder="Cover Letter"
            value={formData.coverLetter}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          {formErrors.coverLetter && (
            <p className="error-message">{formErrors.coverLetter}</p>
          )}

          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            accept="application/pdf"
            required
          />
          {formErrors.resume && (
            <p className="error-message">{formErrors.resume}</p>
          )}

          <label>
            Can you join immediately?
            <select
              name="canJoinImmediately"
              value={formData.canJoinImmediately}
              onChange={handleChange}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>

          {formData.canJoinImmediately === "No" && (
            <input
              type="date"
              name="startingDate"
              value={formData.startingDate}
              onChange={handleChange}
              required
            />
          )}
          {formErrors.startingDate && (
            <p className="error-message">{formErrors.startingDate}</p>
          )}

          <button type="submit" disabled={isSubmitDisabled}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplyForm;
