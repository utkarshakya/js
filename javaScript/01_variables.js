const accountID = 3324
let accountEmail = "utkarsh@gmail.com"
var accoutnPassword = "34jf422" // WE don't use var now days due to its globle scope.
accountCity = "Kolkata" // this one is worst way of reserving a memory with some value and variable name.
let accountState; // this will have an undefined value. See the output

// accountID = 3323 // this is not possible because this one is constant.
accountEmail = "king@gmail.com"
accoutnPassword = "1221agrs"
accountCity = "Bangaluru"

console.log(accountID);

// For printing more that one variables in the form of table.
console.table([accountID, accountEmail, accoutnPassword, accountCity, accountState])