// Previously js don't have classes, modules and other new features but now it has so many new features and to deal with now for treating out code as an new standared code we use "use strict"
"use strict" // treat all JS code as newer version of code.

// alert("Hello") // this one is a browser function we can't use it with node.js

// Now there are not many data types in JS

// Primitive Data Types :
let age = 23; // Number Data Type
let name = "Samentha"; // String Data Type
let isLogedIn = true; // Boolean Data Type
let state; // Undefined
let value = null; // Standalone Value Or A null Data Type
// There is one more data type namely bigint for large numbers
// And Symbols --> this one is always unique
const id1 = Symbol("23");
const id2 = Symbol("23"); // These two are not equal they the unique see output
console.log("Does id1 is equal to id2 : " + (id1 == id2));

// We can use typeof() function to see the data type of any variable
console.table(typeof(age));

// Non-Primitive Data Types OR Objects : Arrays, Objects, Functions
// Objects are very important in JS we will learn about them soon