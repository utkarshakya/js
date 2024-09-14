// Like any other language variables are used to store values.
// They can be defined by const (for constant value), let or var keyword.

const accountID = 3324;
let accountEmail = "utkarsh@gmail.com";
var accountPassword = "34jf422"; // WE don't use var now days due to its global scope.
accountCity = "Kolkata"; // this one is worst way of reserving a memory with some value and variable name.
let accountState; // this will have an undefined value. See the output

// accountID = 3323 // this is not possible because this one is constant variable.
accountEmail = "king@gmail.com";
accountPassword = "1221args";
accountCity = "Bangaluru";

console.log(accountID);

// For printing more that one variables in the form of table.
console.table([
  accountID,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
