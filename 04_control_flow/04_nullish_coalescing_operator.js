// Nullish Coalescing Operator (??):
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side 
// operand when its left-hand side operand is null or undefined, and otherwise returns its
// left-hand side operand.
// See the example below to grasp it easily.
let value = 4 ?? 8;
console.log(value);
value = null ?? 32;
console.log(value);
value = undefined ?? 53;
console.log(value);
value = "Done" ?? 45 ?? "Doing";
console.log(value);

// NOTE: Ternary Operator is totally different from Nullish Coalescing Operator.
// Ternary Operator is used to write a condition in one line.
// Syntax: condition ? true : false;
// Here is a simple example.
const price = 789;
price >= 500 ? console.log("Price is more than 500") : console.log("Price is less than 500");