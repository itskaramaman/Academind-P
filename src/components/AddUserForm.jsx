import React, { useState } from "react";
import "./addUserForm.css";

import Wrapper from "../helpers/Wrapper";

import Card from "../ui/Card";
import ErrorModal from "../ui/ErrorModal";

const AddUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState();

  const okayHandler = () => {
    setError();
  };

  const addUserSubmitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0) {
      setError({
        title: "Invalid Title",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age greater than one.",
      });
      return;
    }
    props.addUserHandler(username, age);
    setUsername("");
    setAge(0);
  };

  return (
    <Wrapper className="container">
      {error ? (
        <ErrorModal
          title={error.title}
          message={error.message}
          btnOkayHandler={okayHandler}
        />
      ) : (
        <Card>
          <form onSubmit={addUserSubmitHandler}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <label>Age (Years)</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            ></input>
            <button type="submit">Add User</button>
          </form>
        </Card>
      )}
    </Wrapper>
  );
};

export default AddUserForm;
