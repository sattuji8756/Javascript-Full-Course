/////////////////////////////////////////////////////LECTURE 30////////////////////////////////////////

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
// console.log(newNums);

///////////////////////////////////////////////////////////////////
// filter main automatically filter kar deta hai par map main vo sab par iterate karega hi karega to app uske hisaab se conditional check ye sab laga sakte hai

// cahinnig (matlab do teen method aap diraectly use kar sakte ho)
 
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);