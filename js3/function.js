// Functions

// Methods = built-in Functions!

// Function Declaration Syntax

function sum(num1, num2 = 9) {
  console.log(num1);
  console.log(num2);
  return num1 + num2;
}

let sum1 = sum(88, 55);
console.log(sum1);

//shreyas201998@gmail.com
let email = "shreyas201998@gmail.com";
let username = "";
for (let i = 0; i < email.length; i++) {
  if (email[i] !== "@") {
    username += email[i];
  } else {
    break;
  }
}

console.log(username);

// There are 3 methods for extracting a part of a string;
//slice(start, end),
// substring(start, end),
// substr(start, length)

// let substringResult = email.substring(0, email.indexOf("@"));
// console.log("Sliced Result: " + slicedResult);
// console.log("Substring Result: " + substringResult);
let getUserNameFromEmail = (email) => {
  return email.slice(0, email.indexOf("@"));
};

console.log(getUserNameFromEmail("bbbyfbhebf23@bvbv.com"));

//hello world

const properCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(properCase("hello"));
console.log(properCase("dAvE"));
console.log(properCase("pEtEr"));

// Function Reusable Code!
