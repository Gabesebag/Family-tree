function setup() {
	createCanvas(windowWidth, windowHeight);

	let Adam = new Person("Adam", null);

	let Abel = new Person("Abel", Adam);
	let Cain = new Person("Cain", Adam);

	let Nimrod = new Person("Nimrod", Cain);
	let Peter = new Person("Peter", Cain);
	let alexzandar = new Person("Alexzandar", Abel);
	let Lucas = new Person("Lucas", Abel);

	Household = [Adam, Abel, Cain, Nimrod, Peter, alexzandar, Lucas];
	PersonA = random(Household);
	PersonB = random(Household);

	//Print the generation of PersonA
	print(`${PersonA.name} belongs in generation ${Generation(PersonA)}`);

	//Print the greatness number of PersonA compared to PersonB
	print(`${PersonA.name} has a greatness number of ${Greatnessnumber(PersonA, PersonB)} compared to ${PersonB.name}`);

	//Print the relation between PersonA and PersonB
	let gendiff = GenerationDifference(PersonA, PersonB);
	let relationship;
	if (gendiff === 2) {
		relationship = "grandchild";
	} else if (gendiff === -1) {
		relationship = "child";
	} else if (gendiff === 0) {
		relationship = "sibling";
	}
	print(`${PersonA.name} is the ${relationship} of ${PersonB.name}`);
}