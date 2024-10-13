// OBJECT LITERAL AND THIS KEYWORD
/*
const user = {
    username: "Utkarsh Shakya",
    loginCount: 8,
    signedIn: true,
    getUsername: function(){
        console.log(this.username)
    },
    getThis: function(){
        console.log(this) // This will print the current context which is the user object.
    }
}

console.log(user.username)
user.getUsername()
user.getThis()
console.log(this) // This is the global context which is empty object by default in non-strict mode, and window in browser, in strict mode it is undefined.
*/


// CONSTRUCTOR FUNCTION

// The new keyword is used in JavaScript to create an instance of a user-defined object type or one of the built-in object types that has a constructor function.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("King", 30);
const person2 = new Person("Pin", 25);

console.log(person1);
console.log(person2);
// If we don't use new to create an instance the person2 will overwrite the person1.