// All simple comparision operation works well in case the operants have same data types.\
// but in case if we compare operants of different data types then we got unpridictable results.

console.log(4 < 8); // Its normal we simply get true

console.log(null < 0); // these all are depend on the operator and the implicit conversion
console.log(null <= 0); // the equality check (==) operator and other comparision operator work differently
console.log(null == 0); // operators like <,>,<= and >= converts null to zero but == works differently treat null as null.

// If case of undefined things also changes (undefined is not converted to any datatype while comparision in most cases).
// We will learn about them as we do projects.

// There is one more comparision operator : strict check ===
console.log("3" == 3); // This will give true, because of implicit conversion.
console.log("3" === 3); // This will give false, because it check datatype as well.

// WE ALWAYS TRY TO AVOID TO COMPARE OPERANTS OF DIFFERENT DATA TYPES FOR CLEAN AND BETTER CODE.