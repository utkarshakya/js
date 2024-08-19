// Uncomment this part to see output.

/*
let name = "Access";
let age = 35;

// This is how I am writting a variable while printing its value with string, simply using
// concatination but this is old way and can some time not very clean and readable.
console.log("Hello My Name Is " + name + " And I Am " + age + " Years Old.");

// So now days we use `` (Backticks) to write such things as give below
console.log(`Hello My Name Is ${name} And I Am ${age} Years Old.`);
// This is called STRING INTERPOLATION.
// Although output is same for both but tHis is good practice.
*/



// There is one property of string we can use (note this is property not a method).
let string = "HolaAmigo"
console.log(`\nLength of ${string} = ${string.length}`)

// +++++++++++++++ SOEM IMPORTANT METHODS OF STRINGS +++++++++++++++++

const phrase = new String("-Hola-Amigo-!") // This one of the way to define a string using new keyword.
// This will treat the string as an object and provide some additional funcionalities.

console.log("\n--------- ORIGINAL STRING ---------")
console.log(phrase)

// ******* THERE ARE MANY METHOD OF STRING THAT WE CAN USE HERE ARE SOME *******

console.log("\n--------- LOWER CASE ---------")
console.log(phrase.toLowerCase());
// Converts the string to lower case.

console.log("\n--------- UPPER CASE ---------");
console.log(phrase.toUpperCase());
// Converts the string to upper case.

console.log("\n--------- SUB-STRING & SLICE ---------")
console.log(phrase.substring(0, 5));
// Returns a sub-string.
// Arguments (start index, end index), end index is excluded.

console.log(phrase.slice(0, 5));
console.log(phrase.slice(-6, -1));
// Similar to substirng additionally we can use negitive index here.

console.log("\n--------- INDEX OF SPECIFIC CHARACTER ---------")
console.log(phrase.indexOf('-'))
console.log(phrase.indexOf('A'))
console.log(phrase.indexOf('a'))
// Returns the index of the specific charater.
// If the given character present at many places in string it'll return the index of its first occurance.
// Also note that this method is case-sensitive.

console.log("\n--------- CHARACTER AT SPECIFIC INDEX ---------") 
console.log(phrase.charAt(6))
console.log(phrase.charAt(1))
// Returns the character at sepecific index.

console.log("\n--------- REPLACE ---------")
console.log(phrase.replace('-', ' '))
console.log(phrase.replace(/-/g, ' ')) // ***IMPORTANT***
// Returns the string after replacing the specific character or substring from the string.
// Note it method will not replace all occurances of a specific chracter or substring.
// Above first example '-' is replaced by an space ' ' but only the first one, see the output.
// In the second example we use something called a Reguler Expression as /expression/.
// In reguler expression we can use flags, the g flag used after the expression is for global
// search, this will replace all occurances of a specifed expression.
// There are other flags like i is used to make the expression case-insensitive.
// Check this docs on mdn to know more: https://rb.gy/w06ejd

console.log("\n--------- INCLUDES ---------")
console.log(phrase.includes('Amigo'))
console.log(phrase.includes('ping'))
// Returns true or false if the given substring or character is present in the searching string.
// We can also give position from where we start searching, if not given it starts from 0 i.e. from starting.

console.log("\n--------- SPLIT ---------")
console.log(phrase.split('-', 2))
console.log(phrase.split('-'))
// Returns an array of values splited by a given character known as sperator.
// We can also limit the values like we did in the first example above

let newString = "   Hola \n\n"
console.log(`\n--------- TRIM, TRIM-START & TRIM-END ---------`)
console.log(`--- HERE ORIGINAL STRING IS ---`)
console.log(newString)
console.log(`--- FROM HERE WE USE METHODS ---`)
console.log(newString.trim())
console.log(newString.trimStart())
console.log(newString.trimEnd())
// Returns the string after removing the leading and trailing white spaces and line terminator characters.
// trimStart() will remove leading white spaces and line terminators only.
// trimEnd() will remove trailing white spaces and line terminators only.

// LEARN MORE ABOUT STRING METHODS FROM MDN DOCS: https://rb.gy/d5m8qg