function setup() {
    createCanvas(windowWidth, windowHeight);
    let Adam = new Person("Adam", null, 1, 50, 50, "Adam (1)");
    let Abel = new Person("Abel", Adam, 2, 200, 100, "Abel (2)");
    let Cain = new Person("Cain", Adam, 3, 350, 150, "Cain (3)");
}

let Person = [];
//let person1gen
//let gendiff = person1gen - person2gen

function draw () {
    background(220);

    rect(50, 50, 150, 50);
    rect(200, 100, 150, 50);
    rect(350, 150, 150, 50);

    Person.push(new Person("Adam", null, 1, 50, 50, "Adam (1)"));
    Person.push(new Person("Abel", Adam, 2, 200, 100, "Abel (2)"));
    Person.push(new Person("Cain", Adam, 3, 350, 150, "Cain (3)"));
}