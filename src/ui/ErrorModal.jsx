import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

const ModalRoot = (props) => {
  return (
    <Card>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <button onClick={props.btnOkayHandler}>Okay</button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalRoot
          title={props.title}
          message={props.message}
          btnOkayHandler={props.btnOkayHandler}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
