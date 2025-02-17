const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//lekin yaha par array ek single element hai aur uske andar bhi value hai aur ye array ko as a element merge karega
// marvel_heros.push(dc_heros)
 
//this can push only existng array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);//to access flash

//this can writtern new array and then push aur dono array ko merge karega properly
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// OR YOU CAN USE SPREAD 
// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// FLAT ALL ARRAY KO EK HI ARRAY MAIN DE DETA HAI 
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
// CONVERT ARRAY   
console.log(Array.from("Hitesh"))
//ISKO DIRECTLY YE CONVERT NAHI KAR PAYEGA
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
// RETURNS A NEW ARRAY FROM SET OF ELEMENT 
console.log(Array.of(score1, score2, score3));