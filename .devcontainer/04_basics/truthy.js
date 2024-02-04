// truethy values

const userEmail = "h@hitesh.ai"

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("don't have user email");
}

// If u have value then it will truethy value 

const userEmail1 =""
if(userEmail1){
    console.log("Got user email");
}
else{
    console.log("don't have user email");
}


// falsy values

//  false , 0, -0, BigInt on, "", null ,undefined , NaN

// truthy valuse

// "0", 'false' , " ", [] ,{} ,function(){}

if (userEmail1.length == 0){
    // console.log("Array is empty");
}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
console.log("object is empty");
}


// Nulish Coalescing Operatoor (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80? console.log("less than 80") : console.log("more than 80");
