# family-tree-planner

## Algorithm-thinking

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
Seth
