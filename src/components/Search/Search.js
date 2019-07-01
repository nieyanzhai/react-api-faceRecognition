import React from "react";

import "./Search.css";

const search = props => {
  return (
    <div className="Search">
      <p>past a picture url, and recognize face</p>
      <div className="Form">
        <input type="text" value={props.imageUrl} onChange={props.changed} />
        <button onClick={props.clicked}>submit</button>
      </div>
    </div>
  );
};

export default search;
