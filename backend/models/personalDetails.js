const mongoose = require("mongoose");
const Joi = require("joi");
// const Profile = require('./profile')
const { Schema } = require("mongoose");
JoiObjectId = require("joi-objectid")(Joi);

const personalDetailsSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
      maxlength: 255,
    },
    LastName: {
      type: String,
      required: true,
      maxlength: 255,
    },
    PhoneNumber: {
      type: Number,
      required: true,
    },
    EmailId: {
      type: String,
      required: true,
      maxlength: 255,
    },
    Address: {
      type: String,
      required: true,
    },
    State: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      required: true,
    },
    ZipCode: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const personalDetails = mongoose.model(
  "PersonalDetails",
  personalDetailsSchema
);

const personalDetailsValidation = async (data) => {
  try {
    const schema = Joi.object({
      firstName: Joi.string().min(5).max(255).required(),
      lastName: Joi.string().min(5).max(255).required(),
      phone: Joi.string().min(7).max(15).pattern(/^\d+$/).required().messages({
        "string.length": "Phone number must be exactly 12 digits.",
        "string.pattern.base": "Phone number must contain only digits (0-9).",
      }),
      email: Joi.string().email().max(500).required(),
      address: Joi.string().max(500).required(),
      state: Joi.string().max(200).required(),
      city: Joi.string().max(100).required(),
      code: Joi.number().required(),
    });

    const value = await schema.validateAsync(data);
    return { value };
  } catch (error) {
    return { error };
  }
};

module.exports.personalDetailsValidation = personalDetailsValidation;
module.exports.personalDetails = personalDetails;
