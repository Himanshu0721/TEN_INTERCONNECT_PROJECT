const mongoose = require("mongoose");
const Joi = require("joi");

const { Schema } = require("mongoose");
JoiObjectId = require("joi-objectid")(Joi);

const skillsetSchema = new mongoose.Schema(
  {
    skillset: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

async function validateSkillset(skillset) {
  try {
    const schema = Joi.object({
      skills: Joi.array().required().items(Joi.string().required()),
    });

    const value = await schema.validateAsync(skillset);
    return { value, error: null };
  } catch (error) {
    return { value: null, error: `Validation failed: ${error.message}` };
  }
}

const Skillset = mongoose.model("Skillset", skillsetSchema);

module.exports.Skillset = Skillset;
module.exports.validateSkillset = validateSkillset;
