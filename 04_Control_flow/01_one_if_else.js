/////////////////////////LECTURE 26 CONTROL FLOW/////////////////////////

// if
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute");

//////////////////////////////////////////////////////////////////////////////////////////////////////

// COmparison operator  
// <, >, <=, >=, ==, !=, ===, !==

////////////////////////////////////////////////////////////////////////////////

// var ka scope hai completely global 

const score = 200

if (score > 100) {
    var power = "fly"
    // let power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);//power is not defined

//////////////////////////////////////////////////////////////////////////////////////////////////////

const scor = 200

if (scor > 100) {
    let power = "fly"
    console.log(`User power in ht let: ${power}`);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

 
 
const balance = 1000

// this implicite scope aur ye ek hi line main execute hota hai lekin aap , lagakar aur semi colon ; se end kar sakte hai to multiple line main bhi aa jayega but this is unreadable code

if (balance > 500) console.log("test"),console.log("test2"),
console.log("hello how are you naince");

// MULTIPLE CONS=DITIONS 

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}

////////////////////////////////////////////////////////////////////////////////////////////////////////

// USES IN REAL LIFE 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// AND 
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

// OR 
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}