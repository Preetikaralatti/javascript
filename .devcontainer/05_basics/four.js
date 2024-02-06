const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

// for in loop for objects
for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop for array

const programming = ["js","rb","py","java","cpp"]
for(const key in programming){
    // console.log(programming[key]);
}



// for in loop  will not work for maps 

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United states of America")
// map.set('Fr',"France")
// map.set('IN',"India")

// for (const key in map) {
//    console.log(key);
// }