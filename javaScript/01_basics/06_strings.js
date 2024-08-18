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
// Although output is same for both but this is good practice.
*/



// +++++++++++++++ SOEM IMPORTANT CONCEPTS OF STRINGS +++++++++++++++++

const phrase = new String("Hola-Amigo!") // This one of the way to define a string using new keyword.
// This will treat the string as an object and provide some additional funcionalities.

// ******* THERE ARE MANY METHOD OF STRING THAT WE CAN USE HERE ARE SOME *******

console.log(phrase.toLowerCase());
// Converts the string to lower case.

console.log(phrase.toUpperCase());
// Converts the string to upper case.

console.log(phrase.substring(0, 5));
// Returns a sub-string.
// Arguments (start index, end index), end index is excluded.

console.log(phrase.slice(0, 5));
console.log(phrase.slice(-6, -1));
// Similar to substirng additionally we can use negitive index here.

console.log(phrase.indexOf('-'))
// Returns the index of the specific charater.

console.log(phrase.charAt(6))
// Returns the character at sepecific index.