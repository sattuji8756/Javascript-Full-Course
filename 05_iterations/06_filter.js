/////////////////////////////////////////////////////LECTURE 30////////////////////////////////////////4


const coding = ["js", "ruby", "java", "python", "cpp"]

// FOR EACH LOOP KOI BHI VALUE RETURN NAHI KARTA HAI 
const values = coding.forEach( (item) => {
    // console.log(item);
    // return item //agar hum return bhi laga de tab bhi ye pata chalta hai ki foreach koi bhi value return nahi karta hai 
} )
// yaha par iski value return nahi hogi to undefined hi aayega 
// console.log(values);

////////////////////////////////////////////////////////////////////


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// jaise foreach hota hai vaise bhi filter hota hai aur kul milakar callback bhi lleta hai 

// ye wala operataion for each main bhi hota hai oar foreach aapko value vapas nahi karta lekin ye aapko value vapas karta hai 
const newNum=myNums.filter((num)=>num>4)
// console.log(newNum)

////////////////////////////////////////////////////////////////////////////
 
// second way declaration 
// agar aap scope open karte hai to aapko return likhna padega varna aap directly bhi likh sakte hai lein aisa nahi scope open karke single line hai to scope nahi likhna hoga /jarur likhna hoga

const newNums = myNums.filter( (num) => {
    return num > 6
} )
// console.log(newNums)

// agar yahi chhez for each main use karte to kaise karte 


const myNumse = [1,12,13,14,2,15,16,1110]

myNumse.forEach( (num) => {
    if (num > 4) {
        myNumse.push(num)
    }
} )

// console.log(myNumse);

// const newNumse = [const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

/////////////////////////////////////////////////////////////////////////

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);