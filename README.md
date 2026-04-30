# family-tree-planner

## Algorithm-thinking

### Order of finding out the relation between family members
Check the difference of generation
    - if they're in the same generation, check who their parent is
    - if not, then refer to person1 to another family member, and find the distance between them based on the generation difference

### Possible code to implament

let person2
let person1
let person2gen
let person1gen
let grandparent = 2
let parent = 1
let sibling = 0
let cousin = 0
let child = -1

let gendiff = person1gen - person2gen

if (gendiff = 0){
    if (person1 && person2 have the same parent)
    person1 is person2 sibling
} else {
    person1 is person cousin
}

if (person1gen === person1gen){

} else {

}


if (gendiff = #){
    let familychecker = family#
}



## original
Adam

## 1st gen
Cain
Abel

## 2nd gen
nimrod
alexzandar
peter
lucas

## 3rd gen