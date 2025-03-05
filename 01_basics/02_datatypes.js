"use strict"; // treat all JS code as newer version.

// alert("Hello")  // We are using nodejs , not browser

console.log(3+4);
console.log("Yash Kirnapure")

let name = "Hitesh";
let age = 18
let isActive = true;

console.log(typeof name)
console.log(typeof age)
console.log(typeof isActive)
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

// number => 2 to power 53
// bigint
// string => " "
// boolean
// null
// undefined
// symbol

// object 
let student = {
    "name" : "Yash",
    "age" : 21,
    "domain" : "NodeJS",
    "level" : 3
}

console.log(student);
student.grade = "A";
console.log(student);

