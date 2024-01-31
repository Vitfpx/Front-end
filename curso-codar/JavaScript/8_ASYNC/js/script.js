// 1 - setTimeout
// console.log("Ainda não executou!");

// setTimeout(function () {
//   console.log("Requisição Assíncrona");
// }, 5000);

// setTimeout(() => {
//   // Feito com arrow function

//   console.log("Só mais um pouco");
// }, 3000);

// 2 - setInterval
// console.log("Ainda não começou!")

// setInterval(() => {
//   console.log("Intervalo Assíncrono")
// }, 3000);

// console.log("Ainda não começou! 2")

// 3 - Promise
// const promessa = Promise.resolve(5 + 5);

// console.log("Algum código...");

// promessa
//   .then((value) => {
//     console.log(`A soma é ${value}`);
//     return value;
//   })
//   .then((value) => value - 1)
//   .then((value) => console.log(`Agora é ${value}`));

// console.log("Outro código...");

// 4 - Falha na Promise
// Promise.resolve(4 * "asd")
//   .then((n) => {
//     if (Number.isNaN(n)) {
//       throw new Error("Valores Inválidos...");
//     }
//   })
//   .catch((err) => console.log(`Um erro ocorreu: ${err}`));

// 5 - reject
// function checkNumber(n) {
//   return new Promise((resolve, reject) => {
//     if (n > 10) {
//       resolve(`maior que 10`);
//     } else {
//       reject(new Error("Número muito baixo"));
//     }
//   });
// }

// const a = checkNumber(20);

// const b = checkNumber(10);

// console.log(a, b);

// a.then((v) =>
//   console.log(`O resultado é ${v}`)
//     .catch((err) => console.log(`Um erro ocorreu: ${err}`))
// );

// b.then((v) =>
//   console.log(`O resultado é ${v}`))
//     .catch((err) => console.log(`Um erro ocorreu: ${err}`)
// );

// 6 - Resolvendo várias promises
//
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve(10);
//   }, 1000);
// });

// const p2 = Promise.resolve(10 + 10);

// const p3 = new Promise((resolve, reject) => {
//   if (30 > 10) {
//     resolve(30);
//   } else {
//     reject("Error");
//   }
// });

// Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7 - Async functions

// async function somarComDelay(a, b) {
//   return a + b;
// }

// somarComDelay(2, 4).then((value) => {
//   console.log(`O valor da soma é: ${value}`);
// });

// console.log("Teste async");

// 8 - Async await

// function resolveComDelay() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Resolve a Promise");
//     }, 2000);
//   });
// }

// async function chamadaAsync() {
//   console.log("Chamando a Promise, e esperando o resultado");
//   const result = await resolveComDelay();
//   console.log(`O resultado é ${result}`);
// }

// chamadaAsync();

// 9 - Generators

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
