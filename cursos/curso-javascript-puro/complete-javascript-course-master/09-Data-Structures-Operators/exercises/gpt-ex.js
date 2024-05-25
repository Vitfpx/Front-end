// Destructuring Arrays:

// ex.1
const numbers = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = numbers;
console.log(a, b, c, d, e);

// ex.2
const colors = ['red', 'green', 'blue', 'yellow'];

const [color1, color2, ,] = colors;
console.log(color1, color2);

// Destructuring Objects:

// ex.1
const person = {
  name: 'Alice',
  age: 30,
  city: 'New York',
};

const { name, age } = person;
console.log(name, age);

// ex.2
const settings = {
  theme: 'dark',
  fontSize: 14,
};

const { theme, fontSize, fontWeight = 400 } = settings;
console.log(theme, fontSize, fontWeight);

// Spread Operator:

// ex.1

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArr = [...arr1, ...arr2];
console.log(newArr);

// ex.2
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const newObj = {
  ...obj1,
  ...obj2,
};
console.log(newObj);

// LAST EX
const user = {
  id: 1,
  username: 'jslover',
  details: {
    name: 'John',
    age: 25,
  },
};

const {
  username,
  details: { name: userName, age: userAge },
} = user;

console.log(username, userName, userAge);

// Se você não renomear name e age, vai dar erro dizendo que ja foram declarados
