const mongoose = require("mongoose");

const internDetailsSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPhoneNumber: {
    type: String,
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    // required: true
  },
  canJoinImmediately: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobid: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Application",
  },
});

const InternDetails = mongoose.model("internDetails", internDetailsSchema);

module.exports.InternDetails = InternDetails;
