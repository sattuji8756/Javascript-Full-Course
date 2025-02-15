// /////////////////Lecture 09///////////////////////////////////////////

// // kis prakar se data ko access kiya jata hai aur memory main rakha jata hai us hisab se data ke two parts hai 

// 1.Premitive 2.Non Premitive or Referencce type

// Premitive 7 type and call by value hote hai

// string boolean number null undefined  symbol bigint 




const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)//false


const bignumber=513121444456464120214132n


// //Referencetype 
// Array Object functions and baakii Premitive ho gaye

// inke andar kuch bhi datatype ho dakta hai aur isko hum variable main bhi store bhi karwa sakte hai  

// const heros=["shaktiman","naagraj","doga"]

// let myObj={
//     name:"satyendra",
//     age:22
// }

// const fun=function(){
//     console.log("hello world");
    
// }


//////////////////////////////Lecture 10///////////////////////////////////

// memory are two types 1.Stack(Premitive(copy)) 2.Heap(Non-Premitive(refence(OriginalValue)))

let MyyouTubeName="SattuBlog"
let anotherName=MyyouTubeName
anotherName="SattujiCricket"

console.log(MyyouTubeName);
console.log(anotherName);


// Object ki property ko . (Dot) se access kar sakte hai 

let userOne={
    name:"Satyendra",
    email:"satyendrakumar1037@gmail.com"
}
console.log(userOne)

let userTwo=userOne
userTwo.email="sattuji8840@gmail.com"

console.log(userOne);
console.log(userTwo);
