import React from "react";
import "./Button.css";

function Button({ order }) {
  return <button className="btn">{order}</button>;
}
export default Button;
