 //  #PRIMITIVE  (apko real data ki copy banakar di jayegi) call by value

//  7 Types: String , Number , Boolean , null(empty) , undefined , Symbol , BigInt

const score = 100

const value = 100.3

const isLoggedIn = false

const temp = null //(empty)

let userEmail; //undefined


const id  = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); //false

const bigNum = 509349805798



//  # REFRENCE (NON PRIMITIVE) 

//Arrays,Objects,Functions

const heros = ["shaktiman","Nagrj"]
 let myObject={
    name: "hitesh" ,
    age: 22,
}

const myFunction = function(){
    console.log("hello aman");
}

console.log(typeof temp); //object

// uundefined => undefined 
// symbol => symbol