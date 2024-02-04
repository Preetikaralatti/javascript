// if

const isUserloggedIn = true

if(isUserloggedIn){
// console.log("True");
}

if(2 == "2"){
    // console.log("executed");
}

// comparison operator
// <,>,<=,>=,== ,!=,===,!==


// if-else

const temprature = 41

if(temprature === 40){
    // console.log("less than 50");
}
else{
    // console.log("Temperature is grater than 50");
}


// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }




const balance = 1000
// if(balance > 500) console.log("test"),console.log("test2");

if( balance < 500){
    // console.log("less than 500");
}
else if(balance < 750){
    // console.log("less than 750");
}
else if(balance < 900){
    // console.log("less than 750");
}
else 
{
    // console.log("less than 1200");
}


const userLoggedIn = true
const debitCard =true

// when both the condition true then only && will execute if any one will be false then it will not execute the statement

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
} 

//If any one will be true then || will  execute the statement

const loggedInFromEmail = true
const loggedInFromGoogle =false

if(loggedInFromEmail || loggedInFromGoogle){
console.log("User logged in");
}
