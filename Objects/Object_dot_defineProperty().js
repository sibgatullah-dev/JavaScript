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


//The Object.defineProperty() method lets us change object's meta data.
const man={
    name:"sibgatullah",
    age:21,
    language:"Na",
}

Object.defineProperty(man,"language",{//meta data
    value:"English",
    writable:true,
    enumerable:true,//enumerable means if the property is abale to be computed , in this case if the property would log. "If the value is false then the property won't appear in log"
    configurable:true,
})

//enumate properties
let text="";
for(let x in man){
    text += person[x]+" ";
}
console.log(text);


//The Object.difienProperty( ) method lets us add getter and setter--
