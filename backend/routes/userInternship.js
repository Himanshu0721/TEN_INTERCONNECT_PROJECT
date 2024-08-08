const { InternDetails } = require("../models/applyFormInternship");
const internshipApplyRoutes = require("express").Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./resumes");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    // + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

internshipApplyRoutes.post(
  "/apply",
  upload.single("resume"),
  async (req, res) => {
    try {
      const data = req.body;
      const userName = data.name;
      const userEmail = data.email;
      const userPhoneNumber = data.phone;
      const coverLetter = data.coverLetter;
      const fileName = req.file.filename;
      const canJoinImmediately = data.canJoinImmediately;
      const jobTitle = data.jobTitle;
      const jobid = data.jobid;

      console.log(data);

      const result = await InternDetails.create({
        userName: userName,
        userEmail: userEmail,
        userPhoneNumber: userPhoneNumber,
        coverLetter: coverLetter,
        resume: fileName,
        canJoinImmediately: canJoinImmediately,
        jobTitle: jobTitle,
        jobid,
      });

      res.send({ status: "ok", message: "Applied Successfully", data: result });
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
);

internshipApplyRoutes.get("/get-resume", async (req, res) => {
  try {
    const details = await InternDetails.find();
    res.status(200).send(details);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

internshipApplyRoutes.get("/:name", async (req, res) => {
  try {
    res.status(200).download(path.join(__dirname, `/${req.params.name}`));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

internshipApplyRoutes.patch("/update-status/:id", async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;
    await InternDetails.findByIdAndUpdate(id, { ...body });
    return res.send({ message: "success" });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//The condition for deleteAll should be status NotInterested and jobId
internshipApplyRoutes.delete("/deleteall/:jobid", async (req, res) => {
  try {
    const applications = await InternDetails.deleteMany({
      $and: [{ jobid: req.params.jobid }, { status: "NotInterested" }],
    });
    res.status(200).send({ deletedApplications: applications });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

internshipApplyRoutes.delete("/delete-not-interested/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const application = await InternDetails.findById(id);

    if (!application) return res.sendStatus(404);

    await InternDetails.findByIdAndDelete(id);
    res.status(200).send({ applicationDeleted: application });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = internshipApplyRoutes;
