function sayMyName(){
    console.log("p");
    console.log("r");
    console.log("e");
    console.log("e");
    console.log("t");
    console.log("i");
}
// sayMyName()

function add2Number(n1,n2){
    console.log(n1+n2);
}

// add2Number(2,3)
// add2Number(3,null)
// add2Number(3,"2")

function add(a,b){
    const res=a+b;
    return res
}
// console.log(add(2,3));

function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("Preeti"));

function login(username){
if(username == undefined){
    console.log("please enter a username")
    return 
}
return `${username} just logged in`
}
// console.log(login());

function login(username="sam"){
    if(!username){
        console.log("please enter a username")
        return 
    }
    return `${username} just logged in`
    }
    //  console.log(login("preeti"));




   function cal(n1){
    return n1
   } 
//    console.log(cal(200));


// ... used to spared 
// rest operator
function cal(...n1){
    return n1
   } 
//    console.log(cal(200,300,400,500));



   function cal1(val1,val2,...n1){
    return n1
   } 
// console.log(cal1(200,300,400,500));

//objects 

const user = {
username : "preeti",
price: 190
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handelObject(user)
handelObject({
    username: "sam",
    price: 399
})


// arrays

const myArray = [100,200,300,400]

function return2value(getArray){
    return getArray[1]
}
// console.log(return2value(myArray));

console.log(return2value([20,40,60,80]));