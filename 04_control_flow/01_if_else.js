if (true) {
    console.log(`If Running`)
} else {
    console.log(`Else Running`)
}

if (false) {
    console.log(`If Running`)
} else {
    console.log(`Else Running`)
}
// This is simply if-else statement, It is same as in other language.
// We can also use else-if and nesting in the same way as we in C/C++ language.
// Here is Real use case example of if else.
const debitCard = true;
const loggedInStatus = true;
if(debitCard && loggedInStatus){
    console.log(`You Are Eligible For Buying Our Course`);
}
else if(!loggedInStatus){
    console.log(`You Need To Login First`)
}
else if(!debitCard){
    console.log(`You Need To Enter Debit Card Details To Proceed`)
}
else{
    console.log(`To Get Start Log In And Fill The Details`)
}