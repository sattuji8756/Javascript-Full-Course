////////////////////////////LECTURE 11//////////////////////////////// 

// const name="Satyendra"
// console.log(name);

// // new way to declare String 
// const gamename=new String("Biohazard4")
// console.log(gamename);

// console.log(gamename[0]);
// console.log(gamename.__proto__);//{ }
// console.log(gamename.__proto__.length); //0
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(3));
// console.log(gamename.indexOf("h"));

// const newString1="   satyendra    "
// console.log(newString1);
// console.log(newString1.trim());


// const newString=gamename.substring(0,4)
// console.log(newString);

// const anotherString=gamename.slice(-8,4)
// console.log(anotherString);


const url="https://google.com/Satyendra%20Kumar"
console.log(url);
url.replace("%20","-")
console.log(url.replace("%20","-"));
console.log(url.includes("Satyendr"));






const repoCount=50

// // Old way concatenate
// // ye jo scratch (name) hai ye linting features hai typescript ka is par dhayan mat dijiye
// console.log(name+repoCount+"value");

// // new way String interpolotion(yaha par banate hai placeholder unke andar jo bhi Variable hai usko Directly inject kafr sakte hai)

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

