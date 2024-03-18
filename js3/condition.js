//syntax
// switch(expression OR value) {

//     case choice1:
//         // run this code
//     break;

//     case choice2:
//         //run this code
//     break;

//     default:
//         // run this code if no case matches
//         // no need for a break here
// }

switch (Math.ceil(Math.random() * 5)) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  default:
    console.log("No match");
}

// Conditionals: Ternary Operator

//condition ? ifTrue : ifFalse

let soup = "Chicken Noodles Soup";
let isCustomerBanned = false;
let response = soup ? "Yes we have soup." : "Sorry,no";
console.log(response);

let soupAccess = isCustomerBanned
  ? "Sorry, No soup for you!"
  : soup
  ? `Yes we have a ${soup}`
  : "Sorry, no soup for today";

console.log(soupAccess);

testScore = 62;

let grade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : testScore > 49
    ? "U"
    : testScore > 39
    ? "J"
    : " F";

console.log(grade);
