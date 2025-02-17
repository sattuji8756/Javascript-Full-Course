//////////////LECTURE 17///////////////////////

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);  

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}

console.log(obj3);

// JAB BHI DB SE VALUE AAYEG TO ARRAY OF OBJECT AAYEGA 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

//  console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//////////////////////LECTURE 18///////////////////////

// DESTRUCHERING OF OBJECT 


const course = {
    coursename: "js in hindi",   
    price: "999",
    courseInstructor: "SATYENDRA"
}

// course.courseInstructor

// const {courseInstructor} = course

// HERE COURSEINSRTRCUTOR GIVE SMALL NAME INSTRUCTOR(DESTRUCHERING { })
const {courseInstructor: instructor} = course

// console.log(courseInstructor);  
console.log(instructor);

// API - JO BHI VALUE AATI HAIH BAACKEND SE UNKO KASIE LIKHTE HAI AAP PAHLE YE XML FORM MAIN AATI THI LEKIN AB JSON FORM MAIN AATI HAI JO ASSAAN HAI 

// JSON EK Object JI HAI BAS ISKA NAAM NAHHI HAI 
// JSON = javascript Object notation and aapko object json format main hi bhrjna hota hai

// // {
// //     "name": "Satyendra kumar",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]

