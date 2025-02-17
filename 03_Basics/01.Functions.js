// ////////////////////////LECTURE 19////////////////////////////////////////

// function sayMyName() {
//     console.log("S");
//     console.log("A");
//     console.log("T");
//     console.log("Y");
//     console.log("E");
//     console.log("N");
//     console.log("D");
//     console.log("R");
//     console.log("A");
// }

// // sayMyName //THIS IS FUNCTION REFERENCE
// sayMyName() //THIS IS FUNCTION EXECUTION

// function addTwoNumbers(number1, number2) {
//     // number1+number2//this is add but not print  
//     console.log(number1 + number2);
// }
// addTwoNumbers(5, 6)

// // BUT WHEN NUMBER IS NOT GIVEN 
// addTwoNumbers(5, "6")
// addTwoNumbers("5", "6")
// addTwoNumbers("5", 6)
// addTwoNumbers("A", 6)
// addTwoNumbers("A", null)
// addTwoNumbers(5, null)


// /////////////////////////////////////////////////


// function addTwoNum(number1, number2) {

//     console.log(number1 + number2);
// }

// addTwoNum(3, 5)//8
// const result = addTwoNum(3, 5)//variable main  Store ho jayega aur 8 print kar dega kyunki function call hua hai

// console.log(result)// lekin is variable main  value to abhi tak aayi hi nahi undefind

// /////////////////////////////////////////////


// function addTwo(num1, num2) {
//     let result=num1+num2
//     console.log("Akash")//this is print
//     return result
//     console.log("satyendra")//this is not execute
// }

// const resu =addTwo(5,5)
// console.log("Result", result)//undefined
// console.log("Result", resu)


// ////////////////////////////////////////////

// function addTwo(num1, num2) {
// // DIRECT RETURN BHI KAR SAKTE HAI 
//     return num1+num2
// // WHEN YOU WRITTERN THEN YOU CAN STORE VALUE IN VARIABLE OTHER WISE NOT 
// }

// const res =addTwo(4,9)
// console.log("Result", res)

// //////////////////////////////////////////


// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// loginUserMessage("Satyenrda")//yaha par value to return ho gayi hai par print nahi hui hai aur na hi variable main store hui hai
 
// console.log(loginUserMessage("Satyenrda"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())//undefined

///////////////////////////////////////////


// function loginUser(username){
//     if(username===undefined){
//         console.log("PLease enter a username");
//         // return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUser("Naincy"))
// console.log(loginUser(""))
// console.log(loginUser())//undefined


// //////////////////////////////////////////////

// function login(username){
//     if(username===undefined){
//         console.log("PLease enter a username");
//         return
//     }
//     else{
//         return username
//     }
//     // return `${username} just logged in`
// }
// console.log(login("bbbbbb"))
// console.log(login(""))
// console.log(login())//undefined


/////////////////////////////////////////////


// IN JAVASCRICT "", AND  undefined IS FLASE VALUE

// function loginUser(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUser())//yaha par default value jayegi

// console.log(loginUser("Sattu"))
// // lekin jab hum empty value denge tab hum if wali conditon main aayenge
// console.log(loginUser(""))






/////////////////////LECTURE 20/////////////////////



// JAB HUME PATA NA HO KITNA DATA AANE WALA HAI 
// TAB EX JAISE ADD TO CART 

// // (...) THIS IS REST AND SPREAD BASED ON USES
// function calculateCartPrice(...num1){
//     // THIS IS REST OPERATOR MEANS FUNCTION MAIN MULTIPLE VALUE KAISE PASS HOTI HAI 
//     return num1
// } 

// console.log(calculateCartPrice(200,300,400,500,600))

// //////////////////////////////////////////////////////

// function calculateCart(val1, val2, ...num1){
//     return num1
// } 
// // yaha par val1=200 n val2=300
// console.log(calculateCart(200,300,400,500,600))


////////////////////////////////////////////////////

// PAAS Object IN A Function

const user = {
    username: "SATYENDRA",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)//PASS OBJECT COMPULSORY

// OR YOU CAN PASS OBJECT DIRECTLY 

handleObject({
    username: "sam",
    price: 399
})

// YOU CAN PASS ARRAY 


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

// OR YOU CAN PASS ARRAY DIRECTLY 
console.log(returnSecondValue([200, 4004, 500, 1000]));   