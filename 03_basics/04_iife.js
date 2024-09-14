// --- IIFE - Immediately Invoked Function Expressions ---
// As name suggest it is used to immediately call a function as it defined, this is
// useful to ignore the global scope pollution.
// Here is simply syntax: (function)(execution), see the example below.
(function naadraj(){
    console.log(`Connect To Naagraj`);
})();
// That's it, it will get executed immediately as program runs.
// Remember: we need to end the IIFE by using a semicolon at the end of IIFE.
// Although Javascript can handel many automatically but in case of IIFE we need to end it,
// otherwise if we call other IIFE it creates problem. So keep that in mind.
// Also since it has name it is some time called as Named IIFE.

// We can also use it with arrow function
((name) => {
    console.log(`Hello, ${name}`)
})('King')
// That's it, we can also give arguments and parameters as given above.

// --- THAT'S IT WE'LL SEE YOU IN THE NEXT ONE, BYE ---