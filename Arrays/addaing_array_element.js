const fruits = ["Banana", "Orange", "Apple"];
// lemon will be added in the array as element
fruits.push('lemon');
console.log(fruits);
console.log(fruits.length);

//Adding elements with high indexes can create undefined "holes" in an array:
const fruit = ["Banana", "Orange", "Apple"];
fruit[6]= "Lemon";
console.log(fruit);//if you turn the array into flat string you will see undefined values as holes!!
