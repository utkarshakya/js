// NOTE: Uncomment The Specific Multi-Line Comment To See The Output. By Default Last One Runs.

// READ THIS MDN DOCS FOR REFERENCE --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// In Simple Words An Array Is A Collection Values.
// Javascript Arrays Are Resizable And Can Contain A Mix Of Different Data Types.
// Note: Javascript Arrays Are Not Associative Like The String Does, Means
// console.log(heros[-1]) Is Undefined But Negative Index Works In Strings.
// Also Note: Javascript Array Copy Operation Creates A Shallow Copy Instead Of Deep Copy.
// REMEMBER: Shallow Copy --> Uses Reference. But Deep Copy --> Completely Independent.

const myArray = [3, 4, 5, 7];
const heros = ["Wanda", "Hulk", "Spider-Men", "Sang-Chi", "Makkari"];
// console.log(heros.length); // Used to get the length of the array. It  is the property of array.


/*
// Since Array Is A Object In Javascript. So Can Also Define It As Given Below.
const villains = new Array(
  "Thanos",
  "Ultron",
  "Kang",
  "Dr. Doom",
  "Dr. Strange"
);

console.log(`${heros[3]} vs ${villains[3]}`);
*/


// --- --- --- METHODS IN ARRAYS --- --- ---

/*
// --- --- General Methods --- ---

console.log(`\n--- Original Array ---`);
console.log(myArray);

myArray.push(3);
myArray.push(192);
console.log(`\n--- push() Method ---`);
console.log(myArray);
// push() adds the value at the end of the array and returns the new length.

myArray.pop();
console.log(`\n--- pop() Method ---`);
console.log(myArray);
// pop() removes the value from the end of the array and returns it.

myArray.unshift(28);
console.log(`\n--- unshift() Method ---`);
console.log(myArray);
// unshift() adds the value at the start of the array and returns the new length.

myArray.shift();
console.log(`\n--- shift() Method ---`);
console.log(myArray);
// shift() removes the value from the start of the array and returns it.

console.log(`\n--- includes() Method ---`);
console.log(myArray.includes(3));
// includes() give True or False based on the value if it exist or not.

console.log(`\n--- indexOf() Method ---`);
console.log(myArray.indexOf(3));
console.log(myArray.indexOf(44));
// indexof() simply returns the index of the value if it exist in the array and -1 if not.
// See the difference in the above two outputs.

console.log(`\n--- join() Method ---`);
console.log(myArray.join());
console.log(myArray.join(" "));
console.log(myArray.join("-"));
// join() returns string after combining different elements of the array by a separators.
// If separators is not given it'll simple converts the array to string as it is.
*/


// --- --- Slice() & Splice() Method --- ---

console.log(`\n--- Original Array ---`);
console.log(heros);

console.log(`\n--- slice() Method ----`);
console.log(heros.slice(0, 3)); // Example 1
console.log(heros.slice(2)); // Example 2
console.log(`--- Original Array After slice() ---`);
console.log(heros);
// slice() returns the sub-array from the given array.
// It takes 2 arguments, start and end like this slice(start, end).
// So we get a suu-array from start index to end (exclusive).
// In the above example 1 we get sub array from index 0 to 2, 3 is not included.
// And in the example 2 we get sub-array from 2 to end (since end is not defined).

console.log(`\n--- splice() Method ----`);
console.log(heros.splice(1, 2));
console.log(`--- Original Array After splice() ---`);
console.log(heros);
// splice() removes and returns the sub-array from the array.
// It takes two arguments like this splice(start, deleteCount).
// Here start is simply the start index and deleteCount is the number of elements to be removed.
// Like the above example returns sub-array of 2 elements removed from the array starting from index 1.
// See the example output to make it clear.

// REMEMBER splice() METHOD AFFECT THE ORIGINAL ARRAY BUT SLICE() DOESN'T.


// --- WE HAVE DONE WITH THE METHODS IN ARRAY, THIS IS A PART 1 WE'LL SEE YOU IN THE NEXT ONE ---