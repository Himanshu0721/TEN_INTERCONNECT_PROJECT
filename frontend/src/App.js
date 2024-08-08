import { BrowserRouter, Route, Routes } from "react-router-dom";
import CareerPage from "./pages/Creerpages/CareerPage";
// import Navbar from "./components/Bars/Navbar";
import Home from "./pages/navcomponents/Home";
import UserProfile from "./pages/UserProfile";
import Contact from "./pages/navcomponents/Contactpage";
import About from "./pages/navcomponents/About";
import LogIn from "./pages/navcomponents/LogIn";
import SignUp from "./pages/navcomponents/SignUp";
import Footbar from "./components/Bars/Footerbar";

import Jobs from "./pages/Admin/Jobs";
import UserForm from "./components/Users/UserForm";
import Admin from "./pages/Admin/Admin";
import AdminChat from "./pages/Admin/AdminChat/AdminChat";
import UserChat from "./pages/UserChat/UserChat"
import Hired from "./pages/Admin/Hired"
import HelpCenter from "./pages/HelpCenterPages/HelpCenter";
import PageNotFound from "./pages/PageNotFound";

import { useContext } from "react";
import { AuthContext } from "./Component/authContext/AuthContext";
import Jobpage from "./components/Jobs/Jobpage";
import Apply from "./components/Apply/Apply";
import ApplyForm from "./components/Apply/ApplyForm";
import Applications from "./components/Applications/Applications";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./Component/theme";
import SingleJob from "./components/Jobs/singleJob";
import UserList from "./components/Users/UserList";
import AddJob from "./components/Jobs/AddJob";
// import Profile from "./components/Employer/Profile";
import CreateTask from "./pages/Tasks/CreateTask";
import ViewTask from "./pages/Tasks/ViewTask";
import Tasks from "./pages/Tasks/Tasks";
import Guidelines from "./pages/navcomponents/Guidelines";
import Privacy from "./pages/TermsPage/Privacy";
import Policy from "./pages/TermsPage/Policy";
import SavedJobs from "./pages/Creerpages/SavedJobs";
import ViewApplication from "./components/Jobs/viewApplication";
import Profile from "./pages/Profile/profile";
import Editprofile from "./pages/Profile/editprofile";

import Navbar1 from "./components/Bars/Navbar1";
import SingleInternship from "./components/Jobs/SingleInternship";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          {/* <Navbar /> */}
          <Navbar1/>
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/profile" element={<UserProfile />} />
              <Route path="/user/login" element={<LogIn />} />
              <Route path="/user/register" element={<SignUp />} />
              <Route path="/contactus" element={<Contact />} />
              <Route path="/aboutus" element={<About />} />
              <Route path="/guidelines" element={<Guidelines />} />
              <Route path="/terms">
                <Route path="privacy" element={<Privacy />} />
                <Route path="policy" element={<Policy />} />
              </Route>
              {/* <Route exact path="/profile">
                {userType() === "Employee" ? (
                  <Profile />
                ) : (
                  <UserProfile/>
                )}
              </Route> */}

              <Route path="/eprofile" element={<Profile />} />
              <Route path="/eprofile/edit" element={<Editprofile/>}/>
              <Route path="/jobpage" element={<Jobpage />} />
              <Route path="/search/location/:location" element={<Jobpage />} />
              <Route path="/search/:keyword" element={<Jobpage />} />

              <Route path="/job/:id" element={<SingleJob />} />
              <Route path="/internship/:id" element={<SingleInternship />} />
              <Route exact path="/jobs" element={<Jobs />} />
              <Route path="/applyform" element={<ApplyForm />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/user/applications" element={<Applications />} />
              <Route exact path="/users/create" element={<UserForm />} />
              <Route path="/addjob" element={<AddJob />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/viewapplication" element={<ViewApplication />} />
              <Route path="/task" element={<Tasks />} />
              <Route path="/task/create" element={<CreateTask />} />
              <Route path="/task/:id" element={<ViewTask />} />
              <Route path="/careers" element={<CareerPage />} />
              <Route path="/saved_jobs" element={<SavedJobs />} />
              <Route path="helpcenter" element={<HelpCenter />}/>
              <Route path="/user/chat" element={<UserChat />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <Footbar/>
        </BrowserRouter>

      </ThemeProvider>
    </div>
  );
}

export default App;
