const user = {
    username : 'hitesh',
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website `)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// this keyword not work in functions but it will work in objects

// function chai(){
//     console.log(this);
// }
// chai()


// Arrow function

const chai = () =>{
    let username = "hitesh"
    console.log(this.username);
    console.log(this);
}
// chai()

// basic arrow syntax () => {}

const addTwo = (num1,num2) => {
    return num1+num2
}
// console.log(addTwo(4,5));

// explicit return 


// const addTwo1 = (num1,num2) => num1+num2
// const addTwo1 = (num1,num2) => (num1+num2)

const add = (num1,num2) => ({username: "hitesh"})

console.log(add(3,4))
