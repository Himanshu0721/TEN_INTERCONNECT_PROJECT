import React, { useState } from "react";
import "../../pages.css/profile.css";
import { useNavigate } from "react-router-dom";

const Editprofile = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("message sent!");
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const HandleSumbit = () => {
    alert("details edited successfully!");
    navigate("/eprofile");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        method="POST"
        name="contact-form"
        className="edit_profile">
        <div className="edsection">
          <h1 className="edit-heading">Edit your Details</h1>
          <div>
            <div>
              <input type="text" placeholder="First Name" name="firstname" className="editpagefields" required onChange={handleChange} />
            </div>
            <div>
              <input type="text" placeholder="Last Name" name="lastname" className="editpagefields" required onChange={handleChange} />
            </div>
            <div>
              <input type="text" placeholder="Phone No." name="phone" className="editpagefields" required onChange={handleChange} />
            </div>
            <div>
              <input type="text" placeholder="Email" name="email" className="editpagefields" required onChange={handleChange} />
            </div>
            <div>
              <textarea
                rows="5"
                cols="10"
                placeholder="Description"
                name="description"
                required
                className="editpagefields"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div>
            <input type="submit"
              className="updatebtn" value="Update Details" onClick={HandleSumbit} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Editprofile;
