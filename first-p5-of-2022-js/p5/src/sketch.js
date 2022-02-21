function setup() {
  createCanvas(400, 400);
  background(125);
} 

// # - [Script] -END-

function draw() {
  // TODO: Create a class that classes, such as ElementShape and ElementPosition, can inherit methods and properties from. Add a method that randomizes a number. Add color properties and methods to a class or the main class.

  // TODO: Move classes into another file and export them by default. Import them and thing of an easier alias to call them the file by.

  /* 
   * I WOULD LIKE TO:
   *
   * Create one main class that houses all of my other classes. It can be 
   * called 'App'.
   * 
   * Not repeat myself and continue finding ways to let statements be
   * 'one and done'.
   * 
   * Outsource work to a class with relevant ties to its core functionality.
   * 
   * My reasoning: I'm not sure yet if you can create more than one constructor
   * per class. If I find that you can, I will then know that my other
   * suspicion was correct in that classes must be meant to house everything
   * relevant to its core attributes. So good class names for shapes would be
   * Square, Circle, Oval, Rectangle, etc.
   * 
   * In each class I would create core properties and core methods that 
   * manipulate those properties.
   * Anything not a relevant core attribute to a class will be handled by the 
   * Main class.
   * 
   * I like to think of classes as a network of information about a certain
   * object and a certain methodology, that can reach out to other objects
   * and share those attributes.
   * 
   * Would I be correct to assume that the above is more closely describing 
   * what 'real' classes do in the world of programming languages such as 
   * Java or C#?
   * 
   * I haven't yet concluded whether I fully understand them or not.
   * 
   * P.S. Why do they say 'classes in JavaScript are merely syntactic surgar
   * and not the same as OOP languages like Java and C#?
   * 
   */

  class ElementShape {
    constructor() {
      this.x = x;
      this.y = y;
      this.h = h;
      this.w = w;
    }
    // TODO: Create methods to change (?)
  }

  class ElementPosition {
    constructor() {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  }

  // const colors = function(red, blue, green, alpha) {
    //  ---
  // },
  //   randomX = random(0, 400),
  //   randomY = random(0, 400),
  //   randomHeight = random(0, 100),
  //   randomWidth = random(0, 2);

  // if (mouseIsPressed) {
  //   fill(0)
  // } else {
  //   fill(255);
  // }

  // ellipse(randomX, randomY, randomHeight, randomWidth);
}
