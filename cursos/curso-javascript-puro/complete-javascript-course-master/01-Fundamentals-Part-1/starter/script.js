// Switch
const day = "monday";

switch (day) {
  case "monday":
    console.log("Dia de estudar React");
    console.log("Dia de estudar Vim Motions");
    break;
  case "tuesday":
    console.log("Dia de estudar TypeScript");
    break;
  case "wednesday":
  case "thursday":
    console.log("Dia de estudar JavaScript");
    break;
  case "friday":
    console.log("Dia de estudar Tailwind");
    break;
  case "saturday":
  case "sunday":
    console.log("Dia de aproveitar fim de semana com meu nene :D");
    break;
  default:
    console.log("Not a valid day!");
} // com switch neste caso se torna mais legível e organizado, apesar de ser mais longo

// if (day === "monday") {
//   console.log("Dia de estudar React");
//   console.log("Dia de estudar Vim Motions");
// } else if (day === "tuesday") {
//   console.log("Dia de estudar TypeScript");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Dua de estudar JavaScript");
// } else if (day === "friday") {
//   console.log("Dia de estudar Tailwind");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Dia de aproveitar fim de semana com meu nene :D");
// } else {
//   console.log("Not a valid day!");
// }

// Diferença de Statements e Expressions:
3 + 4;
1991;
true && false && !falses;
// tudo acima são expressions e sempre vai produzir um valor

if (23 > 19) {
  const str = "23 is bigger"; // o valor que str recebe é uma expression
} // porém, isso como um todo é um statement, uma ordem que fazemos à máquina

// Exemplificando, o código abaixo aceitar apenas expressions dentro do consosle com ``,
// então, se tentermos usar um statement como o if acima, estará errado.
// Essa é a importância de saber o que são statements e o que são expressions

// console.log(`I'm ${2077 - 2003} years old ${if (23 > 19) {
//   const str = "23 is bigger";
// }}`);

// The conditional (ternary) operator
const age = 20;

// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "Water 💧"; // mais atual
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "Water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "Water 💧"}`);
