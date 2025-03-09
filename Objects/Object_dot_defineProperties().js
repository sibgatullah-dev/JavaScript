//The Object.defineProperties() method adds or changes object properties.

//Define an object
const fruit = {
    name:"mango",
    taste:"sweet"
};
//add more properties with Object.defienProperties method
Object.defineProperties(fruit,{color:{value:"dark orange"},size:{value:"medium"}});

console.log(fruit);