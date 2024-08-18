// All simple comparision operation works well in case the operants have same data types
// but in case if we compare operants of different data types then we got unpridictable results.

console.log(4 < 8); // Its normal we simply get true

console.log(null < 0); // These all comparisions are depend on the operator and the implicit conversion.
console.log(null <= 0); // The equality check operator (==) and other comparision operator work differently, operators
console.log(null == 0); // like <, >, <= and >= when used then null is converted to zero but when == used null is null.

// In case of undefined, things also changes.
// In most cases undefined is't converted to any other datatype.

// There is one more important comparision operator known as strict check (===).
console.log("3" == 3); // This will give true, because of implicit conversion.
console.log("3" === 3); // This will give false, because (===) operator check datatype as well.

// WE ALWAYS TRY TO AVOID TO COMPARE OPERANTS OF DIFFERENT DATA TYPES FOR CLEAN AND BETTER CODE.

// ALTHOUGH 