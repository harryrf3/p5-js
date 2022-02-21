/**
 * Perlin Noise Loops
 * CodingTrain https://youtu.be/7k-iJyHq7-k
 *-
 * @harryrf3 (2022-02-21T00:16:46.000-05:00)
 ***/

 let noiseMax = 0.5;
 let slider;
 let phase = 0;
 let zoff = 0; 
 
 function setup() {
   createCanvas(600, 600);
   slider = createSlider(0, 10, 0, 0.1);
 }
 
 function draw() {
   // sets noiseSeed to a fixed number
   // noiseSeed(99); // can be randomized
   background(0, 25);
   // center in screen
   translate(width / 2, height / 2);
   // line color
   stroke(255);
   // remove fill color
   noFill();
   beginShape();
   noiseMax = slider.value();
   for (let a = 0; a < TWO_PI; a += 0.1) {
     let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
     let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
     let r = map(noise(xoff, yoff, zoff), 0, 1, 100, 200);
     let x = r * cos(a);
     let y = r * sin(a);
     vertex(x, y);
   }
  
   endShape(CLOSE);
   zoff += 0.01;
   phase += 0.01;
   // noLoop();
 }
 