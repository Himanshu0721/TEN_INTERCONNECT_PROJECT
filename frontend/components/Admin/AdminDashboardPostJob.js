import React from 'react'
import "../../pages.css/admin.css";
import AddJob from '../Jobs/AddJob';

const AdminDashboardPostJob = (props) => {
    return (
        <div className='postjobsection'>
            <AddJob 
            addjobhandler={props.addjobhandler} 
            jobDetails={props.jobDetails} 
            setJobDetails={props.setJobDetails}/>
        </div>
    )
}

export default AdminDashboardPostJob