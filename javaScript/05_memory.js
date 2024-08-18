// There are two types of memory in Javascript.
// 1. Stack (Used By Primitive DataTypes)
// 2. Heap (Used By Non-Primitive DataTypes)


// The main and important thing to remember is that in stack the copy is created when we assign one
// variable having value to another variable so when we change the other variable value it only
// affects it's own value not the value of one which we assign to it but in case of heep variable
// start to refering to the original value so when one variable do any change then it will reflected
// to all others who are refering the to same reference value, this is basically happens because
// stack uses pass-by-value and heep uses pass-by-reference, see below example to get it clear.


// This is an example of how stack memory works, it uses pass-by-value principle.
let name = "Samentha"
let newName = name // This will create a copy of name and store it in newName.
newName = "Kingpin"
console.log(name, newName)


// This is an example of how heap memory works, it uses pass-by-reference principle.
let user1 = {
    email: "user1@gmail.com",
    upi: "user1@paytm"
} // This is an object.

let user2 = user1 // It start refereing to object not on its copy
user2.email = "user2@gmail.com" // here I did the change so it actually change the object data
console.log(user1) // Now can see the email has been changed
console.log(user2)
