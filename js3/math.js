// Math Methods and Properties

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.trunc(3.9)); // 3
console.log(Math.round(3.7)); // 4
console.log(Math.ceil(Math.PI)); // 4
console.log(Math.floor(2.9)); // 4
console.log(Math.pow(2, 4)); // 16
console.log(Math.min(2, 34, 5, 3, 5));
console.log(Math.max(2, 34, 5, 3, 5));
console.log(Math.floor(Math.random() * 10));
console.log(Math.random());

// From 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

// Your First Code Challenge

// Write code that will return a random letter from your name.

const myName = "Shreyas";
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
