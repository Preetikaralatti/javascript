//singlton
//object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "hitesh",
    "full name":"Hitesh Choudary",
    [mySym]: "mykey1",
    // if u r using symbols u should use []
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]
}
console.log(JsUser.email);
// or
console.log(JsUser["email"]);
// console.log(JsUser.full name);
// it will show error that's why use []
// console.log(JsUser["full name"]);
// console.log( typeof JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

