// Syntax:
// for(initialization; condition; afterthought){
    // statements;
// }

for(let num = 1; num <= 10; num++){
    console.log(num);
}

// For Loop and all the other loops are exactly same as work in other high-level language.
// We don't discuss more about that, it's simple if you are familiar with it.
// Check This To Learn More: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

// Jump Statements: break and continue
for(let i = 1; i <= 10; i++){
    if(i == 5){
        console.log("Detected 5, We'll break from here.");
        break; // End the loop from here.
    }
    else if(i == 2){
        console.log("Detected 2, We'll continue from here.");
        continue;
    }
    else{
        console.log(`Got ${i}`);
    }
}

// Also Remember: for, while and do-while are known as Looping Statements.