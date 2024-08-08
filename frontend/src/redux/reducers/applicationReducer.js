import { ADD_APPLICATION } from "../actions/applicationActions";

const initialState = {
    applications: [],
};

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_APPLICATION:
            return {
                ...state,
                applications: [...state.applications, action.payload],
            };
        default:
            return state;
    }
};

export default applicationReducer;
