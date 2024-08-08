const mongoose = require("mongoose");
const Joi = require("joi");
const { Schema } = require("mongoose");
JoiObjectId = require("joi-objectid")(Joi);

const socialMediaLinksSchema = new mongoose.Schema(
  {
    githubURL: {
      type: String,
      required: true,
    },
    linkedinURL: {
      type: String,
      required: true,
    },
    portfolioURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const socialMediaLinks = mongoose.model(
  "SocialMediaLinks",
  socialMediaLinksSchema
);

async function socialMediaLinksValidation(socialMediaLinks) {
  try {
    const schema = Joi.object({
      githubUrl: Joi.string().uri().label("GitHub URL").allow(""),
      linkedInUrl: Joi.string().uri().label("LinkedIn URL").allow(""),
      portfolioUrl: Joi.string().uri().label("Portfolio URL").allow(""),
    });

    const value = await schema.validateAsync(socialMediaLinks);
    return { value, error: null };
  } catch (error) {
    return { value: null, error: `Validation failed: ${error.message}` };
  }
}

module.exports.socialMediaLinksValidation = socialMediaLinksValidation;
module.exports.socialMediaLinks = socialMediaLinks;
