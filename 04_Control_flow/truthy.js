/////////////////////////LECTURE 26 CONTROL FLOW/////////////////////////

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN
// INKE ALAVA JO BHI HAI TRUTHY VALUES HAI 

//truthy values
// "0", 'false', " ", [], {}, function(){}


////////////////////////////////////////////////////////////////////////////////////////////////////////

const userEmailE = []

// HOW TO DETECT OBJECT AND ARRAY VALUE EMPTY 


if (userEmailE.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

/////////////////////////////////////////////////////////////////////////////////////////

// Nullish Coalescing Operator (??): null AND  undefined
// THIS CAN PICK FIRST VALUE (BUT NULL AND UNDEFINED NOT )


let val1;
val1 = 5 ?? 10
// val1 = null ?? 11
// val1 = undefined ?? 15
// val1 = null ?? 12 ?? 20 
// val1 = null ?? null ?? 34 ?? 20 

console.log(val1);


///////////////////////////////////////////////////////////////

// Terniary Operator/ BOTH ARE DIFFERENT NULLISH AND TERNARY

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")