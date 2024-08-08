import React, { useState } from "react";
import faqData from "./Faqs";
import { Link } from "react-router-dom"
import '../../pages.css/helpcenter/faq.css'




export const Faq = () => {
    const [expanded, setExpanded] = useState({});

    const toggleAnswer = (index) => {
        setExpanded((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    return (
        <div><div className="top-page">
            <div className="first-faq">
                <h1
                    style={{
                        textAlign: "center",
                        paddingTop: "1.5rem",
                        marginBottom: "1rem",
                        fontSize: "70px",
                        color: "white",
                    }}
                >
                    FAQs
                </h1>
                <div className="div-top">
                    {faqData.map((item, index) => (
                        <div className="faq-item" key={index}>
                            <div className="header">
                                <h3 style={{color:"white"}}>{item.question}</h3>
                                <button onClick={() => toggleAnswer(index)}>
                                    {expanded[index] ? "▲" : "▼"}
                                </button>
                            </div>
                            {expanded[index] && <p>{item.answer}</p>}
                        </div>
                    ))}

                </div>
            </div>

            <div className="about-section">
                <div className="about-title">the gateway to employment opportunities...</div>
                <p className="about-description" style={{ color: "black" }}>
                    Our internship portal offers advanced search filters for precise internship matching, seamless resume uploading and parsing for easy application submission, and interactive tools like chatbots or forums for networking and support. Additionally, we provide personalized internship alerts and notifications, ensuring users stay updated on relevant internship opportunities. Our portal prioritizes user experience, security, and efficiency to enhance the overall internship search process.
                </p>
                <a href="/">
                    <Link to="/contactus">
                        <button className="login-btn">
                            Contact Us
                        </button>
                    </Link>
                </a>
            </div>
            <hr/>
        </div></div>


    )
}
