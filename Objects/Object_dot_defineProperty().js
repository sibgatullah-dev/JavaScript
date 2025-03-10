// The Object.defineProperty() method adds or changes only one property

//Define the object
const person ={
    name:"jhon",
    age:23,
    language:"EN"
}
//add one more property in the object
Object.defineProperty(person, "year",{value:2002});

console.log(person);