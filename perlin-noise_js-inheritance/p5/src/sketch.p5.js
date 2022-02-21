/**
 * Perlin Noise Loops and JS Inheritance
 * CodingTrain https://youtu.be/7k-iJyHq7-k
 * (resume: 24:45)
 *-
 * @harryrf3 (2022-02-21T00:16:46.000-05:00)
 ***/


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(22);
  // center in screen
  translate(width / 2, height / 2);
  // line color
  stroke(255);
  // remove fill color
  noFill();
  beginShape();

  for (let a = 0; a < TWO_PI; a += 0.01) {
    let r = 100;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }

  endShape();
}