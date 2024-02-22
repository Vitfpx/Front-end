// Strict condition
"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense === true;
if (hasDriversLicense) console.log("I can drive :D");

//////////////////////////
// Functions
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

////////
// Function declaration and function expression

// function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// A diferença é que a function declaration pode ser chamado antes de defini-la,
// embora não seja uma boa ideia em muitos casos

// arrow function
// Em arrow functions de apenas uma linha, podemos tirar os parênteses
// do parâmetro e também remover a palavra return, assim como também as chaves
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(2003, "Vitor"));
console.log(yearUntilRetirement(1997, "Vitoria"));

///////////////
// Functions calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apple, orange) {
  const applePieces = cutFruitPieces(apple);
  const orangePieces = cutFruitPieces(orange);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

///////////////
// Arrays
const friend1 = "Rei Delas";
const friend2 = "Bartchola";
const friend3 = "China in box";

const friends = ["Rei Delas", "Bartchola", "China in box"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // Este código serve para vermos o último índice de um array

friends[2] = "Abero"; // Adicionar elemento assim altera o array apenas depois dessa linha ser declarada, antes dela ele continua original
console.log(friends);
// friends = ['Bob', 'Alice'] 🚫 dará erro

const firstName = "Vitor";
const vitor = [firstName, "Barbosa", 2037 - 2003, "student", friends];
console.log(vitor);
console.log(vitor.length);

// exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3); Não retorna em array

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

//////////////
// methods in arrays
// add elements
const newLenght = friends.push("Patryck"); // Essa mudança pode ser armazenada em uma variável, apesar de não ser muito útil fazê-lo
console.log(friends);
console.log(newLenght);

friends.unshift("Vitor");
console.log(friends);

// remove elements
friends.pop(); // last
const popped = friends.pop();
console.log(popped);
console.log(friends);

const shifted = friends.shift();
console.log(friends);
console.log(shifted);

console.log(friends.indexOf("Rei Delas"));
console.log(friends.indexOf("Abero"));

// includes é mais moderno que indexOf
friends.push(23);
console.log(friends.includes("Bartchola"));
console.log(friends.includes("China in box"));
console.log(friends.includes("23"));

if (friends.includes("Drew")) console.log("You have a friends called Drew");

///////////////////
// Introduction to Objects
// dot vs. bracket notation
const Vitor = {
  firstName: "Vitor",
  lastName: "Raimundo",
  age: 2037 - 2003,
  job: "student",
  friends: ["Rei Delas", "Bartchola", "China in box"],
};
// console.log(Vitor)

console.log(Vitor.lastName);
console.log(Vitor["lastName"]);

const nameKey = "Name";
console.log(["first" + nameKey]);
console.log(["last" + nameKey]);

// console.log(Vitor.`last` + nameKey) 🚫 error

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job or friends?"
// );

// if (Vitor[interestedIn]) {
//   console.log(Vitor[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job or friends"
//   );
// }

Vitor.location = "Brazil";
Vitor["twitter"] = "@Vitin_Raimundo";

// exercise
// "Vitor has 3 friends, and his best friend is called Rei Delas"

console.log(
  `${Vitor["firstName"]} has ${Vitor["friends"].length} friends, and his best friend is called ${Vitor["friends"][0]}`
);
// Bracket notation
console.log(
  `${Vitor.firstName} has ${Vitor.friends.length} friends, and his best friend is called ${Vitor.friends[0]}`
);
// dot notation
*/
////////////////
// more objetc methods
const Vitor = {
  firstName: "Vitor",
  lastName: "Raimundo",
  birthYear: 2003,
  job: "student",
  friends: ["Rei Delas", "Bartchola", "China in box"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(Vitor.calcAge());

console.log(Vitor.age);
console.log(Vitor.age);
console.log(Vitor.age);

// challenge
console.log(Vitor.getSummary());
