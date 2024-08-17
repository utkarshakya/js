// Previously js don't have classes, modules and other new features but now it has so many new features and to deal with now for treating out code as an new standared code we use "use strict"
"use strict" // treat all JS code as newer version of code.

// alert("Hello") // this one is a browser function we can't use it with node.js

// Now there are not many data types in JS
// Primitive Data Types : Number, String, Boolean, Undefined, Null, BigInt, Symbols.
let age = 23 // Number Data Type
let firstName = "Ping" // String Data Type
let isLogedIn = true // Boolean Data Type
let state // Undefined
let value = null // Standalone Value Or A null Data Type
let bigNumber = 32434n // We use n at the end of number, it will be treated as bigInt explicitly
// There is one more data type namely bigint for large numbers
// And Symbols --> this one is always unique
const id1 = Symbol("23")
const id2 = Symbol("23") // These two are not equal they the unique see output
console.log("Does id1 is equal to id2 : " + (id1 == id2))

// We can use typeof() function to see the data type of any variable
console.table([typeof(age), typeof(firstName), typeof(isLogedIn), typeof(state), typeof(value), typeof(bigNumber), typeof(id1)])
// Note null is an Object


// Non-Primitive Data Types OR Objects : Arrays, Objects, Functions
// Objects are very important in JS we will learn about them soon.