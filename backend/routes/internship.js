const { isAuthenticated } = require("../middlewares/authCheck");
const { Internship } = require("../models/internship");
const internshipRoutes = require("express").Router();
const generateJobId = require("../utilities/generateJobId");
const internshipValidation = require("../validations/internshipValidations")
/**
 *?	Schema for the internship
 *!	 {
 *!	  companyName,
 *!	  companyId,
 *!	  companyLocation,
 *!	  jobTitle,
 *!	  requiredSkills,
 *!	  jobType,
 *!	  duration,
 *!	  salary,
 *!	  applicationDeadline,
 *!	  maxNoOfApplicants,
 *!	  positionsAvailable,
 *!	  description,
 *!	}
 */
//Get all Internships
internshipRoutes.get("/show/all", async (_, res) => {
  try {
    const internships = await Internship.find();
    return res.json(internships);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

internshipRoutes.get("/show/:id", async (req, res) => {
  try {
    const { id } = req.params
    const internship = await Internship.findOne({ internship_id:id });
    res.send(internship);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Post Internship
internshipRoutes.post("/create", async (request, response) => {
  try {
    // Generate job id using generate job id function
    let Id = await generateJobId();
    // request.body.job_id = jobId
    const { error } = await Internship.validate({...request.body,internship_id:Id});
    console.log(request.body);
    if (error) {
      console.log(error);
      return response.status(400).json({ error: error.details[0].message });
    }

    const newInternship = new Internship({ ...request.body, internship_id: Id });
    const savedInternship = await newInternship.save();

    return response.status(201).json({ message: "Internship SuccessFully Posted", savedInternship });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
  // try {
  //   const data = req.body;
  //   const internship = new Internship(data);
  //   const err = internship.validateSync();

  //   if (err) {
  //     const errors = Object.keys(err.errors).map(
  //       key => err.errors[key].message
  //     );
  //     return res.status(400).send({ errors });
  //   }

  //   await internship.save();
  //   res.send(internship);
  // } catch (error) {
  //   res.status(500).send(error.message);
  // }
});

// Update a job by ID
internshipRoutes.put("/update/:id", async (request, response) => {
  try {
    const internId = request.params.id;
    const { error } = await internshipValidation(request.body);

    if (error) {
      return response.status(400).json({ error: error.details[0].message });
    }

    const updatedinternship = await Internship.findByIdAndUpdate(internId, request.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedinternship) {
      return response.status(404).json({ message: "Internship not found" });
    }

    return response.json(updatedinternship);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
});

// Delete a Internship by ID
internshipRoutes.delete("/delete/:id", async (request, response) => {
  try {
    const internId = request.params.id;

    const internship = await Internship.findByIdAndDelete(internId);

    if (!internship) {
      return response.status(404).json({ message: "Internship not found" });
    }

    response.json({ message: "Internship deleted successfully" });
  } catch (error) {
    response.status(500).json({ message: "Failed to delete Internship", error });
  }
});
module.exports = internshipRoutes;
