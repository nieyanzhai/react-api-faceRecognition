import React from "react";
import Tilt from "react-tilt";

import "./Logo.css";
import brain from "./brain.png";

const logo = () => {
  return (
    <div className="Logo">
      <Tilt
        className="Tilt"
        options={{
          max: 25,
          speed: 400,
          glare: true,
          reverse: true,
          "max-glare": 0.5
        }}
      >
        <div className="Tilt-inner">
          <img src={brain} alt="logo" className="totally-centered" />
        </div>
      </Tilt>
    </div>
  );
};

export default logo;
