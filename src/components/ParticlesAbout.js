import React from "react";
import Particles from "react-particles-js";

function ParticlesAbout(props) {
  return (
    <Particles
      style={{
        zIndex: "-5",
        display: "inline",
        position: "absolute",
        backgroundAttachment: "fixed",
        boxSizing: "border-box !important",
        background:
          "linearGradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), #c3bebb )"
      }}
      params={{
        particles: {
          number: {
            value: 300,
            density: {
              enable: true,
              value_area: 5839.692548078818
            }
          },
          color: {
            value: ["#ffffff", "#387aff", "#1c3d80", "#7da8ff", "#ececec"]
          },
          shape: {
            type: "circle",
            stroke: {
              width: 5,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.44093831673801875,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 4.008530152163807,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 4,
            direction: "bottom-left",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 200,
              size: 3,
              duration: 2,
              opacity: 5,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  );
}

export default ParticlesAbout;
