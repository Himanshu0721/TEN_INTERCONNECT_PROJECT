import React, { useState } from 'react';
import '../../pages.css/helpcenter/contactus.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { name, email, subject, message } = formData;
        //temporary email
        const mailtoLink = `mailto:support@internshipportal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`)}`;

        // Create a temporary anchor element to simulate a click
        const tempLink = document.createElement('a');
        tempLink.href = mailtoLink;
        tempLink.click();
    };

    return (
        <div className="contactus-container container2">
            <h1 className="contactus" id="contactus">
                Contact <span style={{color: "blue"}}>Support</span>
            </h1>

            <p>
                If you have any further questions or need assistance, please don't
                hesitate to contact our support team at support@internshipportal.com
            </p>

            <div className="help-form">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button id="submit-btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
