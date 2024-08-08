const Joi = require("joi");

const InternshipValidationSchema = async Internship => {
  const schema = Joi.object({
    internship_id: Joi.string().required(),
    role_name: Joi.string().required(),
    company_Location: Joi.string().required(),
    internship_Type: Joi.string().required(),
    requiredSkills: Joi.array().items(Joi.string()).required(),
    description: Joi.string().required(),
    stipend: Joi.number().required(),
    applicationDeadline: Joi.date().required(),
    maxNoOfApplicants: Joi.number().required(),
    positionsAvailable: Joi.number().required(),
    company_Id: Joi.string().required(),
    company_Name: Joi.string().required(),
    duration: Joi.string().required(),
  });

  return schema.validate(Internship);
};

module.exports = InternshipValidationSchema;
