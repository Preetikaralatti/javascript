let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());

console.log(typeof mydate);  
// date is an object in javascript

// let myCreateDate = new Date(2023 ,1,23)
// console.log( myCreateDate.toDateString());

// let myCreateDate1 = new Date(2023,0,23,5,3);
// console.log( myCreateDate.toLocaleString());

// let myCreateDate1 = new Date("2023-01-14");
let myCreateDate1 = new Date("01-17-2024");
// console.log( myCreateDate1.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// it will the answer in miliseconds

// console.log( myCreateDate1.getTime());

// console.log(Date.now()/1000);
// it will give ans in seconds

// console.log(Math.floor(Date.now()/1000));
// it will give ans with roundup


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth());

newDate.toLocalString('default',{
    weekday: "long",
})

