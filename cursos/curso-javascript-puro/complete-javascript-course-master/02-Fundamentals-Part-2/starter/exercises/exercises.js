// ex. 1
// function descritionCountry(country, population, capitalCity) {
//   const countryInfo = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return countryInfo;
// }

const { promptLoop } = require("readline-sync");

// const brazil = descritionCountry("Brazil", 213, "Brasília");
// const finland = descritionCountry("Finland", 6, "Helsinki");
// const Japan = descritionCountry("Tokyo", 122, "Tokyo");

// console.log(`${brazil}
// ${finland}
// ${Japan}`);

// ex. 2
// // function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// const percentageBrazil = percentageOfWorld1(213);
// const percentageChina = percentageOfWorld1(1425);
// const percentageIndia = percentageOfWorld1(1440);
// console.log(`${percentageBrazil}
// ${percentageChina}
// ${percentageIndia}`);

// // function declaration
// const percentageOfWorld2 = function (population) {
//   return `This country is ${
//     (population / 7900) * 100
//   }% of the world's population`;
// };

// const percentageMexico = percentageOfWorld2(126);
// const percentageGermany = percentageOfWorld2(83);
// const percentageEUA = percentageOfWorld2(331);
// console.log(`${percentageMexico}
// ${percentageGermany}
// ${percentageEUA}`);

// ex. 3
// Arrow Function
// const percentageOfWorld3 = (population) =>
//   `This country is ${(population / 7900) * 100}% of the world's population`;

// const percentageBolivia = percentageOfWorld3(12);
// const percentageEcuador = percentageOfWorld3(17);
// const percentageUK = percentageOfWorld3(67);
// console.log(`${percentageBolivia}
// ${percentageEcuador}
// ${percentageUK}`);

// ex. 4
const useDescribe = (country, population) => {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
  return description;
};

console.log(`${useDescribe("Brazil", 213)}
${useDescribe("UK", 67)}
${useDescribe("Mexico", 126)}`);

// ex. 5
const populations = [126, 83, 331, 213];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

// ex. 6
const neighbours = ["Chile", "Argentina", "Uruguay", "France"];

neighbours.push("Utopia");
// console.log(neighbours)

neighbours.pop();
// console.log(neighbours);

neighbours.includes("Chile")
  ? console.log("Yes, this is a country in South America :D")
  : console.log("Probably not a South American country :D");

neighbours[neighbours.indexOf("Argentina")] = "Argetina no longer communist"; // Este código é mais flexível por não depender de saber o índice do elemento que foi mutado
console.log(neighbours); 

// neighbours[1] = "Argentina no longer communist";
// console.log(neighbours);