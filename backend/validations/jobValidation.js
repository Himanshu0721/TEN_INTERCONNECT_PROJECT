const Joi = require("joi");

const jobValidationSchema = async (Job) => {
  const schema = Joi.object({
    job_id: Joi.string().required(),
    role_name: Joi.string().required(),
    location: Joi.string().required(),
    job_type: Joi.string().required(),
    skills_required: Joi.array().items(Joi.string()).required(),
    description: Joi.string().required(),
    salary: Joi.number().required(),
    job_deadline:Joi.date().required(),
    max_applicants: Joi.number().required(),
    totalpositions: Joi.number().required(),
    company_id: Joi.string().required(),
    company_name:Joi.string().required(),
  });

  return schema.validate(Job);
};

module.exports = jobValidationSchema;
