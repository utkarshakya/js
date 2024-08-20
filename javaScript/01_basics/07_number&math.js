// UNCOMMENT THE SPECIFIC MULTILINE COMMENT TO SEE THE OUTPUT, BY DEFAULT LAST ONE RUNS.


// SOME POINTS TO BE REMEMBERED:
// Like String Numbers can also be defined as given below
// let score = new Number(8)
// And in simple way like this --> let score = 2939
// but the number defined using new keyword is treated as an number object
// because that's what the new keyword does i.e. make objects.


/*
// --- --- --- SOME PROPERTIES AND METHODS OF NUMBERS --- --- ---


// --- --- 1. toString() --- ---
let score = 8
console.log(`\n--------- Original Number ---------`)
console.log(score)
console.log(`--------- toString() Method ---------`)
console.log(score.toString())
console.log(score.toString(2)) // This will converts the number to binary number system and return a string.
console.log(score.toString(8)) // Converts to octal number system.
console.log(score.toString(6)) // Converts to a number system with base 6.

// --- toString() Method Description ---
// This method simply as its name suggest return the numbers after converting it into string.
// toString() method takes one argument, which is radix. And this radix is simply tell the base of the number
// that we are converting into string, by default it is 10 (used for decimal).
// NOTE: if we specify a radix of one number-system to a number of another number-system then it implicitly converts
// the number to the number-system we specifed in radix and then make it string, as you can see in 2nd example above.
// REMEMBER: radix ranges from 2 to 36.


// --- --- 2. toFixed() --- ---
let balance = 456.8391
console.log(`\n--------- Original Number ---------`)
console.log(balance)
console.log(`--------- toFixed() Method ---------`)
console.log(balance.toFixed(6))
console.log(balance.toFixed(2))
console.log(balance.toFixed(0))

// --- toFixed() Method Description ---
// This method simply return a string with fixed digits after decimal. It give a round-off value.
// It takes only one argument know as fractionDigits ranges from 0 to 20.
// Mostly used to round of more precised values.


// --- --- 3. toPrecision() --- ---
console.log(`\n--------- Original Number ---------`)
console.log(balance)
console.log(`--------- toPrecision() Method ---------`)
console.log(balance.toPrecision(2))
console.log(balance.toPrecision(6))

// --- toPrecision() Method Description ---
// Similar to toFixed() but it can return exponential value string, see first example output.
// This happens because it not only works on digits after decimal but it works on whole value.


// --- --- 4. toLocalString() --- ---
let price = 1000000
console.log(`\n--------- Original Number ---------`)
console.log(price)
console.log(`--------- toLocalString() Method ---------`)
console.log(price.toLocaleString('en-IN'))
console.log(price.toLocaleString())

// --- toLocalString() Method Description ---
// Returns a string containing commas which we add in prices.
// By default it do according to us system, but we can define in argument to use other see first example output has Indian system.
*/


// --- --- --- METHODS AND PROPERTIES OF MATH OBJECT IN JAVASCRIPT --- --- ---

/*
// --- --- Some Important Properties --- ---
console.log(Math.E) // Returns value of e
console.log(Math.PI) // Returns value of pi


// --- --- Some Important Methods --- ---
console.log(Math.abs(-34)) // Returns absolute value i.e. removes negative sign it present.
console.log(Math.round(3.632)) // Returns a rounded of value in integer.
console.log(Math.ceil(2.347)) // Returns smallest integer grater than or equals to its numeric argument.
console.log(Math.floor(2.89)) // Returns greatest integer less than or equals to its numeric argument.
console.log(Math.min(3, 4, 5, 6, 1.2, 2.5)) // Returns minimum value.
console.log(Math.max(3, 4, 5, 3.34, 5.23, 8)) // Returns maximum value.
*/

// --- --- Math.random() Method --- ---
/*
let r1 = Math.random() // Returns value between 0 and 1.
let r2 = r1 * 10
console.log(r1)
console.log(r2)
*/

// TO GET A INTEGER BETWEEN AN SPECIFIED RANGE USE THE FORMULA GIVEN BELOW:
// (Math.floor(Math.random() * (max - min + 1)) + min)
// This will give you the number between min and max (both inclusive).
// Here is a simple example.
let min = 5
let max = 10
console.log(`\n--- Get A Random Number Between 5 To 10 ---`)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// NOTE: To Get Floating-Point Numbers Use This --> (Math.random()*(max-min)+min)

// THAT'S IT WE HAVE DONE WITH THE MATHS AND NUMBER HERE.