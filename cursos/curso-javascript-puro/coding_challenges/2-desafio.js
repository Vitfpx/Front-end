const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    // team1: 11.33,
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// for (const [goal, player] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1}: ${player}`);
// }
// Da certo pois scored é um array, não um objeto

// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// O código abaixo dará erro pois game.odds é um objeto
// for (const odd of game.odds) console.log(odd);

// const oddsProperties = Object.values(game.odds);

// let averageOdds = 0; // Precisa ficar fora pois se estiver dentro do loop, ele será zerado toda vez que o loop rodar

// for (const odd of oddsProperties) averageOdds += odd;
// averageOdds /= oddsProperties.length;
// console.log(averageOdds);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them(except for "draw"). Hint: Note how the odds and the game objects have the same property names 😜🤭

// const oddEntries = Object.entries(game.odds);

// for (const [team, odd] of oddEntries) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// // 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// // {
// //  Gnarby: 1,
// //  Hummels: 1,
// //  Lewandowski: 2
// // }

// let scorers = {};

// for (const player of game.scored) {
//   if (scorers[player]) {
//     scorers[player] += 1;
//   } else {
//     scorers[player] = 1;
//   }
// }

// console.log(scorers);
