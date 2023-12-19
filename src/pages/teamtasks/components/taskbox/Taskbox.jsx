import "./taskbox.css";
import React from "react";

function Taskbox(props) {
  return (
    <div className="taskBox">
      <h2>{props.title}</h2>
      {props.content}
    </div>
  );
}

export default Taskbox;
