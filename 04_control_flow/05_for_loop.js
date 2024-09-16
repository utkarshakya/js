// For Loop and all the other loops work exactly same as they work in other high-level language.
// We don't discuss more about them, they are simple if you are familiar with it.
// Remember: for, while and do-while are known as Looping Statements.

// Syntax:
// for(initialization; condition; afterthought){
    // statements;
// }

for(let num = 1; num <= 10; num++){
    console.log(num);
}


// Jump Statements: break and continue
for(let i = 1; i <= 10; i++){
    if(i == 5){
        console.log("Detected 5, We'll break from here.");
        break; // End the loop from here.
    }
    else if(i == 2){
        console.log("Detected 2, We'll continue from here.");
        continue; // Continue to next iteration
    }
    else{
        console.log(`Got ${i}`);
    }
}

// Check The Following Link To Learn More:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue