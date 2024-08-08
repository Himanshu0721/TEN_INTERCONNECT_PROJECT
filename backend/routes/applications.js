const router = require("express").Router();
const { InternDetails } = require("../models/applyFormInternship");

router
  .get("/all", async (req, res) => {
    const internDetails = await InternDetails.find();
    const user = req;

    if (!internDetails) {
      return res.status(404).send("No applications found");
    }

    res.send(internDetails);
  })
  .get("/my", async (req, res) => {
    const internDetails = await InternDetails.find({ email: req.userEmail });
		
    if (!internDetails) {
      return res.status(404).send("No applications found");
    }

    res.send(internDetails);
  });

module.exports = { router };
