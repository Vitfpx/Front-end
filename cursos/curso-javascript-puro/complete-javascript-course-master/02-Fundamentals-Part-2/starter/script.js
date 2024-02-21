// Strict condition
"use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense === true;
// if (hasDriversLicense) console.log("I can drive :D");

// //////////////////////////
// // Functions
// function logger() {
//   console.log("My name is Jonas");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

// ////////
// // Function declaration and function expression

// // function declaration
// const age1 = calcAge1(1991);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// // A diferença é que a function declaration pode ser chamado antes de defini-la,
// // embora não seja uma boa ideia em muitos casos

// // arrow function
// // Em arrow functions de apenas uma linha, podemos tirar os parênteses
// // do parâmetro e também remover a palavra return, assim como também as chaves
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(2003);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearUntilRetirement(2003, "Vitor"));
// console.log(yearUntilRetirement(1997, "Vitoria"));

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
