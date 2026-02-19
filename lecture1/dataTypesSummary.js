// primitive
//  7types: string , number, null , boolean, undefined , symbol , BigInt

const score = 100
const scorevalue = 100.3
const isloggedin = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)

const bigNumber = 1234679876545353654654n


// Referance (Non primitive)
//  arrays , objects , functions

const heros = ["shaktiman", "naagraj", "dogga"]
let myOBJ = {
    name: "lokesh",
    age : 22,

}


const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof bigNumber);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// stack (primitive) , heap(non primitive)

let myYouTube = "my fitness"

let anotherName = myYouTube
anotherName = "Fitness Freak"

console.log(myYouTube)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}