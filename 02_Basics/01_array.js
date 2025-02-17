// array
// () paranthses , []brackets, {}braces or curli braces

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr);
// console.log(myHeors);
// console.log(myArr2);

// console.log(myArr[1]);
// console.log(myHeors[1]);
// console.log(myArr2[1]);

// Array methods

// myArr.push(6)  //to add IN LAST
// myArr.push(7)  
// myArr.pop()  //delete lasy value

// myArr.unshift(9)  //ye start main insert karta hai
// myArr.shift()  //  remove start letter

// console.log(myArr.includes(1));//CHECK VALUE IS PRESENT IN THE ARRAY AND RETURN BOOLEAN
// console.log(myArr.indexOf(5)); //KISI BHI METHOD KO DEKHNA HAI KI WAH KYA KARTA HAI TO AAP US PAR HOVER KAR SAKTE HAI

// const newArr = myArr.join()  //ye array ko bind bhi kar deta hai aur string man bhi conveert kar deta hai

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);//START 1 SE AUR 3 KO INCLUDE NAHI KARNA HAI


const myn2 = myArr.splice(1, 3)//START 1 SE AUR 3 KO INCLUDE KARNA HAI

console.log("C ", myArr);
console.log(myn2);

// EK MAIN RANGE INCLUSE HOTI HAI EK MAIN NAHI HOTI HAI LEKIN YE CORRECT ANSWER NHAI HAI 
// SPLICE MAIN SE ORIGINAL ARRAY SE PURA NIKAL HI JATA SPLICE WALA HISSA 