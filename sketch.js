// Flocking
// Daniel Shiffman
// https://thecodingtrain.com

// https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html
// https://youtu.be/mhjuuHl6qHM
// https://editor.p5js.org/codingtrain/sketches/ry4XZ8OkN

const flock = [];

let alignSlider, cohesionSlider, separationSlider, perceptionSlider;

function setup() {
  createCanvas(640, 360);
  alignSlider = createSlider(0, 2, 1, 0.1);
  alignSlider.position(10, 450);
  cohesionSlider = createSlider(0, 2, 1, 0.1);
  cohesionSlider.position(160, 450);
  separationSlider = createSlider(0, 2, 1, 0.1);
  separationSlider.position(310, 450);
  perceptionSlider = createSlider(0, 100, 50, 0.1);
  perceptionSlider.position(460, 450);
  for (let i = 0; i < 150; i++) {
    flock.push(new Boid());
  }
}

function draw() {

  background(51);

  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
    boid.borders();
  }
}
