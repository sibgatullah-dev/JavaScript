//Methods are action that can be performed on an object
//Methods are function definitions stored as property value
const person={
    firstName:"Sibagtullah",
    lastName:"Muzaddedi",
    id:5566,
    fullName: function(){
        return this.firstName + " " + this.lastName;//this. reffers to the person object!!
    }
}

console.log(person.fullName());