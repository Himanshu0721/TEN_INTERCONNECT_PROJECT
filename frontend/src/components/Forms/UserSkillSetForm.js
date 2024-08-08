import React, { useState, useEffect } from "react";
import "../../componentsCss/skillset.css";

const UserSkillSetForm = ({ formData, onNext, setFormData, onPrevious }) => {
  const { skills } = formData;
  const [errors, setErrors] = useState({});
  const [skillInput, setSkillInput] = useState("");
  const [suggestedSkills, setSuggestedSkills] = useState([]);
  const [relatedSkills, setRelatedSkills] = useState([]);

  // Mock data for suggested skills and related skills
  const mockSuggestedSkills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Java",
    "Python",
    "Ruby",
    "Angular",
    "Vue",
    "SQL",
    "C++",
  ];
  const mockRelatedSkills = ["Java", "Python", "Ruby", "Angular"];

  useEffect(() => {
    // Update suggested skills based on user input
    if (skillInput !== "") {
      const filteredSkills = mockSuggestedSkills.filter((skill) =>
        skill.toLowerCase().startsWith(skillInput.toLowerCase())
      );
      setSuggestedSkills(filteredSkills);
    } else {
      // If no input, display related skills or random skills if no skills added yet
      const displaySkills =
        skills.length > 0 ? mockRelatedSkills : getRandomSkills();
      setSuggestedSkills(displaySkills);
    }
  }, [skillInput, skills]);

  const getRandomSkills = () => {
    const randomSkills = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(
        Math.random() * mockSuggestedSkills.length
      );
      randomSkills.push(mockSuggestedSkills[randomIndex]);
    }
    return randomSkills;
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    onPrevious();
  };

  const handleSkillInputChange = (e) => {
    setSkillInput(e.target.value);
  };

  const handleAddSkill = (skillInput) => {
    console.log(skillInput);
    if (skillInput.trim() !== "" && !skills.includes(skillInput)) {
      setFormData({ ...formData, skills: [...skills, skillInput] });
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skill) => {
    const updatedSkills = skills.filter((s) => s !== skill);
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    if (Object.keys(errors).length === 0) {
      console.log("I am getting called , but why ??");
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <small>
        <i className="fa fa-smile-o"></i>
      </small>
      <div className="text">
        <h2>Skill Set</h2>
        <p>List out all your skills.</p>
      </div>
      <div className="form-group">
        {/* <label htmlFor="skills">Skills</label> */}
        <div className="skills-container">
          {skills.map((skill) => (
            <div key={skill} className="skill">
              {skill}
              <button
                type="button"
                className="remove-skill"
                onClick={() => handleRemoveSkill(skill)}
              >
                X
              </button>
            </div>
          ))}
        </div>
        <div className="add-skill">
          <input
            type="text"
            placeholder="Add a skill"
            value={skillInput}
            onChange={handleSkillInputChange}
          />
        </div>
        <div className="skilly">
          <div>
            <button
              type="button"
              className="skill-add"
              onClick={() => handleAddSkill(skillInput)}
            >
              <span className="skill-button"> + Add </span>
            </button>
          </div>
        </div>

        <div className="suggested-skills">
          {suggestedSkills.map((suggestedSkill) => (
            <button
              key={suggestedSkill}
              type="button"
              className="suggested-skill"
              onClick={() => handleAddSkill(suggestedSkill)}
            >
              {suggestedSkill}
            </button>
          ))}
        </div>
      </div>

      <div className="buttons button_space">
        <button style={{ width: "100px" }} onClick={handlePrevious}>
          Previous
        </button>
        <button type="submit" style={{ width: "100px" }}>
          Next
        </button>
      </div>
    </form>
  );
};

export default UserSkillSetForm;
