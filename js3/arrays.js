// Arrays
const myArrayA = ["John", 23, true];
const myArrayB = ["Peter", 55, false];

const resArray = [...myArrayA, ...myArrayB];
console.log(resArray);

// push() Adds new element to the end of an array and return the lenth of the new array

//unshift("first") adds new element to the start of the array and returns the new length of the array.

//pop() removes last element from an array and returns it.

//shift() removes first element of an array and returns it.

//splice(start, count, replacedValue) removes elements from an array
//slice(startIndex,stopIndex) takes elements from an array and creates a new array

//myArray.reverse() will reverse the array.

//join() convert the array to strings

//concat()

//spread operators

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothDept[1][0]);

const sportsStore = [equipDept, clothDept];
console.log(sportsStore);
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);
