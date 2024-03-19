// var, let and const

// We can re-declare and re-assign if we define a variable with var keyword.

// var x = 1;
// var x = 2;
// console.log(x);

// // We cannot re-declare but we can re-assign if we define a variable with let keyword.
// let y = 1;
// y = 2;
// console.log(y);

// // We cannot re-declare or we cannot re-assign if we define a variable with const keyword.
// const z = 3;
// // z = 5;
// console.log(z);

// global scope

var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
  var x = 10;
  const z = 5;
  {
    var x = 11; // function scoped
    const z = 34; // block scoped
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);
}

myFunc();

//
//Global = Not in a function or block. Not desirable.
//Local = In a function or block. Not global.
//var instantiates function() scoped variables.
// let and const instantiate {block} scoped variables.

//Avoid using var. Stick with const and let.
//Use const unless you need to reassign value.
//Use let if you know you will reassign value.
