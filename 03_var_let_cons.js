// VAR, LET, CONST
// Defination of function

var a = 10; //Global Scope
console.log(a);


function test1() {
    console.log("test1"); //Function Scope
    a = 20;
    console.log(a); //Local Scope
}

// Calling of function
test1(); //Calling of function

function test2() {
    console.log("test2"); //Function Scope
    let a = 30;
    console.log(a); //Local Scope
    if (true) {
        console.log("test3"); //Block Scope
        let a = 40;
        console.log(a); //Local Scope
    }
    console.log(a); //Local Scope
}

// Calling of function
test2(); //Calling of function