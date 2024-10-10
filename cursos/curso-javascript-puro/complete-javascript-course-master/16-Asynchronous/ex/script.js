'use strict';

// REVISAO

// Exercício 1: Introdução ao Assíncrono com setTimeout
// setTimeout(() => {
//   console.log('Message');
//   setTimeout(() => {
//     console.log('Other message');
//   }, 3000);
// }, 3000);

// Exercício 2: Fazendo uma Requisição AJAX
// const countryName = function () {
//   fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => {
//       const {
//         name: { common },
//         capital,
//       } = data[0];
//       console.log(`Country: ${common}\nCapital: ${capital}`);
//     });
// };
// countryName();

// Exercício 3: Criando Promises
// const wait = function (sec) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, sec * 1000);
//   });
// };

// wait(2).then(() => {
//   return console.log('Esperando 2 segundos');
// });

// Exercício 4: Consumindo Promises com fetch()
// const gitData = function (username) {
//   fetch(`https://api.github.com/users/${username}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       const { name, public_repos } = data;
//       console.log(
//         `My name is ${name} and I have ${public_repos} repositories.`
//       );
//     });
// };
// gitData('vitfpx');

// Exercício 5: Encadeando Promises
// const getCountryAndNeighbour = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(res => res.json())
//     .then(countryData => {
//       const {
//         name: { common: countryName },borders
//       } = countryData[0];
//
//        if (!borders || borders.length === 0)
//           console.log(`${countryName} não tem vizinhos.`);

//       fetch(`https://restcountries.com/v3.1/alpha/${neighbout}`)
//         .then(res => res.json())
//         .then(borderData => {
//           const {
//             name: { common: neighbourName },
//           } = borderData[0];
//           console.log(`Country: ${countryName}\nCapital: ${neighbourName}`);
//         });
//     });
// };
// getCountryAndNeighbour('portugal');

// Exercício 6: Tratando Promises Rejeitadas
// const getCountryAndNeighbour = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(res => {
//       if (!res.ok) throw new Error('Problem getting country');
//       return res.json();
//     })
//     .then(countryData => {
//       const {
//         name: { common: countryName },
//         borders,
//       } = countryData[0];
// 
//      if (!borders || borders.length === 0) {
//         console.log(`${countryName} não tem vizinhos`);
//        return;
//      }
// 
//       return fetch(`https://restcountries.com/v3.1/alpha/${borders}`)
//         .then(res => {
//          if (!res.ok) throw new Error('Problem getting neighbour');
//           return res.json()
//          })
//         .then(borderData => {
//           const {
//             name: { common },
//           } = borderData[0];
//           console.log(`Country: ${countryName}\nCapital: ${common}`);
//         });
//     })
//     .catch(err => console.log(`ERROR: ${err.message}`));
// };
// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('a');
