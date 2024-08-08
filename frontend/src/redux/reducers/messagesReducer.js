import { ADD_MESSAGE} from "../actions/messagesActions";

const initialState = {
    messages : []
}


const messageReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages,action.payload]
            };
        default :
            return state;
    }
}

export default messageReducer;