import "./taskcount.css";
import React from "react";

function Taskcount(props) {
  return (
    <div className="count">
      <h1>{props.taskType}</h1>
      <h2>{props.count}</h2>
    </div>
  );
}

export default Taskcount;
