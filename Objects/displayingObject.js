const cars={
    car1:'Toyota',
    car2:"Ford",
    car3:"BMW",
    car4:"Honda",
    car5:"Tata"
};

//Displaying the object properties by name 
console.log(cars.car1+" "+cars.car2+" "+cars.car3+" "+cars.car4+" "+cars.car5);

//Displaying Objects in a loop
let text =" ";
for(let x in cars){
    text += cars[x]+" ";
}
console.log(text);

//Displaying Objects using Object.values()
const carArray = Object.values(cars);
console.log(carArray);

//Displaying the Object using Object.entries()
let entry ="";
for(let[index,name] of Object.entries(cars)){
    entry += index + ":" +name+ " ";
};
console.log(entry);

//Displaying Object using JSON.stringify()
console.log(JSON.stringify(cars));