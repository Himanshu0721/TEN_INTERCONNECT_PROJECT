export const setSelectedApplicant = (applicant) => {
    return {
        type: "SET_SELECTED_APPLICANT",
        payload: applicant,
    };
};