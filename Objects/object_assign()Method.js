// Target Object
const person1={
    firstName:"jhone",
    lastName:"smith",
    age:50,
    eyecolor:"blue"
};

// Sorce Object
const person2={
    firstName:"anne",
    lastName:"smith",
};

//Assign sorce object to target object.
Object.assign(person1,person2);


//printing the modified target object
console.log(person1);

//when Object.entries(peeson1) is called, it converts the object into an array of key-value pairs!!
Object.entries(person1);

//printing the key-value array properties.
console.log(person1);