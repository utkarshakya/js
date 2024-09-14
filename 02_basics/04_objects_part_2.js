// NOTE: Uncomment The Specific Multi-Line Comment To See The Output, By Default Last One Runs.

// Now We See The Object Declaration Using Constructor (Also Know as Singleton Object).
/*
const hero = new Object(); // This will create empty object.
hero.name = 'Kingpin';
hero.type = 'villain';
hero.hp = 234;
hero.hates = 'Daredevil';
hero.realName = {firstName: 'Wilson', lastName: 'Fisk'}; // We can give object inside an object.
console.log(hero); // See the output.
*/

let obj1 = {
    1: 'a',
    2: 'b'
};
let obj2 = {
    3: 'c',
    4: 'd'
};

// --- --- MERGING OBJECTS --- ---
/*
// --- assign() Method ---
const mergedObject = Object.assign({}, obj1, obj2);
console.log(mergedObject);
// assign() returns the object after combining two or more of them.
// See in the output this will simply concat these two objects.

// Note: we give an empty object {} in the starting of assign arguments, this is because
// assign() takes two arguments as assign(target, ...source), here first argument is target where
// we copy all other objects data and all after that are source. So this is good way to use like this.
*/

// --- Spread Operator ---
const obj3 = {...obj1, ...obj2};
console.log(obj3);
// This spread operator also do the same thing, we have talked about it in arrays.
// And we don't use assign() method in most cases, spread syntax is used mostly.