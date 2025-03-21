const fruits = ["Banana", "Orange", "Apple"];
console.log(typeof fruits);//The typeof operator returns object because a JavaScript array is an object. 

//there are 2 solution to this 
//Solution1
//To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray()
const fruit = ["Banana", "Orange", "Apple"];
console.log(Array.isArray(fruit));//The answer will be true as we asked if its array or not

//Solution2
//The instanceof operator returns true if an object is created by a given constructor:
const Fruit = ["Banana", "Orange", "Apple"];
console.log(Fruit instanceof Array);//The answer will be tru as we are claiming that the type of Fruit is array . If it wasn't an array then the answer would be false