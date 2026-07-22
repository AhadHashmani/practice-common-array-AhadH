// Task 1: Create the Order System

let drinks = ["Latte", "Tea", "Espresso"];
let pastries = ["Croissant", "Muffin", "Bagel"];

// Task 2: Log the number of drinks and pastries

console.log("Number of drinks:", drinks.length);
console.log("Number of pastries:", pastries.length);

// Task 3: Access Orders Using Bracket Notation (hardcoded numbers)

console.log("First drink:", drinks[0]);
console.log("Last pastry:", pastries[2]);
console.log("Second drink:", drinks[1]);
console.log("First pastry:", pastries[0]);
console.log("Last drink:", drinks[2]);
console.log("Second pastry:", pastries[1]);

// Task 4 & 6 (later): Access Orders Dynamically with Variables

let drinkIndex = 0;
let pastryIndex = pastries.length - 1;
console.log("Dynamic drink selection:", drinks[drinkIndex]);
console.log("Dynamic pastry selection:", pastries[pastryIndex]);

// Task 5: Loop through all drinks dynamically using .length

for (let i = 0; i < drinks.length; i++) {
  console.log("Drink " + (i + 1) + ":", drinks[i]);
}

// Task 6: Add a New Order & Track Length

drinks.push("Flat White");
console.log("Updated number of drinks:", drinks.length);

let newDrinkIndex = drinks.length - 1;
console.log("Newest drink order:", drinks[newDrinkIndex]);