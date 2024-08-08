import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApplicantCard from "./ApplicantCard";
import LoadingBox from "../../Component/LoadingBox";
import '../../pages.css/hired.css';
import { fetchHiredApplicants } from '../../redux/actions/hiredActions'; // go to this file to make the original hiredApplicants fetch and write the function accordingly

const Hired = () => {
    const dispatch = useDispatch();
    const { hiredApplicants, loading } = useSelector((state) => state.hired);

    useEffect(() => {
        dispatch(fetchHiredApplicants());
    }, [dispatch]);

    return (
        <div className="hired-applicant-container">
            <section>
                <div className="hired-applicant-content">
                    <h2>Hired <span style={{ color: "blue", backgroundColor: "#f8f8f8" }}>Applicants</span></h2>
                    <div className="hired-applicants-listings">
                        <div className="applicants-box">
                            {loading ? (
                                <LoadingBox />
                            ) : hiredApplicants && hiredApplicants.length === 0 ? (
                                <div className="no-result">
                                    <h1>No applicants hired yet</h1>
                                </div>
                            ) : (
                                hiredApplicants && hiredApplicants.map((applicant, i) => (
                                    <ApplicantCard
                                        key={i}
                                        name={applicant.name}
                                        email={applicant.email}
                                        phone={applicant.phone}
                                        coverLetter={applicant.coverLetter}
                                        canJoinImmediately={applicant.canJoinImmediately}
                                        startingDate={applicant.startingDate}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hired;
