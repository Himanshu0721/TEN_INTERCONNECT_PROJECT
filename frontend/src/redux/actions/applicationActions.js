export const ADD_APPLICATION = "ADD_APPLICATION";

export const addApplication = (application) => ({
    type: ADD_APPLICATION,
    payload: application,
});
