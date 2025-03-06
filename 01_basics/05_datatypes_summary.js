// Primitive 
// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.43

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
// console.log(id);
// console.log(anotherId);

const bigNumber = BigInt(1012131312)
// console.log(bigNumber);

// Reference (Non primitive)
// Array , Objects , Functions


const LaLigaTeams = ["FC Barcelona","Real Madrid","Atletico Madrid","Atletic Club","Real Betis","Real Sociedad"]

// console.log(LaLigaTeams[1]);
// console.log(LaLigaTeams);

let person = {
    "name" : "Yash",
    "age" : 22,
}

const myFunction = function() {
    console.log("I am the best in my field"); 
}

// myFunction()

// console.log(typeof person);
// console.log(typeof myFunction);
// console.log(typeof LaLigaTeams);
// console.log(typeof bigNumber);
// console.log(typeof id);
// console.log(typeof outsideTemp);


