//When we need to create many objects of the same type we can use the Object Constructor Function
//It is considered good practice to name constructor functions with an upper-case first letter.

function Person(first, last,age,eye){//Object Constructor Function
    this.firstName= first;
    this.lastName =last;
    this.age=age;
    this.eyecolor=eye;
    this.nationality="Bangladeshi";//A value given to the property will be default for all the objects
};

Person.prototype.job = "Government Officer";//to add a new property to the constructor.

//Defining new objects of the same type using the Object Constructor Function.
const myFather = new Person("Md","Saifullah",64,"Black");
const myMother = new Person("Rumana","Afroj",56,"Black")

console.log("My father's name is "+ myFather.firstName+" "+myFather.lastName+" he is "+myFather.age+" years old. His eye color is "+myFather.eyecolor);
console.log("My father is "+myFather.nationality);
console.log("My father is a "+myFather.job);

console.log("My mother's name is "+ myMother.firstName+" "+myMother.lastName+" he is "+myMother.age+" years old. His eye color is "+myMother.eyecolor);
console.log("My mother is "+myMother.nationality);

const myDad= Object.values(myFather);//Just to take the values into an array 
console.log(myDad);