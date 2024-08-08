import { ADD_MESSAGE,SET_SELECTED_USER} from "../actions/chatActions";

const initialState = {
    messages: [],
    user: null,
}

const chatReducer = (state = initialState,action) =>{
    switch (action.type){
        case ADD_MESSAGE:
            return{
                ...state,
                messages: [...state.messages,action.payload],
            };
        case SET_SELECTED_USER:
            return{
                ...state,
                selectedUser: action.payload,
            }
        default:
            return state;
    }

}


export default chatReducer;