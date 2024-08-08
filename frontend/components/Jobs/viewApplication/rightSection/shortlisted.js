import React, { useEffect, useState } from 'react';
import api from '../../../../api/base';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../sendEmail.css';

const ShortListed = ({ jobId, roleName, companyName }) => {
    const [applications, setApplications] = useState([]);
    const [viewSendEmailCard, setViewSendEmailCard] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState({ id: null, firstName: '', lastName: '',userEmail: '' });


    const ShortListCard = ({ id, name, email, phone, coverLetter, canJoinImmediately, startingDate, resume }) => {
        const [isExpanded, setIsExpanded] = useState(false);

        const toggleExpanded = () => {
            setIsExpanded(!isExpanded);
        };

        const handleInterview = (id, name,userEmail) => {
            const [firstName, lastName] = name.split(' ');
            setSelectedApplicant({ id, firstName, lastName,userEmail });
            setViewSendEmailCard(true);
        };

        const handleHired = async (id, name, userEmail, companyName,roleName) => {
            const [firstName, lastName] = name.split(' ');
            setSelectedApplicant({ id, firstName, lastName,userEmail });
            await updateStatus(id, 'Hired');
            setViewSendEmailCard(false);

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

        const handleNotInterested = async (id, name, userEmail, companyName,roleName) => {
            const [firstName, lastName] = name.split(' ');
            setSelectedApplicant({ id, firstName, lastName,userEmail });
            await updateStatus(id, 'NotInterested');
            setViewSendEmailCard(false);

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
                <div className="email info">
                    <span style={{ fontWeight: 'bold' }}>Email : </span>
                    {email}
                </div>
                <div className="phone info">
                    <span style={{ fontWeight: 'bold' }}>Phone No. : </span>
                    {phone}
                </div>
                <div className="cover-letter info">
                    <span style={{ fontWeight: 'bold' }}>Cover Letter : </span>
                    {isExpanded ? coverLetter : truncatedCoverLetter}
                    <button onClick={toggleExpanded} className="see-more-button">
                        {isExpanded ? 'See less' : 'See more'}
                    </button>
                </div>
                <div className="available-from info">
                    <span style={{ fontWeight: 'bold' }}>Starting Date : </span>
                    {canJoinImmediately === 'No' ? startingDate : 'Immediately'}
                </div>
                <div className="resume info">
                    <a href={`https://internconnect-leuh.onrender.com/get-resume/${resume}`} target="_blank" rel="noopener noreferrer">
                        Download Resume
                    </a>
                </div>
                <div className="btns-wrapper">
                    <div className="status-btns">
                        <button onClick={() => handleNotInterested(id,name,email,companyName,roleName)}>Not Interested</button>
                        <button onClick={() => handleInterview(id, name,email)}>Interview</button>
                        <button onClick={() => handleHired(id,name,email,companyName,roleName)}>Hire</button>
                    </div>
                </div>
            </div>
        );
    };

    const SendEmailCard = ({ id, firstName, lastName, userEmail}) => {
        const [formData, setFormData] = useState({
            companyName: '',
            email: '',
            date: '',
            time: ''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value
            }));
        };

        const handleClose = () => {
            setViewSendEmailCard(false);
        };

        const handleSendEmail = async () => {
            await updateStatus(id, 'Interview');
            setViewSendEmailCard(false);

            const emailData = {
                companyName: formData.companyName,
                date: formData.date,
                time: formData.time,
                companyEmail: formData.email,
                link :formData.link,
                firstName,
                lastName,
                userEmail
            };

            try {
                await api.post('/send-email/interview', emailData);
                toast.success('Email Sent Successfully!', {
                    position: toast.POSITION.TOP_CENTER
                });
            } catch (error) {
                console.error('Failed to send email', error);
                toast.error('Failed to send email!', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        };

        return (
            <div id="overlay" className="overlay">
                <div className="send-email-card-wrapper">
                    <div className="send-email-card-container">
                        <h3 style={{ fontSize: '30px', color: 'black', fontWeight: '500' }}>
                            Schedule <span style={{ color: 'blue' }}>Interview</span>
                        </h3>
                        <form className="send-email-form">
                            <input
                                type="text"
                                name="companyName"
                                placeholder="Company Name"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="link"
                                placeholder="Interview Link"
                                value={formData.link}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="date"
                                name="date"
                                placeholder="Interview Date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="time"
                                name="time"
                                placeholder="Interview Time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </form>
                        <div className="send-email-buttons">
                            <button id="send" onClick={handleSendEmail}>
                                Send Email
                            </button>
                            <button id="close" onClick={handleClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await api.get('applyform/get-resume');
                setApplications(response.data);
            } catch (error) {
                console.error('Failed to fetch applications', error);
            }
        };

        fetchApplications();
    }, []);

    const shortlistedApplications =
        applications &&
        applications.filter((application) => {
            const matchesJobId = jobId ? application.jobid === jobId : true;
            const matchesStatus = application.status ? application.status === 'Shortlisted' : true;
            return matchesJobId && matchesStatus;
        });

    const updateStatus = async (id, status) => {
        try {
            await api.patch(`applyform/update-status/${id}`, { status });
            console.log(`Updated Status for ${id} : ${status}`);
            if (status === 'Hired') {
                toast.success('Applicant Hired!', {
                    position: toast.POSITION.TOP_CENTER
                });
            } else if (status === 'NotInterested') {

                toast.warning('Application is Not Interested!', {
                    position: toast.POSITION.TOP_CENTER
                });
            } else if (status === 'Interview') {
                toast.info('Interview Scheduled!', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            setApplications((prevState) => prevState.filter((application) => application._id !== id));
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className="shortlisted">
            {/* text section */}
            <div className="shortlist-section">
                <p className="shortlist-text" style={{ fontSize: '18px' }}>
                    To ensure your rest of the hiring experience is smooth, may we recommend that you -
                    *Always interview the applicants before finalizing -Helps you understand the candidate better:
                    Their availability for the internship, their understanding of this role, their expectations & communication skills.
                    <br />
                    * Always extend a formal offer letter -And ask them to convey acceptance before starting.
                </p>
                <div>
                    <label>Showing {shortlistedApplications.length} results</label>
                    <input type="checkbox" id="SelectAll" name="SelectAll" value="SelectAll" />
                </div>
                {viewSendEmailCard && (
                    <SendEmailCard
                        id={selectedApplicant.id}
                        firstName={selectedApplicant.firstName}
                        lastName={selectedApplicant.lastName}
                        userEmail={selectedApplicant.userEmail}
                    />
                )}
                <div className="shortlisted-application">
                    {shortlistedApplications.length === 0 ? (
                        <p>No Applications are shortlisted yet!</p>
                    ) : (
                        shortlistedApplications &&
                        shortlistedApplications.map((application, id) => (
                            <ShortListCard
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
                        ))
                    )}
                </div>
            </div>

            {/* filter */}
            <div className="filter-section">
                <h4>Filter</h4>
                <div style={{ display: 'flex' }}>
                    Assignment not sent
                    <div></div>
                </div>
                <br />
                <div>Interview not scheduled</div>
                <div style={{ display: 'flex' }}>
                    <button style={{ backgroundColor: 'white', color: 'blue', border: '1px solid black', padding: '1px 5px' }}>
                        Clear All
                    </button>
                    <button style={{ marginLeft: '4px', padding: '1px 5px' }}>Show Result</button>
                </div>
            </div>
        </div>
    );
};

export default ShortListed;
