// 1 - Arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Matheus", true, 2, 4.12, []];

console.log(itens);


// 2 - Mais sobre arrays
const arr = ["a", "b", "c", "d", "d"];

console.log(arr[0]);

console.log(arr[1]);

console.log(arr[13]);


// 3 - Propriedades
const numbers = [5, 4, 3];

console.log(numbers.length);

console.log(numbers["length"]);

const myName = "Matheus";

console.log(myName.length);


// 4 - métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "Alguma coisa";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));


// 5 - objetos
const person = {
  name: "Vitor",
  age: 20,
  job: "Student",
};

console.log(person);

console.log(person.name);

console.log(person.name.length);


// 6 - criando e deletando propriedades
const myGame = {
  name: "HXVRVMXN",
  style: "Co-op",
  currentPlayers: 2631,
};

console.log(myGame);

myGame.version = 2.3;

console.log(myGame);

delete myGame.currentPlayers;

console.log(myGame);


// 7 - mais sobre objetos
const obj = {
  a: "teste",
  b: true;
};

console.log(obj instanceof Object);

const obj2 = {
  c: [];
};

Object.assign(obj2, obj);

console.log(obj2);

