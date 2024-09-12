'use strict';

//////////////////////
// default parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  // console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); // LH123, 1, 199
createBooking('LH123', 2, 800); // LH123, 2, 800
createBooking('LH123', 2); // LH123, 2, 398
createBooking('LH123', 5); // LH123, 5, 995
createBooking('LH123', undefined, 1000); // LH123, 1, 1000

/////////////////////////////////////////////////////
// how passing arguments works: value vs. reference
const flight = 'LH234';
const vitor = {
  name: 'Vitor Raimundo',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr, ' + passenger.name;

  if ((passenger.passport = 24739479284)) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, vitor);
// console.log(flight);
// console.log(vitor);

// is the same as doing...
const flightNum = flight;
const passenger = vitor;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

// O que estamos testando aqui é simplesmente como manipular o mesmo objeto com várias funções pode resultar em erros.
// Isso se deve à mudança do objeto original que a função causa, diferente do que ela faz com uma variável primitiva, como vimos anteriormente...
// newPassport(vitor);
// checkIn(flight, vitor);

// not reference only value
// Parâmetro por referência seria o que fizemos com o objeto, ou seja, passar um valor em uma função que vai alterá-lo, e não copiá-lo
// O JS não trabalha com reference, mas sim value. Isso pode ser confuso por que fizemos justamente o oposto com o objeto. Mas ainda sim esse reference é um value.
// Isso é explicado pois passamos UMA reference e não POR reference. Ainda é um value porem contendo um endereço de memória

///////////////////////////////////////////
// First-Class and Higher-Order Functions

// First-Class functions = trata as functions como first-class citizens
// 1. Significa que as funções são sempre tratadas como valores simples
// 2. functions são outro tipo de objeto, basicamente
// 3. Na prática, isso não existe, é apenas um conteiro para nortear o que se pode ou não fazer dentro de uma linguagem

// First-class permite a existência de higher-order function:
// 1. É uma função que recebe outra função como argumento, assim retornando uma nova função ou ambas as funções
// 2. Higher-order seria a função principal, o callback function é uma função dentro dele
// 3. Existe na prática, não apenas em conceito

//////////////////////////////////////////
// Function Accepting Callback Functions

// Low level functions
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  // low level function
  console.log('🙏');
};
// document.body.addEventListener('click', high5); // Higher-order level

// ['Vitor', 'Xico', 'Dugi'].forEach(high5);

// higher-order level é importante pois deixa os detalhes menores para functions menores, enquanto foca na lógica de alto nível do seu código, meio que tercerizar trabalhos menores...

// Meu exemplo: Em um aplicativo de tarefas, você quer ordenar as tarefas por prioridade (alta, média, baixa).
// Uso: Usar a função sort para ordenar as tarefas com base em sua prioridade.
const tasks = [
  { description: 'Shopping', priory: 'medium' },
  { description: 'Studying JavaScript', priory: 'high' },
  { description: 'Washing the car', priory: 'low' },
];

const sort = function (obj) {
  const output = [];
  for (const { description, priory } of obj) {
    output.push(
      `${
        priory[0].toUpperCase() + priory.slice(1)
      }: ${description.toLowerCase()}...`
    );
  }
  return output.join('\n');
};

const soft = function (obj, fn) {
  console.log(`${fn(obj)}`);
};
// soft(tasks, sort);
// Não ficou completa mas fiz o que foi estudado nesse último tópico

////////////////////////////////////
// functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
// greeterHey('Vitor');
// greeterHey('Macaco');

// greet('Hey')('Vitor'); // Neste caso, nem precisariamos criar a variável greeterHey

// Challenge arrow function
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

// greetArrow('Hello')('Vitor');

// const greeterHeyArrow = greetArrow('Hi');
// greeterHeyArrow('Vitor')

// Quando a função greet('Hey') for resolvida, vai retornar o código abaixo, então podemos dizer que greeterHey está armazenando a função retornada. A grande vantagem disso tudo é utilizar os dois parâmetros na mesma função...
// const greeterHey = function (name) {
//   console.log(`${greeting} ${name}`);
// };

//////////////////////////
// the call apply methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {} --- Forma antiga
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Vitor Raimundo');
// lufthansa.book(635, 'Mor Carneirinho');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EM',
  bookings: [],
};

// IMPORTANT 🩸💉
//  O código abaixo vai dar undefined nos valores pois como agora o book() que está chamando a função, e não mais so objeto.método, o this tenta puxar algo referente ao escopo global e nõo dentro da função lufthansa.book...

// Isso tudo acontece pois neste código não estamos copiando o "caminho" do objeto (lufthansa.book), mas sim o código da função dentro dele. Assim, o this perde seu sentido...

const book = lufthansa.book;

// Does Not work
// book(23, 'Bur amigus');

/////////
// call
// book.call(eurowings, 23, 'Guilherme Prampolin');
// console.log(eurowings);

// book.call(lufthansa, 239, 'João Costa');
// console.log(lufthansa);

// Isso nos da o poder de conseguir manipular o this e uma utilizar uma função para vários objetos, mesmo que esteja dentro de um em específico. Mas claro, as propriedades nesse caso tem que ser as mesmas (airline, iataCode)

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// book.call(swiss, 583, 'Larissa Mello');

//////////////////
// Aplly method

// Apply aceita apenas arrays como dados
const flightData = [583, 'Rosely de Fátima'];
// book.apply(swiss, flightData);
// console.log(swiss);

// Apply não é tão utilizado atualmente pois o código abaixo faz exatamente a mesma coisa, porém melhor
// book.call(swiss, ...flightData);

///////////////
// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Vitor Raimundo');
// bookEW23('Larisa Carneiro');

////////////////////////
// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane()

// O this abaixo começa a se referir ao botão pelo mesmo motivo anteriormente explicado no tópico IMPORTANT
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // precisamos PASSAR uma função e não CHAMÁ-LA, por isso bind ao invés de call

// Partial application
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200)); // 220

// Os dois códigos abaixo são a mesma coisa
const addVAT = addTax.bind(null, 0.23);
// addVAt = value => value + value * 0.23;

// A função deste código foi simplesmente definir um valor padrão para o rate. Null foi utilizado pois não há nenhum this dentro do addTax

// console.log(addVAT(100)); // 123
// console.log(addVAT(23)); // 28.29

const addTaxRate = rate => value => value + value * rate;
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

const addVAT2 = addTax(0.23);
// console.log(addVAT(100)); // 123
// console.log(addVAT(23)); // 28.29

/////////////////////////
// Coding challenge 1

// Let's build a simple poll app!
// A poll has a question, an array of options from which people can, and an array with the number of replies for each option. This data is in the starter poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//    1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//    What is your favourite programming language?
//    0: JavaScript
//    1: Python
//    2: Rust
//    3: C++
//    (Write option number)
//    1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)

// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?

// Test data for bonus:
// Data 1: [5, 2, 3]
// Data 2: [1, 5, 3, 9, 6, 1]

// Hints: Use many of the tools you learned about in this and the last section

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:  C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = -1;
    while (answer < 0 || answer > 3) {
      answer = prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      );
    }
    this.answers[answer]++;
    poll.displayResults();
    poll.displayResults('string');
  },
  displayResults(type = 'array') {
    type === 'array' && console.log(this.answers);
    type === 'string' &&
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// Data 1: [5, 2, 3]
// Data 2: [1, 5, 3, 9, 6, 1]

/////////////////////////////////////////////
// Immediately invoked function espressions
const runOnce = (function () {
  console.log('This will never run again...Or not');
})(
  // IIFE
  function () {
    console.log('This will never run again. With regular function');
    const isPrivate = 23;
  }
)();

// console.log(isPrivate); // Não funciona

(() => console.log('This will never run again. With arrow function'))();
