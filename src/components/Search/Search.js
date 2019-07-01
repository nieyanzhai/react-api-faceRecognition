import React from "react";

import "./Search.css";
import Spinner from "../../hoc/spinners/ClipLoader/ClipLoader";

const search = props => {
  const spinner = props.loading ? (
    <div className="spinner">
      <Spinner />
    </div>
  ) : null;

  return (
    <div className="Search">
      <p>past a picture url, and recognize face</p>
      <div className="Form">
        <span style={{ color: "red" }}>image url: </span>
        <input type="text" value={props.imageUrl} onChange={props.changed} />
        <button className="danger" onClick={props.clear}>
          clear
        </button>
        <button onClick={props.clicked}>submit</button>
        {spinner}
      </div>
    </div>
  );
};

export default search;
