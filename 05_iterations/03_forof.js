//////////////////////////////////LECTURE 29///////////////////////////////////

// for of LOOP
// THESE LOOPS WE ARE READ IS ARRAY SPECIFIC 

// ["", "", ""] 
// [{}, {}, {}]

// syntax

// for (const element of object) {
    
// }

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}
///////////////////////////////////////////\

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`) 
}

/////////////////////////////////////////////////////////

// Maps
// MAPS MAIN VALUE UNIQUE HORTI HAI AUR JIS ORDER MAIN KIYA HAI US ORDER MAIN RAHTI HAI 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// APPLY LOOP ON MAP 

// THIS CAN PRINT ALL Map as a array

for (const key of map) {
    // console.log(key);
}

// destructure array 

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// applly for of in object 

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// yaha par object iteratable nahi hai lekin map hai object ko iterate karane ke dusre tarike hote hai

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }