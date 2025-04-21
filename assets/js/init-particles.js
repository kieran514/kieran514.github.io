document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80, // Density of particles
          "density": {
            "enable": true,
            "value_area": 800 // Area where density is calculated
          }
        },
        "color": {
          // Use colors from your Magma palette
          "value": ["#ed7431", "#f9cb35", "#bd3f50", "#852860"]
        },
        "shape": {
          "type": "circle", // Or "edge", "triangle", "polygon", "star", "image"
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
          // If using image:
          // "image": {
          //   "src": "path/to/your/image.svg",
          //   "width": 100,
          //   "height": 100
          // }
        },
        "opacity": {
          "value": 0.6, // Particle opacity
          "random": true,
          "anim": {
            "enable": true,
            "speed": 0.8,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3, // Particle size
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true, // Connect particles with lines?
          "distance": 150, // Max distance to link
          "color": "#440c55", // Line color (use a mid-tone Magma)
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2, // Movement speed
          "direction": "none", // "none", "top", "top-right", "right", etc.
          "random": true,
          "straight": false,
          "out_mode": "out", // Behavior when particles leave canvas: "out", "bounce"
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas", // "canvas" or "window"
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse" // "grab", "bubble", "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push" // "push", "remove", "bubble", "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 100, // How far particles are pushed away
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4 // Number of particles added on click
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true // Adjusts for high-res displays
    });
  }
});