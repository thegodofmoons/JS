// # 2 Types of memory #
/*

1) Stack (Primitive) :->
usecase :=> it make copy of variables.

2) Heap (Non-Primitive) :->
usecase :=> We get reference of actual data.
*/

// # Stack Ex. ->

let myName = "Som Dev"

let anothername = myName
anothername = "chaiaurcode"

console.log(myName);
console.log(anothername);

// Heap Ex. ->

let userOne = {
    email: "nobody@mail.com",
    upi: "somthing@error"
}

let userTwo = userOne
userTwo.email = "freeguy@mail.com"

console.log(userOne.email);
console.log(userTwo.email);






