class Person {
  constructor(name, ancestor, generation, x, y, answerText) {
    this.name = name;
    this.ancestor = ancestor;
    this.generation = generation;
    this.null = null;
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 50;
    this.answerText = `${this.name} (${this.generation})`;
  }
}

displayFamilyTree() {
        fill('black');
        textSize(18);
        textAlign(LEFT, CENTER);
        text(this.answerText, this.x + 10, this.y + this.height / 2);
}