function familyConnecter (person1, person2) {
    let person1gen = person1.generation
    let person2gen = person2.generation

    let gendiff = person1gen - person2gen



    
     if (gendiff = 2){
        println("Person 1 is the grandchild of Person 2")
}
    if (gendiff = -1){
        println("Person 1 is the child of Person 2")
}

    if (gendiff = 0){
        println("Person 1 and Person 2 are siblings")
}
}