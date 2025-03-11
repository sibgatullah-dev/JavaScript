//Object methods are action that can be performed on an object. A method is a function defnition stored as a property value(key:value)

const person= {
    firstName:"Sibgatullah",
    age:21,
    lastName:"Muzaddedi",
    fullname: function(){
        return (this.firstName+" "+this.lastName).toUpperCase();//.toUpperCase method will convert the text to upper case.
    }
}
console.log(person.fullname());