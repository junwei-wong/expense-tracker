import React from "react";
import Card from "./Card.js";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="backdrop">
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">{props.children}</div>
      </Card>
    </div>
  );
};

export default Modal;
