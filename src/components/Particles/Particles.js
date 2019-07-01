import React from "react";
import Particles from "react-particles-js";

import "./Particles.css";

const particles = props => {
  return (
    <Particles
      className="Particles"
      params={{
        particles: {
          number: {
            value: 200
          },
          size: {
            value: 3
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            }
          }
        }
      }}
    />
  );
};

export default particles;
