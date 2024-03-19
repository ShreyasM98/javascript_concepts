// let myObj = {
//   name: "Shreyas",
//   id: 23,
//   male: true,
// };

// console.log(myObj.id);

// const anotherObj = {
//   alive: true,
//   answer: 42,
//   hobbies: ["Eat", "Sleep", "Code"],
//   beverage: {
//     morning: "Coffee",
//     afternoon: "Iced Tea",
//   },
//   action: function () {
//     return `Time for ${this.beverage.morning}`;
//   },
// };

// console.log(anotherObj.action());

// const vehicle = {
//   wheel: 4,
//   engine: function () {
//     return "Vrooom";
//   },
// };

// const car = Object.create(vehicle);
// car.doors = 9;
// car.engine = function () {
//   return "Whooosh!";
// };
// console.log(car.wheel);

// const tesla = Object.create(car);
// console.log(tesla.wheel);
// tesla.engine = function () {
//   return "Shhhhhhh!";
// };
// console.log(tesla.engine());

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

// delete band.drums;
// console.log(band.hasOwnProperty("drums"));

// console.log(Object.keys(band));
// console.log(Object.values(band));
// for (let x in band) {
//   console.log(`On ${x} , it's ${band[x]}`);
// }

// destructring objects
// const { guitar: myVariable, bass: myBass } = band;
// console.log(myVariable);
// console.log(myBass);

// const { vocals, guitar, bass, drums } = band;
// console.log(guitar);
// console.log(vocals);
// console.log(bass);
// console.log(drums);
const { vocals } = band;
function greetUser(userName) {
  console.log(`Hello, ${userName}`);
}

greetUser(vocals);
