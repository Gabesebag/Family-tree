//Check if the current ancestor is null, if not, add 1 to the generation and check the ancestor of the current ancestor until you reach a null ancestor. Return the generation + 1 (because the first generation is 1, not 0)
function Generation(Person) {
  let generation = 0;
  let current = Person;

  while (current.ancestor !== null) {
    current = current.ancestor;
    generation++;
  }

  return generation + 1;
}

// check if PersonB is an ancestor of PersonA, and is 2 generations apart, then PersonB is the great grandparent of personA, 
// if PersonB is an ancestor of PersonA, and is 1 generation apart, then PersonB is the grandparent of personA, if PersonB 
// is an ancestor of PersonA, and is 0 generations apart, then PersonB is the parent of personA, if PersonB is an ancestor
//  of PersonA, and is -1 generations apart, then PersonB is the sibling of personA, if PersonB is an ancestor of PersonA, 
// and is -2 generations apart, then PersonB is the child of personA, if PersonB is an ancestor of PersonA, and is -3 
// generations apart, then PersonB is the grandchild of personA
function Greatnessnumber(PersonA, PersonB) {
  let greatnesscounter  = 0
  let great = 0;
  let current = PersonA;

  while (current !== null && current.ancestor !== PersonB) {
    current = current.ancestor;
    great++;
  }

  //After counting a difference of 2 generations between 2 members, everytime great goes up by 1, the greatnesscounter goes up by 1
  if (great >= 2) {
    greatnesscounter++;
  }

  return current === null ? -1 : great + 1; //Returns -1 if PersonB is not an ancestor of PersonA
}

//Check the generation difference between PersonA and PersonB, if the difference is 2, then PersonA is the grandchild of PersonB, if the difference is -1, then PersonA is the child of PersonB, if the difference is 0, then PersonA and PersonB are siblings
function GenerationDifference(PersonA, PersonB) {
  let genA = Generation(PersonA);
  let genB = Generation(PersonB);
  return gendiff = (genA - genB);
  return absgendiff = Math.abs(genA - genB);
}

//find PersonA's ancestors and check if PersonB is one of them, if so, return the list of ancestors from PersonA to PersonB, if not, Person A and B are cousins that are a #'s generations apart, and return the list of ancestors from PersonA to the common ancestor, and from PersonB to the common ancestor
function findAncestors(PersonA, PersonB) {
  let ancestors = [];
  let current = PersonA;

  while (current !== null) {
    ancestors.push(current);
    if (current === PersonB) {
      return ancestors;
    }
    current = current.ancestor;
  }
  return ancestors;
}

function getfounder(members) {
  for (let i = 0; i < members.length; i++) {
    if (members[i].ancestor === null) {
      return members[i];
    }
  }
}
    
function getchildren(parent, members) {
  let children = [];
  for (let i = 0; i < members.length; i++) {
    if (members[i].ancestor === parent) {
      children.push(members[i]);
    }
  }
  return children;
}

//check if person A is younger than person b, if so, return true, if not, return false
function isYounger(PersonA, PersonB) {
  let genA = Generation(PersonA);
  let genB = Generation(PersonB);
  return genA > genB;
}


function familyConnecter (person1, person2) {    
  if (gendiff = -2){
    print('grandparent')
  }
  if (gendiff = -1){
    print('parent')
  }
  if (gendiff = 0){
    print('sibling')
  }
  if (gendiff = 0){
    print('cousin')
  }
  if (gendiff = 1){
    print('child')
  }
  if (gendiff = 2){
    print('grandchild')
  }
  if (absgendiff >= 3){
    print("great grandparent")
  }
  if (absgendiff >= 3){
    print("great grandchild")
  }
}