const myObj = {
    name:"sibgatullah",
    age:21,
    //making an array in obj
    cars:[//making obj inside the array which is inside an obj
        {name:'ford',models:["Focus","Mustang"]},//array inside obj
        {name:"BMW",models:['320','X3','X5']},
    ]
}

console.log(myObj)

let items = '';
let model = '';
for(let i in myObj.cars){
    items += ' '+ myObj.cars[i].name;
    for(let j in myObj.cars[i].models){
        model += ' '+ myObj.cars[i].models[j];
    }
}

console.log(items);
console.log(model);