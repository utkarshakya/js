// --- for each ---
const coding = ["java", "c", "py", "js", "html"];

/*
coding.forEach(function (value) {
    console.log(value);
})
console.log("\n"); // just for better output vision.
// forEach loop takes call back function, In call back function we don't specify name of function.
// As you can see above we didn't give name of the function in the above example.


// We can also use arrow function as call back function.
// Remember we define arrow functions as: let message = () => {};
// Since we don't need to define name, we can make it like the one given below.
coding.forEach((element) => {
    console.log(element);
})
console.log("\n"); // just for better output vision.


// We can also it like given below, i.e. define function outside and pass it as an argument.
function see(value){
    console.log(value);
}
coding.forEach(see);
// Note, Giving any function as an argument to for each loop, then give it's reference don't call or execute it.
// All Of The Above Given Examples Gives The Same Output, It Just The Way Of Writing Them.
*/


// --- forEach loop also takes index and array ---

/*
coding.forEach((value, index, arr) => {
    console.log(value, index, arr)
})
// See the output to make it clear.
*/

// --- More ---
const heros = [
    {
        heroName: "Saktimaan",
        powers: ["Superhuman Strength", "Superhuman Speed", "Heat Generation", "Shape Shifting", "Stamina", "Light Projection"]
    },
    {
        heroName: "Naagraj",
        powers: ["Superhuman Strength", "Superhuman Speed", "Telepathy", "Therianthropic", "Regenerative Healing Factor"]
    },
    {
        heroName: "Chacha Chaudhary",
        powers: ["Extremely Intelligent"]
    }
]
// Now using forEach loop we can simply access any value of this complex structure.
heros.forEach(element => {
    console.log(element.heroName);
})
// See the output, we simply get heroName.