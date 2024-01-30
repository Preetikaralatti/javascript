const myArray = [0,1,2,3,4,5]
console.log(myArray[2]);
const myHeros = ["sakhtiman","superman"]

const myArray2 = new Array(1,2,3,4,5)
console.log(myArray2[2]);

// Array methods 

// myArray.push(6)
// myArray.push(7)
// myArray.pop()
myArray.unshift(9)
// it will add the value first
myArray.shift()
// it  will remove the unshift value

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(19));

// const newArr = myArray.join()

// console.log(myArray);
// console.log(typeof newArr);



// slice ,spice

console.log("A ",myArray);

const myn1 = myArray.slice(1,3)
// slice will give o/p like [1,2] but actual array is [0,1,2,3,4,5]
// range is not include

console.log(myn1);
console.log("B ",myArray);

const myn2 = myArray.splice(1,3)
// [1,2,3]
// range is include
console.log("c ",myArray)
console.log(myn2);