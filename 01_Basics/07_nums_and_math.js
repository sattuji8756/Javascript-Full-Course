///////////////////////Lecture 12///////////////////////

const score=100
console.log(score);

const balance=new Number(100)
console.log(balance)


console.log(balance.toString().length)
console.log(balance.toFixed(2))
console.log(balance.toFixed(3))

const otherNumber=123.8966
console.log(otherNumber.toPrecision(2))
console.log(otherNumber.toPrecision(3))


const hundred = 1000000
console.log(hundred.toLocaleString() ); //according to us standard
console.log(hundred.toLocaleString('en-IN') ); //according to indian standard


/////////////////Maths////////////////////////////////

// console.log(Math);
// console.log(Math.abs(4))
// console.log(Math.abs(+4))
// console.log(Math.abs(-4))  //ye sirf -value ko hi positive main convert karega

// console.log(Math.round(25.87))
// console.log(Math.round(25.45)) //ye round value deta hai
// console.log(Math.ceil(2.01)) 
// console.log(Math.floor(2.99))
// console.log(Math.min(12,245,4,6,6,8,2))
// console.log(Math.max(12,245,4,6,6,8,2))

// Most important value 
// this value is always give value b/w 1-0

console.log(Math.random()) 
console.log(Math.random()*10) 
console.log(Math.random()*10+1) //avoid 0 value
console.log((Math.random()*10)+1) //avoid 0 value
console.log(Math.floor(Math.random()*10)+1)

const min =10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);
