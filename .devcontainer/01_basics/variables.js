const accountId = 144553
let accountEmail = "preetikaralatti5@gmail.com"
var accountPassword = "12345"
accountCity ="jaipur"

let accountState; // if any value in not assign to the variable then default is will be undefined


//accountId = 2
//not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengluru"
 

console.log(accountId);

/*
Prefer not to use vae bcz of issuse in lock scope and functional scop
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);