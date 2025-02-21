//////////////////////////////////LECTURE 29///////////////////////////////////

// for of loop=map/ for in loop =object 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    // console.log(key)
    // console.log(myObject[key])
}

/////////////////////////////////////////////////////////////////////////////////////////
// using for in loop in array 


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // lekin isme keys aayi hai aur array ki bhi keys hoti hai isme keys 0 se suru hoti hai  aur bydefault number hi hoti hai

    // console.log(key);//key 
    // console.log(programming[key]);//value
}

// lekin map par for in loop nahi laga sakte hai kyunki ye iterable nahi hai lekin iterate kar sakte hai

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}