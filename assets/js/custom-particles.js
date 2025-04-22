// tsParticles configuration for a Computer Vision feel
// Using tsParticles engine (ensure particles.min.js is the tsParticles library)

tsParticles.load("particles-js", {
    //fpsLimit: 60, // Uncomment to cap FPS if needed
    particles: {
      number: {
        value: 80, // Number of particles
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#fcab65", "#e75c6f", "#b9257a", "#7f0f6e", "#fcfdbf"] // Magma palette!
      },
      shape: {
        type: "circle", // Can use "square", "triangle" for more geometric feel
      },
      opacity: {
        value: 0.6, // Slightly transparent
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false, // Size animation can be distracting
        }
      },
      line_linked: {
        enable: true,
        distance: 120, // How close particles need to be to link
        color: "#7f0f6e", // Mid-magma color for lines
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5, // Slower, subtle movement
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out", // Particles leave the screen
        bounce: false,
        attract: {
          enable: false, // Turn off attraction for smoother flow
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // Push particles away slightly on hover
        },
        onclick: {
          enable: true,
          mode: "push" // Push particles on click
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 100, // Smaller repulsion distance
          duration: 0.4
        },
        push: {
          particles_nb: 4 // Add a few particles on click
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true,
    // Add the background settings here to ensure tsParticles controls the container background
    background: {
      color: "#000004", // Match your dark background ($magma-dark)
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  });
  