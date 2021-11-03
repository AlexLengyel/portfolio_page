import React from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";

const particlesConfig = {
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": false,
        "value_area": 600,
      },
    },
    "collisions": {
      "enable": false,
      "mode": "bounce",
    },
    "color": {
      "value": ["#d2abeb", "#68f1e8"],
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": "#bbbbbb",
      },
      "polygon": {
        "nb_sides": 5,
      },
      "image": {
        "src": "",
        "width": 120,
        "height": 150,
      },
    },
    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0.5,
        "opacity_min": 0.5,
        "sync": false,
      },
    },
    "size": {
      "value": 130,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0.5,
        "size_min": 0.5,
        "sync": false,
      },
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1,
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600,
      },
    },
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": [],
      },
      "onclick": {
        "enable": false,
        "mode": [],
      },
      "resize": true,
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1,
        },
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3,
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4,
      },
      "push": {
        "particles_nb": 2,
      },
      "remove": {
        "particles_nb": 2,
      },
    },
  },
  "retina_detect": true,
};

const ParticlesWrapper = styled.div`
  height: 100%;
  width: 100%;

  overflow: hidden;

  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`;

const ParticleBackground = () => {
  return (
    <ParticlesWrapper>
      <Particles width="100%" height="100%" params={particlesConfig} />
    </ParticlesWrapper>
  );
};

export default ParticleBackground;
