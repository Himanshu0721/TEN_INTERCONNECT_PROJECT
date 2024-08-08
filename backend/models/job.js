const mongoose = require("mongoose");
const Joi = require("joi");
const { Schema } = require("mongoose");
const JoiObjectId = require("joi-objectid")(Joi);

const jobSchema = new mongoose.Schema({
  job_id: {
    type: String,
    required: true,
  },
  role_name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  job_type: {
    type: String,
    required: true,
  },
  skills_required: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  salary:{
    type:Number,
    required:true,
  },
  job_deadline:{
    type:String,
    required:true,
  },
  max_applicants:{
    type:Number,
    required:true,
  },
  totalpositions:{
    type:Number,
    required:true,
  },
  company_id: {
    // type: Schema.Types.ObjectId,
    // ref: "Company",
    type: String,
    required: true,
  },
  company_name:{
    type:String,
    required:true,
  },
});

const Job = mongoose.model("job", jobSchema);

async function validate(Job) {
  // TODO: HAVE TO WRITE VALIDATION SCHEMA FOR Job
  // TODO: what to dp about company_id
  // const schema = Joi.object({
  //     name: Joi.string().required().min(5).max(255),
  //     emailId: Joi.string().max(255).required().email(),
  //     // password: Joi.string().required().min(8).max(255),
  //     isAdmin: Joi.boolean(),
  //     resumelink: Joi.string().max(500)
  // });
  //
  // return schema.validate(profile);
}

module.exports.jobSchema = jobSchema;
module.exports.validate = validate;
module.exports.Job = Job;
