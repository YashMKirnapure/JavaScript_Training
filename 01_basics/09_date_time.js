// Dates
let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,3,23);
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023,3,23,10,2,12);
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("2023-03-18")
let myCreatedDate = new Date("03-11-22")   // MM-DD-YY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log("Date:",myDate.getDate());
// console.log("Month:",myDate.getMonth() + 1);
// console.log("Day:",myDate.getDay());
// console.log("Full Year:",myDate.getFullYear());
// console.log("Time:",myDate.getTime());

// console.log(Math.floor(Date.now()/1000));

const newDate = new Date("2022-01-23")
console.log(newDate);

newDate.toLocaleString('default',{
    weekday: "long",
})

