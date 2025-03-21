const fruits = ["Banana", "Orange", "Apple"];
console.log(typeof fruits);//The typeof operator returns object because a JavaScript array is an object. 

//there are 2 solution to this 
//Solution1
//To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
const fruit = ["Banana", "Orange", "Apple"];
console.log(Array.isArray(fruit));//The answer will be true as we asked if its array or not