import React from "react";
import UserCard from "./UserCard";

const UserList = (props) => {
  const deleteUserHandler = (id) => {
    props.getUserId(id);
  };

  // const renderUserList = props.users.map((user) => {
  //   return (
  //     <UserCard
  //       user={user}
  //       deleteUser={deleteUserHandler}
  //       setCurrentUser={props.setCurrentUser}
  //       key={user.id}
  //     />
  //   );
  // });

  return (
    <>
      <h3>User List</h3>
      {props.users.map((user) => {
        return (
          <UserCard
            user={user}
            deleteUser={deleteUserHandler}
            setCurrentUser={props.setCurrentUser}
            key={user.id}
          />
        );
      })}
    </>
  );
};

export default UserList;
