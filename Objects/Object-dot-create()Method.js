//Create an object
const person ={
    name:"Jhon",
    age:30,
    car:"BMW",
}

//Create a new object
const man = Object.create(person);
man.name='Peter';

console.log(person.name+ " and " +man.name);