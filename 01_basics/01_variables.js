const accountId = 101;
let accountEmail = "yash@amazon.com"
var accountPassword = "98765"
accountCity = "Nagpur"
let accountState;

// accountId = 2
// console.log(accountId)   Not possible to change value of a const variable

accountEmail = "kirnapure@tcs.com"
accountPassword = "123456"
accountCity = "Pune"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* Prefer not to use var
because of issue in block scope and functional scope */


