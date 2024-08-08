import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Import other reducers
import {
  loadJobReducer,
  loadJobSingleReducer,
  registerAjobReducer,
} from "./reducers/jobReducer";

import {
  createJobTypeReducer,
  loadJobTypeReducer,
} from "./reducers/jobTypeReducer";

import {
  allUserReducer,
  userApplyJobReducer,
  userReducerLogout,
  userReducerProfile,
  userReducerSignIn,
  userReducerSignUp,
} from "./reducers/userReducer";

import { modeReducer } from "./reducers/themeModeReducer";
import { savedJobsReducer } from "./reducers/savedJobsReducer";
import selectedApplicantReducer from "./reducers/selectedApplicantReducer";
import hiredReducer from "./reducers/hiredReducer";
import messageReducer from "./reducers/messagesReducer";
import chatReducer from "./reducers/chatReducer";
import applicationReducer from "./reducers/applicationReducer";

// Combine reducers
const reducer = combineReducers({
  loadJobs: loadJobReducer,
  jobTypeAll: loadJobTypeReducer,
  signIn: userReducerSignIn,
  logOut: userReducerLogout,
  userProfile: userReducerProfile,
  singleJob: loadJobSingleReducer,
  userJobApplication: userApplyJobReducer,
  allUsers: allUserReducer,
  signUp: userReducerSignUp,
  mode: modeReducer,
  registerJob: registerAjobReducer,
  createJobType: createJobTypeReducer,
  savedJobs: savedJobsReducer,
  hired: hiredReducer,
  selectedApplicant: selectedApplicantReducer,
  messages: messageReducer,
  chat: chatReducer,
  applications: applicationReducer,
});

// Initial state
let initialState = {
  signIn: {
    userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
  },
  mode: {
    mode: "light",
  },
  savedJobs: {
    jobs: localStorage.getItem("savedJobs")
        ? JSON.parse(localStorage.getItem("savedJobs"))
        : [],
  },
};

// Middleware
const middleware = [thunk];

// Create store
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
