let i = 1;
while(i <= 5){
    console.log(`Got ${i}`);
    i++;
}

let k = 2
do {
    console.log("\nCondition is false but I'm still running one time.");
    console.log("This is because condition checked after me.")
} while (k > 5);

// Refer There Link To Learn More:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while