// Truthy value are those value which are assumed to be true by default.
// Falsy value are those value which are assumed to be false by default.

// --- All Falsy Values in Javascript ---
// 1. false
// 2. 0
// 3. -0
// 4. BigInt 0n
// 5. ""
// 6. null
// 7. undefined
// 9. NaN

// All other values are considered truthy in Javascript.
// Values like "0", "false", " ", [], {}, function(){} and all other except the 9 falsy one are truthy.
// Don't confuse yourself just remember the falsy one all other are truthy.

const marks = 0;
if(marks){
    console.log("Got True");
} else{
    console.log("Got False");
}

// --- How We Check If Our Array & Objects Are Empty ---
let userEmail = [];
if(userEmail.length === 0){
    console.log("Array Is Empty");
}
let userProfile = {};
if(Object.keys(userProfile).length === 0){
    console.log("Object Is Empty");
}