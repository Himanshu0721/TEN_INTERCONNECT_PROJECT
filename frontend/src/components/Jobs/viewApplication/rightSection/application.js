import React, {useState, useEffect} from "react";
import "../viewApplication.css";
import "../applicationCard.css";
import api from "../../../../api/base";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Applications = ({jobId, roleName, companyName}) => {
    const [applications, setApplications] = useState([]);
    const [selectedApplicant, setSelectedApplicant] = useState({id: null, firstName: '', lastName: '', userEmail: ''});


    const ApplicantionCard = ({
                                  id,
                                  name,
                                  jobTitle,
                                  email,
                                  phone,
                                  coverLetter,
                                  canJoinImmediately,
                                  startingDate,
                                  resume,
                              }) => {
        const [isExpanded, setIsExpanded] = useState(false);

        const toggleExpanded = () => {
            setIsExpanded(!isExpanded);
        };
        const handleHired = async (id, name, userEmail, companyName, roleName) => {
            const [firstName, lastName] = name.split(' ');
            setSelectedApplicant({id, firstName, lastName, userEmail});
            await updateStatus(id, 'Hired');

            const emailData = {
                companyName,
                roleName,
                firstName,
                lastName,
                userEmail
            };

            try {
                await api.post('send-email/hired', emailData);
                toast.success('Email Sent Successfully!', {
                    position: toast.POSITION.TOP_CENTER
                });
            } catch (error) {
                console.error('Failed to send email', error);
                toast.error('Failed to send email!', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        }

        const handleNotInterested = async (id, name, userEmail, companyName, roleName) => {
            const [firstName, lastName] = name.split(' ');
            setSelectedApplicant({id, firstName, lastName, userEmail});
            await updateStatus(id, 'NotInterested');

            const emailData = {
                companyName,
                roleName,
                firstName,
                lastName,
                userEmail
            };

            try {
                await api.post('send-email/not-interested', emailData);
                toast.success('Email Sent Successfully!', {
                    position: toast.POSITION.TOP_CENTER
                });
            } catch (error) {
                console.error('Failed to send email', error);
                toast.error('Failed to send email!', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        }

        const truncatedCoverLetter = `${coverLetter.substring(0, 100)} `;

        return (
            <div className="applicant-card-container">
                <div className="name">{name}</div>
                <div className="job-title">
                    <span style={{fontWeight: "bold"}}>Applied for : </span>
                    {roleName}
                </div>
                <div className="email info">
                    <span style={{fontWeight: "bold"}}>Email : </span>
                    {email}
                </div>
                <div className="phone info">
                    <span style={{fontWeight: "bold"}}>Phone No. : </span>
                    {phone}
                </div>
                <div className="cover-letter info">
                    <span style={{fontWeight: "bold"}}>Cover Letter : </span>
                    {isExpanded ? coverLetter : truncatedCoverLetter}
                    <button onClick={toggleExpanded} className="see-more-button">
                        {isExpanded ? "See less" : "See more"}
                    </button>
                </div>
                <div className="available-from info">
                    <span style={{fontWeight: "bold"}}>Starting Date : </span>
                    {canJoinImmediately === "No" ? startingDate : "Immediately"}
                </div>
                <div className="resume info">
                    <a
                        href={`https://internconnect-fdoz.onrender.com/assets/download-resume/${resume}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Resume
                    </a>
                </div>
                <div className="btns-wrapper">
                    <div className="status-btns">
                        <button onClick={() => handleNotInterested(id,name,email,companyName,roleName)}>
                            Not Interested
                        </button>
                        <button onClick={() => updateStatus(id, "Shortlisted")}>
                            ShortList
                        </button>
                        <button onClick={() => handleHired(id,name,email,companyName,roleName)}>Hire</button>
                    </div>
                </div>
            </div>
        );
    };

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await api.get("applyform/get-resume");
                setApplications(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Failed to fetch applications", error);
            }
        };

        fetchApplications();
    }, []);

    const currentJobApplications =
        applications &&
        applications.filter(application => {
            const matchesJobId = jobId ? application.jobid === jobId : true;
            const matchesStatus = application.status
                ? application.status === "Application"
                : true;
            return matchesJobId && matchesStatus;
        });

    const updateStatus = async (id, status) => {
        try {
            await api.patch(`applyform/update-status/${id}`, {status});
            console.log(`Updated Status for ${id} : ${status}`);

            setApplications(prevState =>
                prevState.filter(application => application._id !== id)
            );
            if (status === "Hired") {
                toast.success("Applicant Hired!", {
                    position: toast.POSITION.TOP_CENTER,
                });
            } else if (status === "NotInterested") {
                toast.warning("Application is not Interested!", {
                    position: toast.POSITION.TOP_CENTER,
                });
            } else if (status === "Shortlisted") {
                toast.success("Application is Shortlisted !", {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
        } catch (e) {
            console.log(e.response.message);
        }
    };

    return (
        <div className="app">
            <div className="application-number">
                <span>Showing {currentJobApplications.length} results</span>
            </div>
            <div className="applications">
                {currentJobApplications.map((application, id) => (
                    <ApplicantionCard
                        key={id}
                        id={application._id}
                        name={application.userName}
                        jobTitle={application.jobTitle}
                        email={application.userEmail}
                        phone={application.userPhoneNumber}
                        coverLetter={application.coverLetter}
                        canJoinImmediately={application.canJoinImmediately}
                        startingDate={application.startingDate}
                        resume={application.resume}
                    />
                ))}
            </div>
        </div>
    );
};

export default Applications;

