// ex. 1
// function descritionCountry(country, population, capitalCity) {
//   const countryInfo = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return countryInfo;
// }

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

// console.log(`${useDescribe("Brazil", 213)}
// ${useDescribe("UK", 67)}
// ${useDescribe("Mexico", 126)}`);

// ex. 5
const populations = [126, 83, 331, 213];
// console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
// console.log(percentages);

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
// console.log(neighbours);

// neighbours[1] = "Argentina no longer communist";
// console.log(neighbours);

// ex. 7, ex. 8, ex. 9
const myCountry = {
  country: "Brazil",
  capital: "Brasília",
  language: "Português",
  population: 213,
  neighbours: ["Argentina", "Chile", "Uruguay"],

  describe: function () {
    return `${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },

  checkIsland: function () {
    return (this.isIsland = !Boolean(this.neighbours.length));
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

// console.log(
//   `${myCountry.country} has ${myCountry.population} million finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

myCountry.population += 2;
// console.log(myCountry)
myCountry["population"] -= 2;
// console.log(myCountry)

// ex. 10
for (let voter = 1; voter < 51; voter++) {
  // console.log(`Voter number ${voter} is currently voting`);
}

// ex. 11
// const populations = [126, 83, 331, 213];

const percentage2 = [];

for (let i = 0; i < populations.length; i++) {
  percentage2.push(percentageOfWorld1(populations[i]));
}

// console.log(percentage2);

// ex. 12
const listenOfNeighbours = [
  ["Canada", "Mexico"], //0
  ["Spain"], //1
  ["Norway", "Sweden", "Russia"], //2
];

// console.log(listenOfNeighbours.length);

// for (let neighbours = 0; neighbours < listenOfNeighbours.length; neighbours++) {
//   for (let i = 0; i < listenOfNeighbours[neighbours].length; i++) {
//     console.log(`Neighbour: ${listenOfNeighbours[neighbours][i]}`);
//   }
// }

// ex. 13
const percentage3 = [];
let i = 0;
while (i < populations.length) {
  percentage3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentage3);

// ex extra
const randomArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const arrayMedia = [];

const media = function (arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return (soma /= arr.length);
};

const totals = [1, 2, 3, 4, 5];

console.log(media(randomArray));
console.log(media(totals));
