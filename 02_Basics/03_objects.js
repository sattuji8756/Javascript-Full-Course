///////////////LECTURE 16///////////////////////

// TO LEARN JAVASCRITP LEARN ONLY TWO THINGS ONE Object 2.EventS 


// TWO WAYS TO DECLAYE OBJECT LITERAL AND CONSTRUCTOR 

// singleton (YAANI JAB AAP KOI CONSSTRUCTOR SE BANATE HAI TO SINGLETON EK OBJECT BANTA HAI AUR LITERALS KI TARAH DECLARE KARTE TO SINGOLTON NAHI BANTA HAI )

// Object.create(THIS IS CONSTRUCTOR METHOD)


// TO DECLARE SYMBOLE 
const mySym = Symbol('key1')

// Q GIVE A SYMBOL TAKE IT OBJECT KEY AND THEN PRINT AND SHOW ME    agar aapko symbol ki tarah use karna hai to Squrae braket ki tarah treat kariye [mySym]   aur is access bhi ai se hi  kiya jata hai 

// object literals 
const JsUser = {
    name: "Satyendra",//BY DEFAULT SYSTEM ISKO (KEY) KO STRING KI TARAH PROCESS KARTA HAI TO ISKO LIKHNE KI JARURAT NAHI HAI BAR ISKE ANDAR VALUE AAP KUCH BHI DEUJIYE KOI FARK NAHI PADTA

    "full name": "Satyendra Kumar",
    [mySym]: "mykey1",

    age: 18,
    location: "Jaipur",
    email: "satyendra@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// THIS IS RIGHT WAY TO ACCESS  OBJECT KYUNKI IS SIRF . SE ACCESS KAR SAKTE HO PAR JYADA TAR AISE HI ACCESS KARENGE 
console.log(JsUser.email)

// THIS IS RIGHT WAY TO ACCESS  OBJECT LYUNKI ISME AAP . & "" DONO ACCESS KAR SAKTE HO 
console.log(JsUser["email"])

// YE WALA TARIKA TAB USE HOTA HAI JAB HUM VAKUE KO . SE ACCESS NAHI  KAR SAKTE HAI EX "FULL NAME "
console.log(JsUser["full name"])
// console.log(JsUser.full name)//THIS /IS WRONG

console.log(JsUser[mySym]) 
console.log(typeof JsUser[mySym]) 
  
// TO CHANGE VALUE 
// JsUser.email = "SATTUJI@chatgpt.com"
// console.log(JsUser.email);


// TO LOCK VALUE TO NO CHNAGE 
// Object.freeze(JsUser)
// JsUser.email = "AKASH@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    // JAB BHI AAPKO SAME OBJECT KO REFERENCE KARNA HAI TO AAP LAGA SAKTE HAI THIS 
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);//THIS CAN GIVE FUNCTION RED=FERENCE
console.log(JsUser.greeting());// YAHA PAR ERROR AYEGA KYUNKI HUMNE OBJECT KO FREEZ KARKE RAKHA HAI TO HATANA PADEGA 
console.log(JsUser.greetingTwo());

  

    