const array =['a','b'];
array[10]='j';
console.log(array);
console.log(array.length);//basically the length of the array will be 11 though there is nothing in between of a.b and j 
array.length=1;//we can also tell the array what it's length will be and it will show only that length of properties inside the array 
console.log(array)
