import React from 'react';
import { useSelector } from 'react-redux';
import CardElement from '../../Component/CardElement';
import '../../pages.css/savedjobs.css'
import {useNavigate} from "react-router-dom";

const SavedJobs = () => {
    const navigate = useNavigate();
    const savedJobs = useSelector((state) => state.savedJobs.jobs);
    const handleGoBack = () => {
        navigate('/jobs');
    }
    console.log(savedJobs)
    return (
        <div>
            <div className="saved-jobs-wrapper">
                <div className="saved-jobs-container">
                    <h1>Saved <span style={{color:"blue"}}>Internships</span></h1>
                    <div className="saved-jobs">
                        {savedJobs && savedJobs.length > 0 ? (
                            savedJobs.map((job, i) => (
                                <CardElement
                                    key={i}
                                    id={job.id}
                                    jobTitle={job.jobTitle}
                                    description={job.description}
                                    category={job.category}
                                    location={job.location}
                                />
                            ))
                        ) : (
                            <p>You haven't saved any internships yet</p>
                        )}
                    </div>
                </div>
                <div className="go-back-content">
                    <button id="go-back" onClick={handleGoBack}>Go back to search internship</button>
                </div>
            </div>
        </div>
    );
};

export default SavedJobs;
