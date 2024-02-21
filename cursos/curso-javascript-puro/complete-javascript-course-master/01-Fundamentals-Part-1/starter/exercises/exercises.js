// ex. 1
let country = "Brazil";
let continent = "South America";
let population = 213.3;

console.log(country);
console.log(continent);
console.log(population);

// ex. 2
const isIsland = false;
const language = "português";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// ex. 3
// language = "Frances"
// console.log(language)

// ex. 4
console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population > 33);

// ex. 5
const description = `${country} is in ${continent} and its ${population} million people speak ${language}`;

console.log(description);

// ex. 6
// population = 130;
// population = 13
if (population > 33) {
  console.log(
    `${country}'s population is ${population - 33} million above average`
  );
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

// ex. 7
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> 617
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

// ex. 8
// const numNeighbours = Number(prompt(
//   "How many neighbour countries does your contry have?"
// ));

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border!");
// } else {
//   console.log("No borders!");
// }

// ex. 9
if (language === "ingles" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// ex. 10
// const scoreDolphins = (96 + 108 + 89) / 3
// const scoreKoalas = (88 + 91 + 110) / 3
// console.log(scoreKoalas, scoreDolphins)

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy")
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy")
// } else {
//     console.log("Both win the trophy")
// }
// Bonus 1:
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreKoalas, scoreDolphins);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy 😭");
}

// ex. 11
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

// ex. 12
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average.`
);

// ex. 13
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)
