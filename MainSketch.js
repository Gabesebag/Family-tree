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
	// PersonA = random(Household);
	// PersonB = random(Household);

	PersonA  = Peter;
	PersonB = Gideon;

	//Print the generation of PersonA
	print(`${PersonA.name} belongs in generation ${Generation(PersonA)}`);
	print(`${PersonB.name} belongs in generation ${Generation(PersonB)}`);

	//Print the greatness number of PersonA compared to PersonB
	print(`${PersonA.name} has a greatness number of ${Greatnessnumber(PersonA, PersonB)} compared to ${PersonB.name}`);

	//Print the relation between PersonA and PersonB
	let gendiff = GenerationDifference(PersonA, PersonB);
	let absGendiff = Math.abs(gendiff);
	let relationship;
	let generation;
	let tiercounter = generation
	let tier;
	
	if (absGendiff === 0) {
		if (PersonA.ancestor === PersonB.ancestor) {
			relationship = "sibling";
		} else {
			relationship = "cousin";
		}
	} else if (absGendiff === 1 && findAncestors(PersonA, PersonB).includes(PersonB)) {
		relationship = gendiff > 0 ? "child" : "parent";
	} else if (absGendiff === 1) {
		tier = "1st";
		relationship = "cousin";
	} else if (absGendiff === 2 && findAncestors(PersonA, PersonB).includes(PersonB)) {
		relationship = gendiff > 0 ? "grandchild" : "grandparent";
	} else if (absGendiff === 2) {
		tier = "2nd";
		relationship = "cousin";
	} else if (absGendiff === 3 && findAncestors(PersonA, PersonB).includes(PersonB)) {
		relationship = gendiff > 0 ? "great-grandchild" : "great-grandparent";
	} else if (absGendiff === 3) {
		tier = "3rd";
		relationship = "cousin";
	} else {
		let greats = 'great-'.repeat(absGendiff - 2);
		relationship = gendiff > 0 ? greats + "grandparents" : greats + "grandchild";
	}
	
	if (relationship === "cousin") {
		print(`${PersonA.name} is the ${tier} ${relationship} of ${PersonB.name} ${absGendiff}x removed`);
	} else {
		print(`${PersonA.name} is the ${relationship} x${absGendiff} of ${PersonB.name}`);
	}
}