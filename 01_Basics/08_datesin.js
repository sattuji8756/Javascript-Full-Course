/////////////Lecture 13//////////////////

// const myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate)


// let myCreateDate=new Date(2025,0,14)
// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());


// let myate=new Date(2025,0,14,5,30)
// let myate=new Date("2023-01-14")
// let myate=new Date("11-01-2025")
// let myate=new Date(2025,0,14,5,30)
// console.log(myate);
// console.log(myate.toLocaleString());


// let mytimeStamp=Date.now()
// console.log(mytimeStamp);
// console.log(mytimeStamp.getTime());
// console.log(Math.floor(Date.now()/1000)) ;

let newDate=new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getFullYear())
console.log(newDate.getMonth())
console.log(newDate.getMonth()+1)


newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate)


