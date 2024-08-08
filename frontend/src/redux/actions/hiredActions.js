// actions/hiredActions.js
export const fetchHiredApplicants = () => async (dispatch) => {
    dispatch({ type: 'FETCH_HIRED_APPLICANTS_REQUEST' });
    // Change this to original hiredApplicants data
    try {
        // Simulating a fetch call with a timeout
        const mockData = [
            {
                name: "John Doe",
                email: "johndoe@example.com",
                phone: "123-456-7890",
                coverLetter: "Cover letter content",
                canJoinImmediately: "Yes",
                startingDate: "2024-06-01"
            },
            {
                name: "Jane Smith",
                email: "janesmith@example.com",
                phone: "987-654-3210",
                coverLetter: "Cover letter content",
                canJoinImmediately: "No",
                startingDate: "2024-07-01"
            }
        ];
        setTimeout(() => {
            dispatch({ type: 'FETCH_HIRED_APPLICANTS_SUCCESS', payload: mockData });
        }, 1);
    } catch (error) {
        dispatch({ type: 'FETCH_HIRED_APPLICANTS_FAILURE', payload: error });
    }
};
