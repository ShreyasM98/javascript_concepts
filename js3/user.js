// User Input
// alert("Hello World!");

// let result = confirm(
//   "If you click on ok true will be stored in the result , if you click on cancel , false will be stored in the result. "
// );
// console.log(result);

let name = prompt("Please enter your name.");
if (name) {
  console.log(name.length);
  console.log(name.trim().length);
  console.log(name.trim());
} else {
  console.log("You did not enter your name");
}

let name1 = "   John Doe   ";
console.log(name1.length); // Outputs: 13 (including spaces)
console.log(name1.trim().length); // Outputs: 8 (trimmed spaces from both ends)
console.log(name1.trim());
