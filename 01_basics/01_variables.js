const accountId=1456
let accountEmail="Ananya@gmail.com"
var accountPassword="12"
/* use of var not preffered due to block scope and functional scope issue*/
accountCity="Jaipur"  //not a good practice
let accountState; 
//accountId=9 //not allowed
accountEmail="Ag@gmail.com"
accountPassword="*(21"
accountCity="Delhi"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountState,accountCity])
