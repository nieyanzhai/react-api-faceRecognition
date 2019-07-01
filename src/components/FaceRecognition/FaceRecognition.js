import React from "react";

import "./FaceRecognition.css";

const faceRecognition = props => {
  let faceBox = null;
  if (props.faces.length) {
    faceBox = props.faces.map(face => (
      <div
        key={face.id}
        className="bounding-box"
        style={{
          top: face.top_row,
          bottom: face.bottom_row,
          left: face.left_col,
          right: face.right_col
        }}
      />
    ));
  }

  return (
    <div className="FaceRecognition">
      <img id="human" alt="human" src={props.imageUrl} />
      {faceBox}
    </div>
  );
};

export default faceRecognition;
