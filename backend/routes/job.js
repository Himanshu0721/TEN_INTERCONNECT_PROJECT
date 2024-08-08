const express = require("express");
const router = express.Router();
const passport = require("passport");
const Joi = require("joi");
const { Job } = require("../models/job");
const jobValidation = require("../validations/jobValidation");
const generateJobId = require("../utilities/generateJobId");
const {Internship} = require("../models/internship");
const {InternDetails} = require("../models/applyFormInternship");

// Define the isAuthenticated middleware
function isAuthenticated(request, response, next) {
  next();
  // Check if the user is authenticated
  // if (request.isAuthenticated()) {
  //   // User is authenticated, proceed to the next middleware or route handler
  //   return next();
  // }
  // // User is not authenticated, redirect to login page or send an error response
  // return response.send('You are not authorised to make this request');
  // res.redirect('/login'); // Example redirect to the login page
}

router.get("/show", async (req, res) => {
  const { pageNumber = 1, keyword, cat, location, skills } = req.query;

  const query = {};

  if (keyword) {
    query.title = { $regex: keyword, $options: "i" };
  }

  if (cat) {
    query.jobType = cat;
  }

  if (location) {
    query.location = { $regex: location, $options: "i" };
  }

  if (skills) {
    query.skills_required = { $in: skills.split(",") };
  }

  const totalJobs = await Job.countDocuments(query);

  // Pagination
  const pageSize = 5; // Number of jobs per page
  const totalPages = Math.ceil(totalJobs / pageSize);

  const jobsForPage = await Job.find(query)
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);

  res.json({
    totalJobs,
    pages: totalPages,
    currentPage: pageNumber,
    jobs: jobsForPage,
  });
});

// Use the isAuthenticated middleware in your route handler
router.post("/", isAuthenticated, (req, res) => {
  // Handle the POST request logic for the authenticated route here
});

// Create a new job
router.post("/create", isAuthenticated, async (request, response) => {
  try {
    // Generate job id using generate job id function
    let jobId = await generateJobId();
    // request.body.job_id = jobId
    const { error } = await jobValidation({ ...request.body, job_id: jobId });
    console.log(request.body);
    if (error) {
      console.log(error);
      return response.status(400).json({ error: error.details[0].message });
    }

    const newJob = new Job({ ...request.body, job_id: jobId });
    const savedJob = await newJob.save();

    return response
      .status(201)
      .json({ message: "Job SuccessFully Posted", savedJob });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

// Get all companies
router.get("/all", isAuthenticated, async (request, response) => {
  try {
    const jobs = await Job.find();
    const internship = await Internship.find();
    return response.json([...jobs,...internship]);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

// Get a specific job by ID
router.get("/view/:id", isAuthenticated, async (request, response) => {
  try {
    const job_id = request.params.id;

    const job = await Job.findOne({ job_id });

    if (!job) {
      return response.status(404).json({ message: "Job not found" });
    }

    response.json({ job });
  } catch (error) {
    response.status(500).json({ message: "Failed to retrieve job", error });
  }
});

// Update a job by ID
router.put("/:id", isAuthenticated, async (request, response) => {
  try {
    const jobId = request.params.id;
    console.log("Request Body : ", request.body);
    const { error } = await jobValidation(request.body);

    if (error) {
      return response.status(400).json({ error: error.details[0].message });
    }

    const updatedJob = await Job.findByIdAndUpdate(jobId, request.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedJob) {
      return response.status(404).json({ message: "Job not found" });
    }

    return response.json(updatedJob);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

// Delete a job by ID
router.delete("/delete/:id", isAuthenticated, async (request, response) => {
  try {
    const jobId = request.params.id;

    const job = await Job.ByIdAndDelete(jobId);

    if (!job) {
      return response.status(404).json({ message: "Job not found" });
    }

    response.json({ message: "Job deleted successfully" });
  } catch (error) {
    response.status(500).json({ message: "Failed to delete job", error });
  }
});

router.get("/applications", async (req, res) => {
  const internDetails = await InternDetails.find({ email: req.userEmail });

  if (!internDetails) {
    return res.status(404).send("No applications found");
  }

  res.send(internDetails);
});

module.exports = router;
