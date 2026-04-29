function setup() {
    createCanvas(400, 400);
    let Adam = new Person("Adam", null, 1, 50, 50, "Adam (1)");
    let Abel = new Person("Abel", Adam, 2, 200, 100, "Abel (2)");
    let Cain = new Person("Cain", Adam, 3, 350, 150, "Cain (3)");
}

function draw () {
    background(220);

    Person.push(new Person("Adam", null, 1, 50, 50, "Adam (1)"));
    Person.push(new Person("Abel", Adam, 2, 200, 100, "Abel (2)"));
    Person.push(new Person("Cain", Adam, 3, 350, 150, "Cain (3)"));
}