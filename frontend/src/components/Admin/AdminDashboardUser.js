import React, { useState } from "react";

import UserList from "../Users/UserList";
import UserForm from "../Users/UserForm";
import "../../pages.css/admin.css";

const AdminDashboardUser = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const users = props.users;
  const removeUserHandler = props.removeUserHandler;

  return (
    <div className="container-ulist-uprofile">
      <div className="list-scroll">
        <div className="uform">
          <UserForm />
        </div>
        <div className="ulist">
          <UserList
            users={users}
            getUserID={removeUserHandler}
            setCurrentUser={setCurrentUser}
          />
        </div>
      </div>

      <div className="u-profile">
        {/* <div className="details">
          {currentUser && <UserDetails user={currentUser} />}
        </div> */}
      </div>
    </div>
  );
};

export default AdminDashboardUser;
