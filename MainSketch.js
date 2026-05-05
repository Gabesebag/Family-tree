function setup() {
	createCanvas(windowWidth, windowHeight);

	let Adam = new Person("Adam", null);

	let Abel = new Person("Abel", Adam);
	let Cain = new Person("Cain", Adam);

	let Nimrod = new Person("Nimrod", Cain);
	let Peter = new Person("Peter", Cain);
	let alexzandar = new Person("Alexzandar", Abel);
	let Lucas = new Person("Lucas", Abel);

	let Seth = new Person("Seth", Nimrod);
	let Enoch = new Person("Enoch", Nimrod);
	let Tobias = new Person("Toobias", Peter);
	let Asher = new Person("Asher", Peter);
	let Moses = new Person("Moses", alexzandar);
	let Silas = new Person("Silas", alexzandar);
	let Isaac = new Person("Isaac", Lucas);
	let Gideon = new Person("Gideon", Lucas);

	Household = [Adam, Abel, Cain, Nimrod, Peter, alexzandar, Lucas, Seth, Enoch, Tobias, Asher, Moses, Silas, Isaac, Gideon];
	PersonA = random(Household);
	PersonB = random(Household);

	//Print the generation of PersonA
	print(`${PersonA.name} belongs in generation ${Generation(PersonA)}`);
	print(`${PersonB.name} belongs in generation ${Generation(PersonB)}`);

	//Print the greatness number of PersonA compared to PersonB
	print(`${PersonA.name} has a greatness number of ${Greatnessnumber(PersonA, PersonB)} compared to ${PersonB.name}`);

	//Print the relation between PersonA and PersonB
	let gendiff = GenerationDifference(PersonA, PersonB);
	let relationship;
	let greatnesscounter;
	if (gendiff === -2) {
		relationship = "grandparent";
	} else if (gendiff === -1) {
		relationship = "parent";
	} else if (gendiff === 0) {
		relationship = "sibling";
	} else if (gendiff === 1) {
		relationship = "child";
	} else if (gendiff === 2) {
		relationship = "grandchild";
	}
	// Newer print
	print(`${PersonA.name} is the ${relationship} x${greatnesscounter} of ${PersonB.name}`);
	//print(`${PersonA.name} is the ${relationship} of ${PersonB.name}`);
}