// Numbers

// An integer is a whole number.
const myNumber = 42;
console.log(myNumber);

// A number with a decimal point is a float which references the "floating point"

const myFloat = 42.032;

console.log(myFloat);

const myString = "42.123abc";

console.log(Number(false)); //0
console.log(Number("Dave")); //NaN
console.log(Number("55.54777dwdwd")); //NaN

// Number Methods

console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(myNumber));
console.log(Number.parseFloat("66.48484484ddvdv"));
console.log(Number.parseFloat("66.9494asd").toFixed(2));
console.log(Number.parseInt(myString));

// Chaining = Using several methods chained together.

console.log(myFloat.toString());

console.log(Number.parseFloat("55.5555abcd").toFixed(2).toString());
