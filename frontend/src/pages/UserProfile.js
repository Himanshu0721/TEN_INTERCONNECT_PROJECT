import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PersonalInfoForm from "../components/Forms/PersonalInfoForm";
import EducationForm from "../components/Forms/EducationForm";
import WorkExperienceForm from "../components/Forms/WorkExperienceForm";
import ConfirmationForm from "../components/Forms/ConfirmationForm";
import SocialMediaForm from "../components/Forms/SocialMediaForm";
import UserSkillSetForm from "../components/Forms/UserSkillSetForm";
import "../componentsCss/UserProfile.css";
import "../componentsCss/confirmationPage.css";

export const globlUserData = {};

const MultiStepForm = () => {
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
        console.log("This is the response", response);
        if (response.status === 401) {
          navigate("/user/login");
        }
      } catch (error) {
        console.log("Error fetching logged-in user:", error.message);
      }
    };

    fetchLoggedInUser();
  }, []);
  const [activeStep, setActiveStep] = useState(1);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    education: {
      branch: "",
      educationLevel: "",
      startDate: "",
      endDate: "",
    },
    workExperienceInfo: {
      workExperiences: [],
    },
    socialMedia: {
      linkedInUrl: "",
      githubUrl: "",
      portfolioUrl: "",
    },
    skillset: {
      skills: [],
    },
  });

  const updateformData = (step, values) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [step]: values,
    }));
    // console.log(step, values)
  };

  const handleNext = data => {
    setActiveStep(activeStep + 1);
    console.log("THis is the form data", formData);
  };

  const handlePrevious = () => {
    setActiveStep(activeStep - 1);
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    globlUserData["userGlobalData"] = formData;
    try {
      axios
        .post("https://internconnect-fdoz.onrender.com/test", formData)
        .then(function (response) {
          setMessage("Your profile has been created successfully");
        })
        .catch(function (error) {
          setMessage("Something went wrong, please try again later");
          console.log(error);
        });
      navigate("/user/profile");
    } catch (error) {
      setMessage("There is some problem with the server!");
    }
    // console.log(message);
    alert(message);
  };

  const renderStep = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className="step-content">
            <PersonalInfoForm
              onNext={handleNext}
              formData={formData.personalInfo}
              setFormData={values => updateformData("personalInfo", values)}
            />
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <EducationForm
              onNext={handleNext}
              onPrevious={handlePrevious}
              formData={formData.education}
              setFormData={values => updateformData("education", values)}
            />
          </div>
        );
      case 3:
        return (
          <div className="step-content">
            <WorkExperienceForm
              onNext={handleNext}
              onPrevious={handlePrevious}
              formData={formData.workExperienceInfo}
              setFormData={values =>
                updateformData("workExperienceInfo", values)
              }
            />
          </div>
        );
      case 4:
        return (
          <div className="step-content">
            <UserSkillSetForm
              onNext={handleNext}
              onPrevious={handlePrevious}
              formData={formData.skillset}
              setFormData={values => updateformData("skillset", values)}
            />
          </div>
        );
      case 5:
        return (
          <div className="step-content">
            <SocialMediaForm
              onNext={handleNext}
              onPrevious={handlePrevious}
              formData={formData.socialMedia}
              setFormData={values => updateformData("socialMedia", values)}
            />
          </div>
        );
      case 6:
        return (
          <div className="step-content">
            <ConfirmationForm
              onNext={handleSubmit}
              onPrevious={handlePrevious}
              formData={formData}
            />
          </div>
        );
      default:
        return null;
    }
  };

  if (activeStep === 6) {
    return <div className="confirmation-section">{renderStep()}</div>;
  }

  return (
    <div class="profile mt-11">
      <div className="container">
        {/* <h1 className="multistep-form-title">Multi-Step Form</h1> */}
        <div className="card">
          <div className="form">
            <div className="left-side">
              <div className="left-heading">
                <h4>InternConnect</h4>
              </div>
              <div className="steps-content">
                <h3>
                  Step <span className="step-number">{activeStep}</span>
                </h3>
                <p
                  {...(activeStep === 1
                    ? { className: "active" }
                    : { className: "d-none" })}
                >
                  Enter your personal information to get closer to companies.
                </p>
                <p
                  {...(activeStep === 2
                    ? { className: "active" }
                    : { className: "d-none" })}
                >
                  Get to know better by adding your diploma,certificate and
                  education life.
                </p>
                <p
                  {...(activeStep === 3
                    ? { className: "active" }
                    : { className: "d-none" })}
                >
                  Help companies get to know you better by telling then about
                  your past experiences.
                </p>
                <p
                  {...(activeStep === 4
                    ? { className: "active" }
                    : { className: "d-none" })}
                >
                  Add your Skills and let companies find you fast.
                </p>
                <p
                  {...(activeStep === 5
                    ? { className: "active" }
                    : { className: "d-none" })}
                >
                  Social Media Links
                </p>
              </div>
              <ul className="progress-bar">
                <li {...(activeStep >= 1 ? { className: "active" } : {})}>
                  {" "}
                  Personal Information
                </li>
                <li {...(activeStep >= 2 ? { className: "active" } : {})}>
                  Education
                </li>
                <li {...(activeStep >= 3 ? { className: "active" } : {})}>
                  Work Experience
                </li>
                <li {...(activeStep >= 4 ? { className: "active" } : {})}>
                  User Skillset
                </li>
                <li {...(activeStep >= 5 ? { className: "active" } : {})}>
                  Social Media Links
                </li>
              </ul>
            </div>
            <div className="right-side">
              <div className="main active step-content">{renderStep()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
