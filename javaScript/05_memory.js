// There are two types of memory in javascript.
// Stack(Primitive DataTypes) and Heap(Non-Primitive DataTypes)

// This is an example of how stack memory works it works on pass by value
let name = "Samentha"
let newName = name
newName = "Kingpin"
console.log(name, newName)


// This one is going in heap and it works on pass by reference
let user1 = {
    email: "user1@gmail.com",
    upi: "user1@paytm"
}
let user2 = user1 // it start refereing to object not on its copy
user2.email = "user2@gmail.com" // here I did the change so it actually change the object data
console.log(user1) // Now can see the email has been changed
console.log(user2)