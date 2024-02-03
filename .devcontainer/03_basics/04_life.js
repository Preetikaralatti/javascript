// Immediately Invoked Function Expressions (ITFE)

function chai(){
    console.log(`DO CONNECTED`);
}
// chai()

// sometimes error will occure in global scop , to remove this error we can use IIFE

(function chai(){
    // named IIFE
    console.log(`DO CONNECTED`);
})();


// If you want to execute 2 IIFE then must use ; after 1 IIFE



( () => {
    console.log(`DB CONNECTED TWO`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')

