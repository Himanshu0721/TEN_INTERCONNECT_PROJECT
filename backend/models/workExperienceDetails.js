const mongoose = require("mongoose");
const Joi = require("joi");
const JoiObjectId = require("joi-objectid")(Joi);

const workExperienceDetailsSchema = new mongoose.Schema({
  experience: {
    type: [
      new mongoose.Schema({
        company: {
          type: String,
          required: true,
          maxlength: 255,
        },
        position: {
          type: String,
          required: true,
          maxlength: 255,
        },
        FullTime: {
          type: Boolean,
          default: false,
        },
        PartTime: {
          type: Boolean,
          default: false,
        },
        Internship: {
          type: Boolean,
          default: false,
        },
        description: {
          type: String,
          required: true,
        },
        startDate: {
          type: Date,
          required: true,
        },
        endDate: {
          type: Date,
          required: true,
        },
      }),
    ],
    required: false,
  },
});

const workExperienceDetails = mongoose.model(
  "workExperienceDetails",
  workExperienceDetailsSchema
);

async function workExperienceValidation(workExperienceDetails) {
  try {
    const schema = Joi.object({
      workExperiences: Joi.array().items(
        Joi.object({
          company: Joi.string().required().max(255),
          position: Joi.string().required().max(255),
          description: Joi.string().required(),
          startDate: Joi.date().iso().required(),
          endDate: Joi.date().iso().required().greater(Joi.ref("startDate")),
          FullTime: Joi.boolean().required(),
          PartTime: Joi.boolean().required(),
          Internship: Joi.boolean().required(),
        })
      ),
    });

    const value = await schema.validateAsync(workExperienceDetails);
    return { value, error: null };
  } catch (error) {
    return { value: null, error: `Validation failed: ${error.message}` };
  }
}

module.exports.workExperienceValidation = workExperienceValidation;
module.exports.workExperienceDetails = workExperienceDetails;
