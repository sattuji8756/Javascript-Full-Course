/////////////////////////lECTURE 21/////////////////////

// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


////////////////////////////////////////////////////////

// Now udestand Scope


// if (true) {//yaha par true likh de to main iske andar jaunga hi jaunga
//     let a = 10//ye access nahi hoga kyunki ye scope ke andar hai if ke
//     const b = 20//ye access nahi hoga kyunki ye scope ke andar hai if ke
//     var c= 30//ye access  ho  jayega ye scope ke andar hai if ke lekin fir bhi leak kar jayega isiliye var ka use nahi karte hai
    
// }



// // console.log(a);
// // console.log(b);
// console.log(c);//30 this is problem kyunki ye 30 bahar aana hi nahi chaiye tha


//////////////////////////////////////////////////////////

// let second programmer 
// // this is global scope 
// var c= 300

// // this is block scope 
// if (true) {
//     let a = 10
//     const b = 20
//     var c= 30//ye access  ho  jayega ye scope ke andar hai if ke lekin fir bhi leak kar jayega isiliye var ka use nahi karte hai aap isme var likhioye ya nahi lihiye problem same rahegi
//     d=40
    
// }



// // console.log(a);
// // console.log(b);
// console.log(c);//30 
// console.log(d);//40 

////////////////////////////////////////////////////////////

// // this is global scope 
// let a= 300

// // this is block scope 
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("inner if :",a);
    
    
// }



// console.log(a); 
// // console.log(b);

// Q:Brower inverionmenwt jo scope hai aur jo node inverionmenwt main scope hai vo alag hai 


//////////////////////////////////////////////////////////////lecture 22/////////////////////////

// Q: What is closures  
// function ke andar ka function bahar ke vairaable ko access kar paata hai 


// this is nested scope

// function one(){
//     const username = "sattu"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website); //out of scope

//      two()

// }

// one()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SAme concept in COnditions 
  
// if (true) {  
//     const username = "Satyendra kumar"
//     if (username === "Satyendra kumar") {
//         const website = " youtube"
//         console.log(username + website);
//     }
//     // console.log(website);//out of scope
// }

// // console.log(username);  //out of scope


/////////////////////////////////////////////////////

// // ++++++++++++++++++ interesting ++++++++++++++++++

// yaha par access kar lega kyunki ye variable main declare nahi hua hai 
console.log(addone(5))


// ye bhi function hai 
function addone(num){
    return num + 1
}

// addone(6)

// yaha par access nahi kar payega kyunki ye variable main declare hua hai 
addTwo(5)

// ye bhi function hai 
const addTwo = function(num){
    return num + 2
}

// addTwo(5)
