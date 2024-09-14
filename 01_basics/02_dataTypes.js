// Previously js don't have classes, modules and other new features but now it has all and to treat our code as of new standards we use "use strict"
"use strict"; // treat all JS code as newer version of code.

// alert("Hello") // this one is a browser function we can't use it with node.js

// Now datatypes in js can be Primitive or Non-Primitive (Mostly Objects)

// --------------------------- Primitive Data Types ----------------------------
// Number => 2 to power 53
// Bigint
// String => ""
// Boolean => true/false
// null => standalone value
// undefined =>
// Symbol => unique

let age = 23; // Number Data Type
let firstName = "Ping"; // String Data Type
let isLoggedIn = true; // Boolean Data Type
let state; // Undefined
let value = null; // Standalone Value Or A null Data Type
let bigNumber = 32434n; // We use n at the end of number, it will be treated as bigInt explicitly
const id1 = Symbol("23");
const id2 = Symbol("23");
// The above id1 and id2 are not equal
console.log("Does id1 is equal to id2 : " + (id1 == id2));

// We can use typeof() function to see the data type of any variable
console.table([
  typeof age,
  typeof firstName,
  typeof isLoggedIn,
  typeof state,
  typeof value,
  typeof bigNumber,
  typeof id1,
]);
// Note null is an Object

// ------------------------ Non-Primitive Data Types -------------------------
// Arrays, Objects, Functions

let data = ["Gore", "34th Street Pune, 442132", 546, Symbol(89)]; // This an Array
console.log(data);
console.log(`Type of data = ${typeof data} \n`);

let heroes = {
  0: "Scarlet Witch",
  1: "Black Panther",
  2: "Wolverine",
  3: "Deadpool",
}; // This is an object
console.log(heroes);
console.log(heroes[1]);
console.log(`Type of heroes = ${typeof heroes} \n`);

let fan = function () {
  console.log("Spider-Men is a fan of Captain America");
}; // This is a function (specifically an Anonymous Function)
fan(); // here we call a function
console.log(`Type of fan = ${typeof heroes} \n`);

// You can see in the output that datatype of Array, Object and Function
// are all internally treated as Objects in js.
// That's why we sometimes call the Non-Primitive datatypes as Objects.

// There are many type and ways we can use and define the array, objects and functions.
// We will learn about them with time and practice in the upcoming repos.
