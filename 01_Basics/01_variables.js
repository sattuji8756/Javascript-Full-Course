const accountId=45441
let accountEmail="sattju8839@gmail.com"

/*
Prefor not use var 
Because of issue in block scope and functional scope 
*/
var accountPassword="sattuji8830"
accountCity="Sitapur"

//if we not assign a value to a variable then
let accountState

// accountId=8707410 // it is not allowed
accountEmail="akn94q543#@gmail.com"
accountPassword="akasdh4545"

//a variable can also declared but it is not right way
accountCity="Lucknow"

console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)

console.log(accountId,accountEmail,accountPassword,accountCity)

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])