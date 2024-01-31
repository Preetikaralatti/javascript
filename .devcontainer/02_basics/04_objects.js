// Singleton object
// const tinderUser=new Object()
// or
// Non singleton object
const tinderUser = {}
tinderUser.id="hitesh"
tinderUser.name="sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.email);
// console.log(regularUser.fullname);

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// if u want to combine then use below syntax
// const obj3 = {obj1,obj2}
// const obj3={...obj1,..obj2}
// spread the values
obj3 = Object.assign({},obj1,obj2)
console.log(obj3);




// Arrays object

const arr=[
    {
        id:1,
        name:"preeti"
    },
    {
        id:2,
        name:"Ashwini"
    },
    {
        id:3,
        name:"Sahana"
    }
]
arr[1].id

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));