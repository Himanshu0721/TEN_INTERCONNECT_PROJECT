import React, { useState } from 'react'
import "../../componentsCss/employerstyles/alljobs.css";
import UpdateInternship from "./UpdateInternship.js";

// let updatejobarr = [];

const AllInternship = ({ deleteinternhandler, internsarr, updateinternhandler,setView }) => {
    const Currdate = new Date();
    const [updateinternarr, setUpdateinternarr] = useState([]);
    // const compare = (interndeadline) => {
    //     if (new Date(interndeadline).getTime() < new Date(Currdate).getTime()) {
    //         <div>Closed</div>
    //     }
    //     else {
    //         <div>Active</div>
    //     }
    //     console.log(`Interval is working`);
    // }

    const openupdatejob = (internId, indexId) => {
        console.log(internId, indexId);
        document.getElementById("allinternships").style.border = "none";
        document.getElementById("updatesection").style.display = "block";
        document.getElementById("alljobstable").style.border = "none";
        // updatejobarr = jobsarr[indexId];
        // console.log(updatejobarr);
        const internUpdatedDetails =  {
            ...internsarr[indexId],
            internship_id:internId
        }
        setUpdateinternarr(internUpdatedDetails);   // Refactoring Error
        console.log(updateinternarr);
    }
    const backbtn = () => {
        document.getElementById("updatesection").style.display = "none";
        document.getElementById("allinternships").style.border = "block";
        // updatejobarr=[];
        // console.log(updatejobarr);
    }
    const submitbtn = () => {
        document.getElementById("updatesection").style.display = "none";
        document.getElementById("allinternships").style.border = "block";
    }
    const deletejob = (jobId) => {
        // console.log(jobId);
        deleteinternhandler(jobId);
    }
    console.log(internsarr);
    return (
        <div id='allinternships'>
            {
                internsarr.length !== 0 ?
                    <div className='tablesection'>
                        <table id='alljobstable'>
                            <thead>
                                <th>Internship Profile</th>
                                <th>Status</th>
                                <th>Total Views</th>
                                <th>Update</th>
                                <th>Delete</th>
                                <th>Action</th>
                            </thead>
                            <tbody>
                                {
                                    internsarr && internsarr.map((intern, index) => (
                                        <tr key={index}>
                                            <td className="">
                                                {intern.role_name}
                                            </td>
                                            <td className="">
                                                {
                                                    // {console.log(job.job_deadline)}
                                                    // setInterval(() => {
                                                    //   if (new Date(job.job_deadline).getTime() < new Date(Currdate).getTime()) {
                                                    //     <div>Closed</div>
                                                    //   }
                                                    //   else {
                                                    //     <div>Active</div>
                                                    //   }
                                                    //   console.log(`Interval is working`);
                                                    // }, 5000)
                                                    new Date(intern.applicationDeadline).getTime() < new Date(Currdate).getTime() ?
                                                        <div >Closed</div> :
                                                        <div style={{ "color": "green" }}>Active</div>
                                                }
                                            </td>
                                            <td className="">
                                                Total Views
                                            </td>
                                            <td className="">
                                                <input type="button" value="Update" onClick={() => openupdatejob(intern._id, index)} className='alljobsbtns' />
                                            </td>
                                            <td className="">
                                                <input type="button" value="Delete" onClick={() => deletejob(intern._id)} className='alljobsbtns' />
                                            </td>
                                            <td className="">
                                                <input type="button" value="View Applications" className='alljobsbtns' />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div> :
                    <div id='hire'>
                        <div className="hiresection1">
                            <div className="hiresubsection1">
                                Hire the best freshers <div id='spantext'>faster</div> and <div id="spantext">Better.</div> Now guaranteed!
                            </div>
                            <div className="hiresubsection2">
                                <input type="button" className='postbtn' id='internpostbtn' value="Post Internship" onClick={() => setView("postInternship")} />
                            </div>
                        </div>
                        <div className="hiresection2">
                            <img src="https://img.freepik.com/premium-vector/online-recruitment-concept-people-searching-candidate-new-employee-hiring-concept-illustration_138260-629.jpg" alt="" />
                        </div>
                    </div>
            }
            <div id='updatesection'>
                <UpdateInternship updateinternhandler={updateinternhandler} backbtnhandler={backbtn} update={updateinternarr} submitbtn={submitbtn} />
            </div>
        </div>

    )
}

export default AllInternship