import { SAVE_JOB, REMOVE_JOB } from "../constants/savedJobsConstants";

export const saveJob = (job) => (dispatch, getState) => {
    dispatch({
        type: SAVE_JOB,
        payload: job,
    });

    localStorage.setItem("savedJobs", JSON.stringify(getState().savedJobs.jobs));
};

export const removeJob = (id) => (dispatch, getState) => {
    dispatch({
        type: REMOVE_JOB,
        payload: id,
    });

    localStorage.setItem("savedJobs", JSON.stringify(getState().savedJobs.jobs));
};
