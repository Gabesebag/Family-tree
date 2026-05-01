function setup() {
    createCanvas(windowWidth, windowHeight);

    let Adam = new Person("Adam", null);

    let Abel = new Person("Abel", Adam);
    let Cain = new Person("Cain", Adam);

    let Nimrod = new Person("Nimrod", Cain);
    let Lucas = new Person("Lucas", Cain);
    let alexzandar = new Person("Alexzandar", Abel);
    // let Lucas = new Person("Lucas", Abel);
}

let Person = [];
//let person1gen
//let gendiff = person1gen - person2gen

function draw () {
    background(220);

    rect(50, 50, 150, 50);
    rect(200, 100, 150, 50);
    rect(350, 150, 150, 50);

    Person.push(new Person("Adam", null));
    Person.push(new Person("Abel", Adam));
    Person.push(new Person("Cain", Adam));
    Person.push(new Person("Seth", Adam));
}