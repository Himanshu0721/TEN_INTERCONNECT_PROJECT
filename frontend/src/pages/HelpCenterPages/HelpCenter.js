import React from 'react';
import {Faq} from "./Faq";
import ContactUs from "./ContactUs"
import '../../pages.css/helpcenter/helpcenter.css'
function HelpCenter() {
    return (
        <div className="help-center-container">
            <hr/>
            <hr/>
            <div className="HelpPage">
                <div className="help-page">
                    <div className="h1parent">
                        <div className="help-center-header">Help <span style={{color:"blue"}}>Center</span></div>
                        <h3 style={{color:"black"}}>Hi User, we’re here to help you.</h3>
                    </div>
                    <div className="container">
                        <h2>If you are looking for help, you are in the right place</h2>
                        <p>
                            Welcome to the help page for our internship portal. Here, you can find
                            answers to frequently asked questions and get assistance on using
                            our platform.
                        </p>
                        <p>
                            If you have any questions or need assistance that you couldn't find
                            in our FAQs, don't hesitate to reach out to us directly. Our support team is
                            available to assist you.
                        </p>
                    </div>
                </div>
            </div>
            <Faq/>
        </div>
    );
}

export default HelpCenter;