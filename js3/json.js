// JSON: JavaScript Object Notation

/* 
JSON is used to send and receive data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send and receive data in many languages not just in JavaScript. 
*/

const myObj = {
  name: "Dave",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello");
  },
};
const product = [
  { id: 1, name: "Shreyas", hobby: "cricket" },
  { id: 2, name: "Peter", hobby: "basketball" },
  { id: 3, name: "John", hobby: "football" },
  { id: 4, name: "James", hobby: "volleyball" },
];
console.log(product[0].name);
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.charAt(0));

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(receiveJSON.hobbies[0]);
