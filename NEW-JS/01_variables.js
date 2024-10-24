const accountId = 12345
let accountEmail = "sahilgupta0@outlook.com"
var accountPassword = "123456"
accountCity = "jaipur"
let accountState;

// accountId = 2
accountEmail = "nonono"
accountPassword = "212121"
accountCity = "hyderabad"

console.log(accountId);

/*
Don't use var ever because of issue  in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
