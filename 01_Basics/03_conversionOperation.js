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


/***************Operations********************************************* */
////////////////////// Lecture 07 /////////////////////////////////////////

let value = 3
const negativeValue = -value
console.log(negativeValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 ** 3);
console.log(2 % 3);
console.log(2 ^ 8);// tjis operation is plus the value


let str1 = "hello"
let str2 = "Satyendra"
console.log(str1 + str2)
console.log(str1 - str2)//NaN



console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("4" + "3");  //43
console.log("1" + 2 + 3);//112
console.log(1 + 2 + "3"); //33

console.log(3 + 4 * 5 % 3);  //not recommended
console.log((3 + 4 )* 5 % 3);  //recommended

console.log(+true); //1
console.log(+"");//0

let num1, num2, num3//not readable
num1=num2=num3=2+3

console.log(num1)  //5
console.log(num2) //5
console.log(num3) //5


let gameCounter=100
// ++gameCounter  //prefix
gameCounter++  //postfix
console.log(gameCounter);
