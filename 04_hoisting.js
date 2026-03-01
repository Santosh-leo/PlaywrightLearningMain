// Hoisting with Var
console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

// Hoisting with Let
console.log(b); // Output: ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // Output: 20

// Hoisting with Const
console.log(c); // Output: ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); // Output: 30

// Hoisting with Function
console.log(test1); // Output: undefined
function test1() {
    console.log("test1");
}
console.log(test1); // Output: function test1() {
console.log("test1");
