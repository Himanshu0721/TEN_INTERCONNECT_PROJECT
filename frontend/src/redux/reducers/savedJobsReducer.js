import { SAVE_JOB, REMOVE_JOB } from "../constants/savedJobsConstants";

const initialState = {
    jobs: localStorage.getItem("savedJobs")
        ? JSON.parse(localStorage.getItem("savedJobs"))
        : [],
};

export const savedJobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
            };
        case REMOVE_JOB:
            return {
                ...state,
                jobs: state.jobs.filter((job) => job.id !== action.payload),
            };
        default:
            return state;
    }
};
