const accountId = 4548
let accountEmail = "vs@vs.com"
var accountPasswword = "5856"
accountCity = "Jaipur"
let accountState

// accountId = 2 // not allowed
 
accountEmail = "vishal@google.com"
accountPasswword = "86546"
accountCity = "Bangluru"

console.log(accountId);
/* 
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPasswword,accountPasswword,accountCity,accountState]) 
