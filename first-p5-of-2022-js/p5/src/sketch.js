function setup() {
  createCanvas(400, 400);
  background(125);
}

function draw() {
  const colors = function(red, blue, green, alpha) {

  },
    randomX = random(0, 400),
    randomY = random(0, 400),
    randomHeight = random(0, 100),
    randomWidth = random(0, 2);

  if (mouseIsPressed) {
    fill(0)
  } else {
    fill(255);
  }

  ellipse(randomX, randomY, randomHeight, randomWidth);
}
