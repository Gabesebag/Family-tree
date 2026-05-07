# family-tree-planner

## Algorithm-thinking

- Generation
- How to relate between two members
- How great an ancestor is
- how many times a cousin is removed

### Order of finding out the relation between family members
Check the difference of generation
    - if they're in the same generation, check who their parent is
    - if not, then refer to person1 to another family member, and find the distance between them based on the generation difference

### Possible code to implament

let person2  
let person1  
let person2gen = going back generations until the common ancestor and recording the total number of people it had to go back from  
let person1gen = going back generations until the common ancestor and recording the total number of people it had to go back from   

let grandparent = 2
let parent = 1  
let sibling = 0  
let cousin = 0  
let child = -1  
let grandchild = -2  
  
let gendiff
let removed = the amount of generations away you are from a cousin  
let generation = the generation of a person  
  
if (gendiff = #){  
    let familychecker = family#  
}  

#### basic family members
  - Finding out what generation person 1 is  
if (){    
      
}  
  
if (gendiff = )  
  
  - Finding the sibling or cousin  
if (gendiff = 0){  
    if (person1 && person2 have the same parent)  
    person1 is the sibling of person2   
} else {  
    person1 is the cousin of person2  
}  

 - Finding the child of Person 2
if (gendiff = -1){  
    person1 is the child of person2  
}  


 - Finding out if they are both the same person, and if not then let the code run and display it  
if (person1gen === person1gen){  
    pick a different person for person2  
} else {  
    display their names and relation to each other  
}  

#### Complicated family members
  
  - Finding out 
if (){  
      
}  

  - Finding out how many times a cousin of a younger generation is removed (generations after Person 2) when paired with a cousin


## original - gen 1
Adam

## 2nd gen
Cain
Abel

## 3rd gen
nimrod  
alexzandar  
peter  
lucas  

## 4th gen
Seth
Tobias  
Moses   
Gideon  
Enoch  
Asher  
Isaac  
Silas  

## 5th generation

