const selectedApplicantReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_SELECTED_APPLICANT":
            return action.payload;
        default:
            return state;
    }
};

export default selectedApplicantReducer;
