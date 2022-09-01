import React, { useState } from "react";

import AddUserForm from "./components/AddUserForm";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (username, age) => {
    setUsers([...users, { key: users.length, username, age }]);
  };
  return (
    <React.Fragment>
      <AddUserForm addUserHandler={addUserHandler} />
      <UserList users={users} />
    </React.Fragment>
  );
};

export default App;
