//////////////////////////////////LECTURE 29///////////////////////////////////

// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// ṭhis is normal function 

coding.forEach( function (val){
    // console.log(val);
} )

// this is arrow function 

coding.forEach( (item) => {
    // console.log(item);
} )

// this is print me fubctuin 

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

///////////////////////////////////////////////////////


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

///////////////////////////////////////\

// access object in a array 

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} ) 