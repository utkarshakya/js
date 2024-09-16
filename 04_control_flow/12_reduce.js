// --- --- reduce() Method --- ---
const arr = [1, 2, 3, 4];
const total = arr.reduce((previousValue, currentValue) => {
    console.log(`Previous Value = ${previousValue} & CurrentValue = ${currentValue}`);
    return previousValue + currentValue;
}, 0);
console.log(`Total = ${total}`);
// See the output first.
// Now let me explain, reduce takes a callback function and a initialValue.
// The callback function has two parameters namely accumulator(also know as previousValue) and currentValue
// currentValue points to the array(here arr) and the accumulator points to the return value but for the first time
// it points to the initialValue(which is 0 here).
// Now see the output again it will now make things clear.

// Here is one more example:
const shoppingCart = [
    {
        item: "Moong Dal",
        quantity: "500g",
        price: 60
    },
    {
        item: "Masoor Dal",
        quantity: "2kg",
        price: 220
    },
    {
        item: "Arhar Dal",
        quantity: "1kg",
        price: 160
    },
    {
        item: "Urad Dal",
        quantity: "1kg",
        price: 130
    }
]
console.log("\n--- Shopping Cart Example ---");
const totalPrice = shoppingCart.reduce((accumulator, items) => (accumulator + items.price), 0);
console.log(`Total Price To Pay = ${totalPrice}`);

// REFER THESE DOCUMENTATIONS TO LEARN MORE:

// --- Filter ---
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// --- Map ---
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// --- Reduce ---
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// NOTE: Map is also a Global Object used to make maps but here all filter, map and reduce are methods of array.