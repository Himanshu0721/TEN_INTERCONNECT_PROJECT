const mongoose = require("mongoose");
const Joi = require("joi");
const { Schema } = require("mongoose");

const educationDetailsSchema = new mongoose.Schema(
  {
    collegeName: {
      type: String,
      required: true,
      maxlength: 255,
    },
    branchOfStudy: {
      type: String,
      required: true,
      maxlength: 255,
    },
    educationLevel: {
      type: String,
      required: true,
      maxlength: 255,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const educationDetails = mongoose.model(
  "educationDetails",
  educationDetailsSchema
);

async function EducationDetailsValidation(educationDetails) {
  const schema = Joi.object({
    branch: Joi.string().required().max(255),
    educationLevel: Joi.string().required().max(255),
    startDate: Joi.date().iso().required(),
    endDate: Joi.date()
      .required()
      .greater(Joi.ref("startDate"))
      .message("End date must be greater than start date"),
    clg: Joi.string().required().max(255),
  });

  try {
    const value = await schema.validateAsync(educationDetails);
    console.log("This is the result ", value);
    return { value };
  } catch (error) {
    console.error("Validation error:", error);
    return { error };
  }
}

module.exports.EducationDetailsValidation = EducationDetailsValidation;
module.exports.educationDetails = educationDetails;
