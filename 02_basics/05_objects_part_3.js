// NOTE: Uncomment The Specific Multi-Line Comment To See The Output, By Default Last One Runs.

/*
// --- There Can Be Array Of Objects Like This ---
const user = [{id: 121, name: 'Ura'}, {id: 324, name: 'Ven'}]
console.log(user[1].name) // This is how we simply access it.
// It is useful while working with database.
*/

const daredevil = {
    name: 'Matt Murdock',
    gender: 'Male',
    age: 27,
    occupation: 'Attorney',
    superPower: 'Extra Ordinary Senses',
    enemy: 'KingPin'
}

// --- Some Methods Of Objects ---
/*
console.log(Object.keys(daredevil));
// As name suggest returns array of keys of object.
console.log(Object.values(daredevil));
// Similarly it returns array of values of object.
console.log(Object.entries(daredevil));
// And this will returns array of key-value pair of object.
*/

/*
console.log(daredevil.hasOwnProperty('occupation'));
console.log(daredevil.hasOwnProperty('friend'));
// See the output to understand.
*/

// --- DESTRUCTURING OF OBJECT ---
const {occupation: op} = daredevil;
const {enemy} = daredevil;
console.log(op);
console.log(enemy);
// This is how we destructure objects. Not we can directly use the occupation key as op of the
// daredevil object, see the output.
// We can also destructure arrays, will talk about it later.


// WHILE DEALING WITH API, WE GET RESPONSE IN OBJECTS OR ARRAY OF OBJECTS (KNOWN AS JSON).
// LIKE THIS --> {"name": "utkarsh", "course": "js"} AND THIS --> [{..}, {..}, {..}].
// WE WILL LEARN ABOUT API'S LATER IN DETAILS, SO DON'T WORRY NOW.