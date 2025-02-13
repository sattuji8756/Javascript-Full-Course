//////////////////////////////////////////////

// let score= '33' //number
// let score= '33sda'//NaN
// let score= null //0
// let score= undefined //NaN
// let score=true //1
// let score=false; //0
let score="Satyendra" //NaN

console.log(typeof score);//both are same
console.log(typeof(score));

// Jitne bhi datatype hote hai unko Capital letter se start kiya jata hai ex Number String

// Aur ye chiz kisi bhi datatype ko number main convert kar sakta hai ex 34adsa Null undefined lekin jab value print karenge to alag alag ayegi
let valueInNumber=Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);

///////////////////////////////////////////////////////////

// const isLoggedIn=1 //true
// const isLoggedIn=0 //false
// const isLoggedIn="satyendra" //true
// const isLoggedIn="" //false
const isLoggedIn=232 //true
const booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)



///////////////////////////////////////////////////////////

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)