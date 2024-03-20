// Factory Functions

// JavScript Classes
// class Pizza {
//   constructor(pizzaType, pizzaSize) {
//     this.type = pizzaType;
//     this.size = pizzaSize;
//     this.crust = "original";
//     this.toppings = [];
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
//   getTopping() {
//     return this.toppings;
//   }
//   setToppings(toppings) {
//     this.toppings.push(toppings);
//   }

//   bake() {
//     console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza`);
//   }
// }

// const myPizza = new Pizza("pepperoni", "large");
// myPizza.setCrust("great");
// myPizza.setToppings("cheese");
// myPizza.setToppings("olives");
// myPizza.bake();
// console.log(myPizza.size);
// console.log(myPizza.type);
// console.log(myPizza.crust);
// console.log(myPizza.toppings);

class Pizza {
  crust = "original";
  #sauce = "traditional";
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  hereYouGo() {
    console.log(
      `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
    );
  }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.getCrust());
console.log(myPizza.#sauce);
// class Pizza {
//   constructor(pizzaSize) {
//     this.size = pizzaSize;
//     this.crust = "original";
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
// }

// Factory Function
// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;
//   return {
//     bake: () => console.log(`Baking a ${size} ${crust} crust pizza`),
//   };
// }

// pizzaFactory("small").bake();
// class SpecialtyPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "The Works";
//   }
//   slice() {
//     console.log(
//       `Our ${this.type} ${this.size} pizza has 8 slices. with the ${this.crust} crust`
//     );
//   }
// }

// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.setCrust("deep flake");
// mySpecialty.slice();
