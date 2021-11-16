import React from "react";
import "./Button.css";

const Button = (props) => {
  const classes = props.ClassName ? props.ClassName : "";
  return (
    <button
      className={`button ${classes}`}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
