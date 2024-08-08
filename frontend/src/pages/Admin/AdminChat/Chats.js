import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DemoImage from "../../../images/userAvatar.png"
import { fetchHiredApplicants } from '../../../redux/actions/hiredActions';
import { setSelectedApplicant } from '../../../redux/actions/selectedApplicantActions';
import "../../../pages.css/adminchat/chats.css"

const Chats = () => {
    const dispatch = useDispatch();
    const { hiredApplicants } = useSelector((state) => state.hired);

    const ApplicantInfo = ({ name }) => {
        return (
            <div className="applicantInfo" onClick={() => dispatch(setSelectedApplicant(name))}>
                <img src={DemoImage} alt=""/>
                {name}
            </div>
        );
    };

    useEffect(() => {
        if (hiredApplicants.length === 0) {
            dispatch(fetchHiredApplicants());
        }
    }, [dispatch, hiredApplicants.length]);

    return (
        <div className="chats">
            {hiredApplicants && hiredApplicants.length === 0 ? (
                <div className="applicantInfo">
                    No applicants hired yet.
                </div>
            ) : (
                hiredApplicants && hiredApplicants.map((applicant, key) => {
                    return <ApplicantInfo key={key} name={applicant.name} />;
                })
            )}
        </div>
    );
};

export default Chats;
