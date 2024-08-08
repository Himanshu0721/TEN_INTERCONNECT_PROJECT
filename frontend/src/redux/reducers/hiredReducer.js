const initialState = {
    hiredApplicants: [],
    loading: false,
    error: null,
};

const hiredReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_HIRED_APPLICANTS_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_HIRED_APPLICANTS_SUCCESS':
            return { ...state, loading: false, hiredApplicants: action.payload };
        case 'FETCH_HIRED_APPLICANTS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default hiredReducer;
