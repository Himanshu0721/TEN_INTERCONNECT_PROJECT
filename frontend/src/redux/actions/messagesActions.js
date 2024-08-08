import messages from "../../pages/Admin/AdminChat/Messages";

export const ADD_MESSAGE = 'ADD_MESSAGE';

export const add_messages = (message) => ({
    type : ADD_MESSAGE,
    payload : message
});