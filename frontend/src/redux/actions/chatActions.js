export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_SELECTED_USER = 'SET_SELECTED_USER';

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    payload: message,
});

export const setSelectedUser = (user) => ({
    type: SET_SELECTED_USER,
    payload: user,
})