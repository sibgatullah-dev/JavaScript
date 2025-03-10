//The Object.defineProperties() method adds or changes many object properties.

//Define an object
const fruit = {
    name:"mango",
    taste:"sweet"
};
//add more properties with Object.defienProperties method
Object.defineProperties(fruit,{color:{value:"dark orange"},size:{value:"medium"}});

console.log(fruit);




const fruits={
    f1:'banana',
    f2:'mango',
    f3:'apple'
};
Object.defineProperties(fruits,{f4:{value:"lichi"},f5:{value:"water mallon"},f6:{value:"berry"}});
console.log(fruits);