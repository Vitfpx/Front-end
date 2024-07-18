'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta({ ing1, ing2, ing3 }) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); // Parece confuso porém você só está passando um objeto como parâmetro da função do método orderDelivery. E como qualquer parâmetro, as informações vão substituí-lo

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

/////////////////////////////////////
// Destructuring Arrays

// const arr = [2, 3, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; // Apesar de parecer um array, sempre que o conjunto de elementos estiver do lado esquerdo, ele será uma desestruturação
// console.log(x, y, z);
// console.log(arr);

let [main, , secondary] = restaurant.categories; // O espaço serve para pular uma categoria sendo [0, 2] no array
// console.log(main, secondary);

/////////////////////////////////////
// Switching Variables

const temp = main; // Armazenar a variável pois o valor dela mudará na linha abaixo, e portanto, na secondary = main (secondary), então, secondary = temp (main)
main = secondary;
secondary = temp;
console.log(main, secondary);

// Fazendo o mesmo do código acima, porém, com destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function

// console.log(restaurant.order(1, 0)); // Normal
const [starter, mainMeal] = restaurant.order(0, 1); // Destructuring, é mais útil por criar duas variáveis de uma vez
// console.log(starter, mainMeal);

/////////////////////////////////////
// Nested Destructuring

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested; // Para mostrar um elemento como array

const [i, , [j, k]] = nested; // Para mostrar os elementos como elementos. Seria como usar destructuring dentro do destructuring
// console.log(i, j, k);

/////////////////////////////////////
// Default Values

// const [p, q, r] = [8, 9]; // Undefined no último valor
const [p = 0, q = 0, r = 0] = [8, 9]; // Define valores padrões caso não exista um valor designado...
// console.log(p, q, r);

/////////////////////////////////////
// Destructuring Objects

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

////////////////////////////////////
// Named
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

//////////////////////////////////
// Default Values

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//////////////////////////////////
// Mutating Variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

//////////////////////////////////
// Nested Objects

// const { fri } = openingHours;
// console.log(fri);
const {
  [weekdays[4]]: { open: o, close: c },
} = openingHours;
// console.log(o, c);

/////////////////////////////////////
// Spread Operators

const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// O código abaixo daria errado pois o unshift retorna a quantidade de elementos, não o array
// const badNewArr = arr.unshift(1, 2);
// console.log(badNewArr); // 5

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // Como o spread operator trabalha individualmente no valor registrado, exibir o próprio ...newArr tirará os valores de dentro do array
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // Adicionou um valor ao objeto (array) mainMenu

///////////////////////////////
// Copy Array

const mainMenuCopy = [...restaurant.mainMenu];

///////////////////////////////
// Join 2 arrays

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// const menu = [...restaurant.starterMenu, ...mainMenuCopy]; Mesmo Resultado do código acima, achei mais intuitivo nesse contexto...

// console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Vitor';
// const letters = [...str, '', 'B.'];
// console.log(letters); // Como trabalha com valores individuais, a string fica dividida em cada letra (valor)
// console.log(...letters); // Valores fora do array
// console.log(...str);
// console.log(`${...str} Barbosa Raimundo`); 🚫

// Spread Operator apenas pode ser utilizado como parâmetro em uma função ou ao criar um array

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // Jeito podre de se fazer
// restaurant.orderPasta(...ingredients); // Jeito bom de se fazer
// console.log(...ingredients);

// //////////////////////////////
// // Objects with Spread Operator

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// /////////////////////////////////////
// // Rest operators

// // 1) Destructuring

// // SPREAD, because on RIGHT side of =
// const arr1 = [1, 2, ...[3, 4]];
// console.log(arr1);

// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); // Ao invés de tirar do array ele volta para um novo array

// const [pizza, , risotto, ...otherFood] = [
//   // O rest operator tem que ser sempre o último item
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ]; // A parte da esquerda faz um array gigante com todos os elementos e depois ele é desestruturado colocando cada item conforme o correspondente na parte esquerda...
// // console.log(  ...restaurant.mainMenu, ...restaurant.starterMenu,); // Para entender melhor

// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); // Separamos um elemento do resto dos arrays de openingHours

// // 2) Functions
// const add = function (...numbers) {
//   // Pega vários elementos e "empacota" em um array
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// /////////////////////////////
// // Short-circuiting (|| and &&)

// console.log('======= OR =======');
// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Vitor'); // 3 (pois é o primeiro valor verdadeiro encontrado)
// console.log('' || 'Vitor'); // 'Vitor' (pois '' é undefined, portanto, falso)
// console.log(true || 0); // true
// console.log(null || undefined); // null
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello'

// // Caso a linha abaixo não existisse e, portanto, numGuests também não, o resultado daria 10
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// // Caso o número de convidados seja 0, o resultado daria 10, concertaremos isso na proxima aula...
// const guests2 = restaurant.numGuests || 10; // Forma mais fácil de se fazer, pois não precisa utilizar if / else
// console.log(guests2);

// console.log('======= AND =======');
// console.log(0 && 'Vitor'); // 0
// console.log(7 && 'Vitor'); // 'Vitor'

// console.log('Hello' && 23 && null && 'Vitor'); // null

// if (restaurant.orderPizza) restaurant.orderPizza('Mushrooms', 'Spinach');

// restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach');

// //////////////////////////////////
// // Nullihsh Coalescing Operator
// restaurant.numGuests = 0;
// const guests = restaurant.guests || 10;
// console.log(guests);

// // Nullish: Null and Undefined (NOT 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10; // ?? (nullish ... operator) leva apenas null e undefined como elementos nulos, enquanto 0 e '' são elementtos verdadeiros
// console.log(guestsCorrect);

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Vitor Raimundo',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
// console.log(rest1);
// console.log(rest2);

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

///////////////
// For-of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`); // Modo antigo de fazer

for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// Caso se esqueça da utilidade do for of loop, lembre-se que é o modo como pegamos todas as propriedades específicas que queremos de todos os livros neste caso. Por exemplo: Como posso pegar todos os 'pages' de todos os livros e somá-los? Utilizando um loop de for of e não utilizando books.pages pois isso não funciona

//////////////////////
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

console.log('-----------EXAMPLE-----------');
// Example
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Vitor', email: 'vitorbarbosaraimundo68@gmail.com' }];

console.log(users[0]?.name ?? 'User array empty'); // Aqui o ? esta verificando quantos usuários existem pois esta verificando o primeiro elemento do array, se não obtiver o primeiro, não terá mais nenhum, lógicamente

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

////////////////////
// Looping Objects

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) openStr += `${day}, `; // Esse modelo você usará quando o 'for' precisar mudar apenas uma parte da frase, e não repeti-la
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

/////////
// Sets
// Sets são basicamente arrays porém seus valores são únicos (não se repetem) e sua ordem não importa. Set tem alguns métodos diferentes

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);
console.log(new Set('Vitor'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Onion Rings'));
orderSet.add('Bread');
orderSet.add('Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // [...example] para transformar um Set em um array
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('vitor barbosa raimundo').size); // Analisa todas as letras ÚNICAS. Espaço em branco também conta...

//////////
// Maps
// Maps são estruturas de dados que podemos usar para mapear valores para chaves. Armazenados em pares de valores-chaves em mapas, como ('odd', 1.33). A maior diferença entre maps e objects é que em maps podemos usar quaisquer tipos de dados...

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2); // (2,'Lisbon, Portugal')
// rest.clear();
// console.log(rest.size);

// rest.set([1, 2], 'Test') // Isso não funcionará
const arr2 = [1, 2];
rest.set(arr2, 'Test');
console.log(rest.get(arr2));
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

//////////////////
// Maps parte. 2
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(openingHours);
console.log(Object.entries(openingHours)); // Como o openingHours tem uma estrutura parecida com o map, podemos convertê-lo facilmente. O Object.entries está convertendo o objeto para um array de pares de chave-valor
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Map pode ser usado de forma iterável pois ja tem Object.entries() composto nele, como foi feito abaixo

// Quiz app
console.log(question.get('question'));

for (const [key, value] of question)
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// Como a sentença abaixo será true, o question.get de fora vai pegar o true como resposta, que no caso está relacionado ao correct do map question
// console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log([...question.entries()]); // O mesmo da linha acima
console.log([...question.keys()]); // Lado esquerdo dos maps
console.log([...question.values()]); // Lado direito dos maps

/////////////////////////////////
// Whick Data Structure to Use?

// O tipo de dado depende do que é necessário para o momento.
// Array/Set: Caso necessite de uma lista simples de elementos
// Object/Map: Caso necessite de uma lista com informações chaves-valores, ou seja, mais detalhado

// No exemplo abaixo o primeiro Object precisa ser um Object pois seus elementos tem uma Key e também um Value. Enquanto os Objects dentro do array de "recipes" só precisam das informações que já estão dentro deles mesmos, por isso um array
// Example:
// { <--- Object
//   'count': 3,
//   'recipes': [ <--- Array
//     {
//        'asdad': 'asmdklamd',
//        'asdad': 'asmdklamd',
//        'asdad': 'asmdklamd',
//        'asdad': 'asmdklamd',
//        'asdad': 'asmdklamd',
//        'asdad': 'asmdklamd',
//     },
//     { <--- Object
//        'asdad': 'asmdklamd',
//        'asdad': 'asmdklamd',
//        'asdad': 'asmdklamd',
//        'asdad': 'asmdklamd',
//        'asdad': 'asmdklamd',
//        'asdad': 'asmdklamd',
//     },
//     {
//        'asdad': 'asmdklamd',
//        'asdad': 'asmdklamd',
//        'asdad': 'asmdklamd',
//        'asdad': 'asmdklamd',
//        'asdad': 'asmdklamd',
//        'asdad': 'asmdklamd',
//     }
//   ]
// }

// Motivos para usar Arrays:
// --> Use quando você precisar de listas ordenadas de valores (que podem conter valores duplicados)
// --> Use quando você precisar manipular dados, pois com os métodos isso fica muito mais fácil

// Motivos para usar Sets:
// --> Use quando você precisar trabalhar com valores úncios
// --> Use quando alta-performance é realmente importante
// --> Use para remover duplicatas dos arrays

// Motivos para usar Objects:
// --> Mais "tradicional" key/value armazenam ("Abuso" de objects)
// --> Mais facil para escrever e acessar valores com . e []
// --> Use quando precisar incluir funções(que viram métodos dentro dos Objects)
// --> Use quando for trabalhar com JSON

// Motivos para usar Maps:
// --> Melhor performance
// --> Keys podem ter qualquer tipo de dado
// --> Fácil de iterar
// --> Fácil de computar o tamanho
// --> Use quando você precisar mapear as Keys para Values
// --> Use quando você precisar de Keys que não sejam Strings pois com Objects é mais fácil

//////////////
// Strings
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

// Não muda realmente a String, como ela é primitiva, não é possível mutá-la, a não ser que utilize outra variável para receber essa mutação
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😤');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Strings podem usar métodos pois behind the scenes o JS converte uma String para um objeto com o mesmo conteúdo dentro dele. Isso é chamado de boxing pois coloca string em uma caixa.

console.log(new String('Vitor')); // É isso que o JS faz nos bastidores ao chamarmos um método para uma String. Quando a operação é concluída, ele volta a ser primitivo
console.log(typeof new String('Vitor')); // Object
console.log(typeof new String('Vitor').slice(1)); // Object