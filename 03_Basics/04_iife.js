///////////////////////LECUTRE 24//////////////////////////////////////////////

// Immediately Invoked Function Expressions (IIFE)

// Jaise function likha use turant execute karwana hai iska use hum db se connection ke liye karte hai ki jaise hi hamari application start ho uska database connection turant execute ho ho jaye

// kai bar hum kuch funtion likh rahe hai aur hum ye nahi chate ki vo function problem kare to kai bar hum function kuch declare kar rahe hai to vo global variabal se pollute ho jata hai to isko dur karne ke liye hum IIFE function ko call karte jai.

//////////////////////////////////////////////////////////

// function chai(){
//     // named normal
//     console.log(`DB CONNECTED`);
// }
// chai();

///////////////////////////////////////////////////////////////

// last  video main humne ek discussion kiya tha ki () ye paranthies laga do to automatically ek block ban jata hai aur uske andar bhi kaam kiya ja sakta hai 

// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED/ Isme ; Jarur lagana chaiye varna ye error de dega IN Case of IIFE kyunki ye invoke to ho gaya lekin isko pata nahi hahi ki isko rukna kaha par hai isiliye isko end karna problem hai`);
// })();


// ()() 
// Q: wrong IIFE =jo function Immediately  execute ho jaye 
// Q: rigth = global scope se problem hoti hai kai baar to us global scope ke pollution ko hatane ke liye IIFE ka use karte hai

//////////////////////////////////////////////////////////////////////

// IIFE with ARROW function 

// (function IIFE(){
        //Named IIFE
//     console.log("please end IIFE")
// })()

// or 

// Q: Two IIFE EK SAATH ; LAGAKAR lIHTE HAI 

( ()=>{
    // Unnamed IIFE 
    console.log("arrow function")
} )();

// OR /

// ARROw function with variable 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('AKash')
 
