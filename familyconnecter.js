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

function Greatnessnumber(PersonA, PersonB) { //Needs to be checked over again, not sure if this is what I want or if I even need tis function
  let greatness = 0;
  let current = PersonA;

  while (current !== null && current.ancestor !== PersonB) {
    current = current.ancestor;
    greatness++;
  }

  return current === null ? -1 : greatness + 1; //Returns -1 if PersonB is not an ancestor of PersonA
}

//Check the generation difference between PersonA and PersonB, if the difference is 2, then PersonA is the grandchild of PersonB, if the difference is -1, then PersonA is the child of PersonB, if the difference is 0, then PersonA and PersonB are siblings
function GenerationDifference(PersonA, PersonB) {
  let genA = Generation(PersonA);
  let genB = Generation(PersonB);
  return gendiff = genA - genB;
}



function familyConnecter (person1, person2) {    
  if (gendiff = 0){
          print('grandparent')
  }
  if (gendiff = 0){
          print('parent')
  }
  if (gendiff = -1){
      print('child')
}
if (gendiff = 0){
    print('siblings')
}
     if (gendiff = 2){
        print('grandchild')
}

}