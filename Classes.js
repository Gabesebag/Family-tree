class Person {
  constructor(name, ancestor, generation, x, y) {
    this.name = name;
    this.ancestor = ancestor;
    this.generation = generation;
    this.null = null;
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 50;
  }
  // displays the family tree as rectangles with names inside
  displayFamilyTree() {
      fill('lightblue');
      rect(this.x, this.y, this.width, this.height);
          fill('black');
          textSize(18);
          textAlign(LEFT, CENTER);
          text(this.name, this.x + 10, this.y + this.height / 2);
  }
}
