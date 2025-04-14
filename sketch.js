
let myShader;

function preload() {
  myShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  createCanvas(800, 600, WEBGL);

  shader(myShader);

  myShader.setUniform('width', width);
  myShader.setUniform('height', height);

  noStroke();
}

function draw() {
  myShader.setUniform('time', millis() * 0.001);
  clear();
  rect(0, 0, width, height);
}
