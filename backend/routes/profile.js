const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { Profile } = require("../models/profile");
const {
  personalDetailsValidation,
  personalDetails,
} = require("../models/personalDetails");
const {
  EducationDetailsValidation,
  educationDetails,
} = require("../models/educationalDetails");
const {
  workExperienceValidation,
  workExperienceDetails,
} = require("../models/workExperienceDetails");
const { Skillset, validateSkillset } = require("../models/skillset");
const {
  socialMediaLinksValidation,
  socialMediaLinks,
} = require("../models/socialMediaLinks");

const fetchuser = require("../middlewares/fetchuser");
const { User } = require("./../models/user");

// ! algo:
//* check if user is authenticated and present in the database
//* if yes, Get Data from the frontend
// * validate the data using joi function imported
//* save data in diffenet schemas and
// * save id of each schema object created in a profile schema
// * return responce

router.post("/addprofile", fetchuser, async (request, response, next) => {
  try {
    // * Validating user authentication
    if (!request.user) {
      return response.status(401).json({ error: "User not authenticated" });
    }

    //* Checking if user exist in database
    const user = await User.findById(request.user.id);
    if (!user) {
      return response.status(401).json({ error: "User not found" });
    }

    //* Checking if profile already created or not
    const profile = await Profile.findOne({ user_id: request.user.id });
    if (profile) {
      return response.status(400).json({ error: "Profile already created" });
    }

    const data = request.body;
    console.log("This is the data:", data);

    //* Performing validation

    let { error: personalError, value: personalValue } =
      await personalDetailsValidation(data.personalInfo);
    if (personalError) {
      return response.status(400).json({ error: personalError });
    }
    if (typeof personalValue === "undefined") {
      return response.status(400).json({
        error:
          "Validation failed. Please check your input data for personal details.",
      });
    }
    console.log("Personal profile is validated", personalValue);

    let { error: educationError, value: educationValue } =
      await EducationDetailsValidation(data.education);
    if (educationError) {
      return response.status(400).json({ error: educationError });
    }
    if (typeof educationValue === "undefined") {
      return response.status(400).json({
        error:
          "Validation failed. Please check your input data for education details.",
      });
    }
    console.log("Education profile is validated", educationValue);

    let { error: workError, value: workValue } = await workExperienceValidation(
      data.workExperienceInfo
    );
    if (workError) {
      return response.status(400).json({ error: workError });
    }
    if (typeof workValue === "undefined") {
      return response.status(400).json({
        error:
          "Validation failed. Please check your input data for work experience details.",
      });
    }
    console.log("Work experience profile is validated", workValue);

    let { error: socialError, value: socialValue } =
      await socialMediaLinksValidation(data.socialMedia);
    if (socialError) {
      return response.status(400).json({ error: socialError });
    }
    if (typeof socialValue === "undefined") {
      return response.status(400).json({
        error:
          "Validation failed. Please check your input data for social media links.",
      });
    }
    console.log("Social media profile is validated", socialValue);

    let { error: skillsetError, value: skillsetValue } = await validateSkillset(
      data.skillset
    );
    if (skillsetError) {
      return response.status(400).json({ error: skillsetError });
    }
    if (typeof skillsetValue === "undefined") {
      return response.status(400).json({
        error: "Validation failed. Please check your input data for skillset.",
      });
    }
    console.log("Skillset profile is validated", skillsetValue);

    // * Save data in seperate schemas

    const PersonalDetail = await personalDetails.create({
      FirstName: personalValue.firstName,
      LastName: personalValue.lastName,
      PhoneNumber: personalValue.phone,
      EmailId: personalValue.email,
      Address: personalValue.address,
      State: personalValue.state,
      City: personalValue.city,
      ZipCode: personalValue.code,
    });
    console.log("Profile created", PersonalDetail);
    const education = await educationDetails.create({
      collegeName: educationValue.clg,
      branchOfStudy: educationValue.branch,
      educationLevel: educationValue.educationLevel,
      startDate: educationValue.startDate,
      endDate: educationValue.endDate,
    });
    console.log("Education created", education);

    const work = await workExperienceDetails.create({
      experience: workValue.workExperiences,
    });
    console.log("Work created", work);

    const social = await socialMediaLinks.create({
      githubURL: socialValue.githubUrl,
      linkedinURL: socialValue.linkedInUrl,
      portfolioURL: socialValue.portfolioUrl,
    });
    console.log("Social created", social);

    const skillset = await Skillset.create({
      skillset: skillsetValue.skills,
    });
    console.log("Skillset created", skillset);

    // * creating the profile of user
    const newProfile = await Profile.create({
      user_id: mongoose.Types.ObjectId.createFromHexString(request.user.id),
      personal_details: PersonalDetail._id,
      educational_details: education._id,
      work_experience_details: work._id,
      social_media_links: social._id,
      skillset: skillset._id,
    });

    console.log("Profile created", newProfile);

    return response
      .status(201)
      .json({ msg: "Profile created successfully", newProfile: newProfile });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

router.get("/getprofile", fetchuser, async (request, response, next) => {
  try {
    // * Validating user authentication
    if (!request.user) {
      return response.status(401).json({ error: "User not authenticated" });
    }

    //* Checking if user exist in database
    const user = await User.findById(request.user.id);
    if (!user) {
      return response.status(401).json({ error: "User not found" });
    }

    //* Checking if profile already created or not
    const profile = await Profile.findOne({ user_id: request.user.id });
    if (!profile) {
      return response.status(400).json({ error: "Profile not created" });
    }

    return response.status(200).json({ profile: profile });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

router.put("/updateprofile", fetchuser, async (request, response, next) => {
  try {
    // * Validating user authentication
    if (!request.user) {
      return response.status(401).json({ error: "User not authenticated" });
    }

    //* Checking if user exist in database
    const user = await User.findById(request.user.id);
    if (!user) {
      return response.status(401).json({ error: "User not found" });
    }

    //* Checking if profile already created or not
    const profile = await Profile.findOne({ user_id: request.user.id });
    if (!profile) {
      return response.status(400).json({ error: "Profile not created" });
    }

    const data = request.body;
    console.log("This is the data:", data);

    //* Performing validation

    let { error: personalError, value: personalValue } =
      await personalDetailsValidation(data.personalInfo);
    if (personalError) {
      return response.status(400).json({ error: personalError });
    }
    if (typeof personalValue === "undefined") {
      return response.status(400).json({
        error:
          "Validation failed. Please check your input data for personal details.",
      });
    }
    console.log("Personal profile is validated", personalValue);

    let { error: educationError, value: educationValue } =
      await EducationDetailsValidation(data.education);
    if (educationError) {
      return response.status(400).json({ error: educationError });
    }
    if (typeof educationValue === "undefined") {
      return response.status(400).json({
        error:
          "Validation failed. Please check your input data for education details.",
      });
    }
    console.log("Education profile is validated", educationValue);

    let { error: workError, value: workValue } = await workExperienceValidation(
      data.workExperienceInfo
    );
    if (workError) {
      return response.status(400).json({ error: workError });
    }
    if (typeof workValue === "undefined") {
      return response.status(400).json({
        error:
          "Validation failed. Please check your input data for work experience details.",
      });
    }
    console.log("Work experience profile is validated", workValue);

    let { error: socialError, value: socialValue } =
      await socialMediaLinksValidation(data.socialMedia);
    if (socialError) {
      return response.status(400).json({ error: socialError });
    }
    if (typeof socialValue === "undefined") {
      return response.status(400).json({
        error:
          "Validation failed. Please check your input data for social media links.",
      });
    }
    console.log("Social media profile is validated", socialValue);

    let { error: skillsetError, value: skillsetValue } = await validateSkillset(
      data.skillset
    );
    if (skillsetError) {
      return response.status(400).json({ error: skillsetError });
    }
    if (typeof skillsetValue === "undefined") {
      return response.status(400).json({
        error: "Validation failed. Please check your input data for skillset.",
      });
    }
    console.log("Skillset profile is validated", skillsetValue);

    // * Save data in seperate schemas

    const PersonalDetail = await personal
      .findByIdAndUpdate(
        profile.personal_details,
        {
          FirstName: personalValue.firstName,
          LastName: personalValue.lastName,
          PhoneNumber: personalValue.phone,
          EmailId: personalValue.email,
          Address: personalValue.address,
          State: personalValue.state,
          City: personalValue.city,
          ZipCode: personalValue.code,
        },
        { new: true }
      )
      .exec();
    console.log("Profile updated", PersonalDetail);
    const education = await educationDetails
      .findByIdAndUpdate(
        profile.educational_details,
        {
          collegeName: educationValue.clg,
          branchOfStudy: educationValue.branch,
          educationLevel: educationValue.educationLevel,
          startDate: educationValue.startDate,
          endDate: educationValue.endDate,
        },
        { new: true }
      )
      .exec();
    console.log("Education updated", education);

    const work = await workExperienceDetails
      .findByIdAndUpdate(
        profile.work_experience_details,
        {
          experience: workValue.workExperiences,
        },
        { new: true }
      )
      .exec();
    console.log("Work updated", work);

    const social = await socialMediaLinks
      .findByIdAndUpdate(
        profile.social_media_links,
        {
          githubURL: socialValue.githubUrl,
          linkedinURL: socialValue.linkedInUrl,
          portfolioURL: socialValue.portfolioUrl,
        },
        { new: true }
      )
      .exec();
    console.log("Social updated", social);

    const skillset = await Skillset.findByIdAndUpdate(
      profile.skillset,
      {
        skillset: skillsetValue.skills,
      },
      { new: true }
    ).exec();
    console.log("Skillset updated", skillset);

    // * creating the profile of user
    const updatedProfile = await Profile.findByIdAndUpdate(
      profile._id,
      {
        personal_details: PersonalDetail._id,
        educational_details: education._id,
        work_experience_details: work._id,
        social_media_links: social._id,
        skillset: skillset._id,
      },
      { new: true }
    );

    console.log("Profile updated", updatedProfile);

    return response
      .status(201)
      .json({
        msg: "Profile updated successfully",
        updatedProfile: updatedProfile,
      });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

module.exports = router;
