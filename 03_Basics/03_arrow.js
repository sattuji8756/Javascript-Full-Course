///////////////////////LECTURE 23 THIS AND ARROW FUNCTION/////////////////////////////////////////////

// THIS FUNCTION CURRENT CONTEXT KE BAARE MAIN BATATA HAI 

// const user = {
//     username: "Satyendra",
//     price: 999,

//     welcomeMessage: function() {
//         //yaha par value hardcore nahi hui hai jo bhi current context hai valhi value hogi
//         console.log(`${this.username} , welcome to website`);
//     }

// }

// user.welcomeMessage()
// //AB YAHA PAR CURRENT CONTEXT CHANGE HO GAYA CONTEXT=VALUE
// user.username = "sam"
// user.welcomeMessage()



///////////////////////////////////////////////////////

// const user = {
//     username: "Satyendra",
//     price: 999,

//     welcomeMessage: function() {
//         //yaha par value hardcore nahi hui hai jo bhi current context hai valhi value hogi
//         console.log(`${this.username} , welcome to website`);
//         // ye this current context batayega 
//         console.log(this)
//     }
    

// }

// user.welcomeMessage()
// //AB YAHA PAR CURRENT CONTEXT CHANGE HO GAYA CONTEXT=VALUE
// user.username = "sam"
// user.welcomeMessage()

// // ye this bhi current context batayega lekin ye global ka batayega isiliye ye {empty} context dega kyunki yaha par koi current context nahi hai 

// //Q: lekin yahi this agar browser main print karenge to window dikhayi dega kyunki browser ke andar jab ye run karta hai to sabsse jyada global object window object hai tabhi to aap window ke saare event capture kar paate hai ex: click, form submit ho gaya

// console.log(this);


////////////////////////////////////////////////////////


// ye jo hamara context hai aise function ke andar kaam nahi kar pata ye sirf object ke andar hi kaam karta hai 


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


// Normal function  

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()


// Arrow function 

// arrow function main aap this use nahi l=kar sakte lekin regular function main aap kar sakte hai 

// const chai =  () => {
//     let username = "satyendra kuamr"
//     console.log(this.username);
//     console.log(this);
// }
// chai()


///////////////////////////////////////////////////////////

// Pure arrow funcion 

// this is explicite return jab aap retrurn keyword use karte hai 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicite return (isme { } use nanhi kiya jata hai) iska matlab hai ki mujhe ye return likhne ki jarurat nahi hai main maan leta hun kyunki ye ek hi line ka statement hai 

// agar {} wrap kiya to return likhna padega aur agar () isme wrap kiya to ye return nahi likhna padega 

// OR

// const addTwo = (num1, num2) =>  num1 + num2

// OR 

// const addTwo = (num1, num2) => ( num1 + num2 )

// return object 

const addTwo = (num1, num2) => ({username: "Satyendra kumar"})

// const addTwo = (num1, num2) => {username: "Satyendra kumar"}//you can write object without brackets//udefined 


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()