const fruit = ['apple','banana','mango','orange','lichi'];
let flen = fruit.length
let numb = '';//numb is a string that we are modifying within the loop. since we are changing the value of numb by concatenating new string to it we used let instade of const.
for(let i = 0; i < flen; i++ ){
    numb +=' ' +fruit[i]
}
console.log(numb);
//making a new array from the old with for loop
const newArray =[];
for(let i = 0; i < flen; i++){
    newArray.push(fruit[i])
}
console.log(newArray);

//foreach loop
let foreachl = '';
fruit.forEach(item => {
    foreachl += ' '+ item
});
console.log(foreachl);
//making a new array using foreach loop
const Newarray=[];
fruit.forEach(item =>[
    Newarray.push(item)
]);
console.log(Newarray);