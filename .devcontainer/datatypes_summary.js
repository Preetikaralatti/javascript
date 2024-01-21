// Primitive datatypes

//6 types: String ,Number ,Boolean,null, undefined, Symbol,BigInt

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp =null
let userEmail;


const id= Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber= 3457987604788470974n

//Reference (Non primitive)

//arrays ,objects, Funcion

//arrays
const heros = ["shaktiman", "naagraj" , "dog"];

// object
let myObj = {
    name: "preeti",
    age: 22,
}

// function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);

// to study by link below
// http://https//262.ecma-international.org/5.1/#sec-11.4.3


//*************************************

// stack memory (primitive) , heap memory (Non - primitive)


let myYoutubename = "hiteshchoudharyditcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

// object : values store in heap memory

let userOne= {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo= userOne
//  both two having the same reference

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);