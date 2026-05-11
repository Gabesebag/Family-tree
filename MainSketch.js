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

	let Eli = new Person("Eli", Seth);
	let Hannah = new Person("Hannah", Seth);
	let Benjamin = new Person("Benjamin", Enoch);
	let Rachel = new Person("Rachel", Enoch);
	let Joshua = new Person("Joshua", Tobias);
	let Ruth = new Person("Ruth", Tobias);
	let Samuel = new Person("Samuel", Asher);
	let Naomi = new Person("Naomi", Asher);
	let David = new Person("David", Moses);
	let Abigail = new Person("Abigail", Moses);
	let Jonathan = new Person("Jonathan", Silas);
	let Miriam = new Person("Miriam", Isaac);

	Household = [Adam, Abel, Cain, Nimrod, Peter, alexzandar, Lucas, Seth, Enoch, Tobias, Asher, Moses, Silas, Isaac, Gideon, Eli, Hannah, Benjamin, Rachel, Joshua, Ruth, Samuel, Naomi, David, Abigail, Jonathan, Miriam];
	PersonA = random(Household);
	PersonB = random(Household);

	// PersonA  = Peter;
	// PersonB = Gideon;

	// PersonA = Lucas;
	// PersonB = Gideon;

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
	} if (absGendiff === 1 && (findAncestors(PersonA, PersonB).includes(PersonB) || findAncestors(PersonB, PersonA).includes(PersonA))) {
		relationship = gendiff > 0 ? "child" : "parent";
	} else if (absGendiff === 1) {
		tier = "1st";
		relationship = "cousin";
	} else if (absGendiff === 2 && (findAncestors(PersonA, PersonB).includes(PersonB) || findAncestors(PersonB, PersonA).includes(PersonA))) {
		relationship = gendiff > 0 ? "grandchild" : "grandparent";
	} else if (absGendiff === 2) {
		tier = "2nd";
		relationship = "cousin";
	} else if (absGendiff === 3 && (findAncestors(PersonA, PersonB).includes(PersonB) || findAncestors(PersonB, PersonA).includes(PersonA))) {
		relationship = gendiff > 0 ? "great-grandchild" : "great-grandparent";
	} else if (absGendiff === 3) {
		tier = "3rd";
		relationship = "cousin";
	} else if (absGendiff === 4 && (findAncestors(PersonA, PersonB).includes(PersonB) || findAncestors(PersonB, PersonA).includes(PersonA))) {
		relationship = gendiff > 0 ? "great-great-grandchild" : "great-great-grandparent";
	} else if (absGendiff === 4) {
		tier = "4th";
		relationship = "cousin";
	} else if (absGendiff === 4 && (findAncestors(PersonA, PersonB).includes(PersonB) || findAncestors(PersonB, PersonA).includes(PersonA))) {
		relationship = gendiff > 0 ? "great-great-grandchild" : "great-great-grandparent";
	} else if (absGendiff === 4) {
		tier = "4th";
		relationship = "cousin";
	} else if (absGendiff >= 5 && (findAncestors(PersonA, PersonB).includes(PersonB) || findAncestors(PersonB, PersonA).includes(PersonA))) {
		let greats = 'great-'.repeat(absGendiff - 2);
		relationship = gendiff > 0 ? greats + "grandparents" : greats + "grandchild";
	}
	
	if (relationship === "cousin") {
		print(`${PersonA.name} is the ${tier} ${relationship} of ${PersonB.name} ${absGendiff}x removed`);
	} else {
		print(`${PersonA.name} is the ${relationship} x${absGendiff} of ${PersonB.name}`);
	}
}