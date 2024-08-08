const { Schema, model } = require("mongoose");

const internshipSchema = new Schema({
  internship_id:{
    type:String,
    required:true,
  },
  company_Name: {
    type: String,
    required: true,
  },
  company_Id: {
    type: String,
    required: true,
  },
  company_Location: {
    type: String,
    required: true,
  },
  role_name: {
    type: String,
    required: true,
  },
  requiredSkills: {
    type: [String],
    required: true,
  },
  internship_Type: {
    type: String,
    // TODO: add types as needed
    // enum: ["FT", "PT", "CT", "NT"],
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  stipend: {     
    type: Number,
    required: true,
  },
  applicationDeadline: {
    type: Date,
    required: true,
  },
  maxNoOfApplicants: {
    type: Number,
    required: true,
  },
  positionsAvailable: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Internship = model("internship", internshipSchema);

module.exports = { internshipSchema, Internship };
