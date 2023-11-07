// // 1 - Arrays
// const lista = [1, 2, 3, 4, 5];

// console.log(lista);

// console.log(typeof lista);

// const itens = ["Matheus", true, 2, 4.12, []];

// console.log(itens);


// // 2 - Mais sobre arrays
// const arr = ["a", "b", "c", "d", "d"];

// console.log(arr[0]);

// console.log(arr[1]);

// console.log(arr[13]);


// // 3 - Propriedades
// const numbers = [5, 4, 3];

// console.log(numbers.length);

// console.log(numbers["length"]);

// const myName = "Matheus";

// console.log(myName.length);


// // 4 - métodos
// const otherNumbers = [1, 2, 3];

// const allNumbers = numbers.concat(otherNumbers);

// console.log(allNumbers);

// const text = "Alguma coisa";

// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase);

// console.log(text.indexOf("g"));


// // 5 - objetos
// const person = {
//   name: "Vitor",
//   age: 20,
//   job: "Student",
// };

// console.log(person);

// console.log(person.name);

// console.log(person.name.length);


// // 6 - criando e deletando propriedades
// const myGame = {
//   name: "HXVRVMXN",
//   style: "Co-op",
//   currentPlayers: 2631,
// };

// console.log(myGame);

// myGame.version = 2.3;

// console.log(myGame);

// delete myGame.currentPlayers;

// console.log(myGame);


// // 7 - mais sobre objetos
// const obj = {
//   a: "teste",
//   b: true,
// };

// console.log(obj instanceof Object);

// const obj2 = {
//   c: [],
// };

// Object.assign(obj2, obj);

// console.log(obj2);

// console.log(obj);


// // 8 - conhecendo melhor os objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(myGame));

// console.log(Object.entries(myGame));


// // 9 - Mutability
// const a = {
//   name: "Lari Paçoquinha <3"
// };

// const b = a;

// console.log(a);
// console.log(b);

// console.log(a === b);

// a.age = 19;

// console.log(a);
// console.log(b);

// delete b.age;

// console.log(a);
// console.log(b);


// // 10 - Loop em array
// const users = ["Vit", "Lari", "Xiquin", "Bartas"];

// for(let i = 0; i < users.length; i++) {
//   console.log(`Listando o usuário: ${users[i]}`);
// }


// // 11 - push e pop
// const array = ["a", "b", "c"];

// array.push("d");

// console.log(array);

// console.log(array.length);

// array.pop(); // Sempre retira o último índice

// console.log(array);

// const itemRemovido = array.pop(); // Também retira um índice, porém, ele também retorna o item retirado

// console.log(itemRemovido);

// console.log(array);

// array.push("z", "x", "y"); // Adiciona os itens descritos

// console.log(array);


// // 12 - shift e unshift
// const letters = ["a", "b"];

// const letter = letters.shift(); // Ao invés de retirar o último índice e retorná-lo, isso é feito ao primeiro índice

// console.log(letter);

// console.log(letters);

// letters.unshift("p", "q", "r"); // Adiciona os elementos no começo do array

// console.log(letters);

// letters.unshift("z");

// console.log(letters);


// // 13 - indexOf e lastIndexOf
// const games = ["Valorant", "League Of Legends", "Elden Ring", "Sim Life", "Valorant"];
// // Os códigos abaixo chamam o índice. 
// console.log(games.indexOf("League Of Legends"));
// console.log(games.indexOf("Elden Ring"));

// // Os códigos abaixo chamam o valor e não o índice. 
// // se fosse: 
// // console.log(games.indexOf("EldenRing")]); Então resultaria no índice.
// console.log(games[2]);
// console.log(games[games.indexOf("Elden Ring")]); 

// console.log(games.lastIndexOf("Valorant"));

// console.log(games.indexOf("Sim City"));
// console.log(games.lastIndexOf("Sim City"));


// // 14 - slice
// const testeSlice = ["a", "b", "c", "d", "e", "f"];

// const subArray = testeSlice.slice(2, 4); // Demonstra os elementos do índice 2 ao 4 menos o último

// console.log(subArray);

// console.log(testeSlice);

// const subArray2 = testeSlice.slice(2, 4 + 1); // Assim é feito para mostrar o último também

// console.log(subArray2);

// const subArray3 = testeSlice.slice(10, 20); // Índices inexistentes resultam em arrays vazio

// console.log(subArray3);

// const subArray4 = testeSlice.slice(2); // Índice 2 em diante incluindo o último índice

// console.log(subArray4);


// // 15 - foreach
// const nums = [1, 2, 3, 4, 5];

// nums.forEach((numero) => {
//   console.log(`O número é ${numero}`);
// });

// // O jeito abaixo é uma forma que parece ser mais simples de fazer
// nums.forEach((numero) => console.log(`O número é ${numero}`));

// const movies = [
//   { title: "First movie", category: "Action" }, // Title é a propriedade, seu valor é a chave
//   { title: "Second movie", category: "Supernatura" },
//   { title: "Third movie", category: "Fiction" },
// ];

// movies.forEach((movie) => { 
//   // Normalmente nome do array é no plural e no nome dos itens no individual
//   console.log(`Exibindo post: ${movie.title}, da categoria: ${movie.category}`);
// });


// const moviesAvaliable = [
//   { 
//     cinema: "Cinemark", 
//     movies: ["Talk To Me", "The Nun 2", "The Saw X"], 
//     ticketValue: 30
//   },
//   { 
//     cinema: "Cinépolis", 
//     movies: ["Five Nights at Freddy's", "Smile", "Talk To Me"], 
//     ticketValue: 40
//   },
//   { 
//     cinema: "Cine Belas Artes", 
//     movies: ["Sound Of Freedom", "The Saw X", "The Pope's exorcist"], 
//     ticketValue: 25
//   },
//   { 
//     cinema: "Cinesala", 
//     movies: ["The Nun 2", "The Saw X", "Smile"], 
//     ticketValue: 30 
//   },
//   { 
//     cinema: "Kinoplex", 
//     movies: ["The Pope's exorcist", "Sound Of Freedom", "Five Nights at Freddy'"],
//     ticketValue: 35
//   },
// ];

// moviesAvaliable.forEach((movie) => {
//   console.log(
//     `No cinema: ${movie.cinema}, estão em cartaz os filmes: ${movie.movies.join(", ")}. O ingresso está no valor de ${movie.ticketValue}`
//   )
  
// });


// 16 - includes
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));

console.log(brands.includes("KIA"));

if (brands.includes("BMW")) {
  console.log("Há carros da marca BMW.")
}


// 17 - reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);


// 18 - trim
const trimTest = '  testando\n  '

console.log(trimTest);

console.log(trimTest.trim());

console.log(trimTest.length);

console.log(trimTest.trim().length);


// 19 - padStart
const numPhone = "19 97417-";

const newNumber = numPhone.padStart(13, "+55 ");

console.log(numPhone);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(17, "8594");

console.log(testePadEnd);


// 20 - split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" r");

console.log(arrayDaFrase);


// 21 - join
const fraseDeNovo = arrayDaFrase.join(" r");

console.log(fraseDeNovo);

const jogosParaComprar = ["Dark Souls", "Elden Ring", "Mortal Kombat 1", "Stardew Valley"];

const fraseDeCompra = `Preciso comprar: ${jogosParaComprar.join(" / ")}.`;

console.log(fraseDeCompra);


// 22 - repeat
const palavra = "testando ".repeat(2);
// Dessa forma serão exibidas 4 vezes pois 2 * 2 = 4
console.log(palavra.repeat(2));


// 23 - rest operator
const somaInfinita = (...args) => {
  // Para relembrar: https://www.youtube.com/watch?v=f4JX8WTqkZs&t=12s&ab_channel=ClubeFull-Stack
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 2, 4, 8, 16, 32, 64, 128));


// 24 - for...of
// Para relembrar: https://www.youtube.com/watch?v=HFG_p4K2MAc&ab_channel=DevAprender%7CJhonatandeSouza
const somaInfinita2 = (...args) => {
  let total = 0

  for (num of args) {
    total += num
  }

  return total;
};

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// PARA EXEMPLIFICAR
let notas = [16, 99, 27, 84, 30, 77, 39, 61, 48, 53 , 91, 100, 10];
let aprovados = 0;
let reprovados = 0;

for (media of notas) {
  // A linha abaixo significa todo o código de if e else comentado
  media>60?aprovados++:reprovados++; 

  // if (media > 60) {
  //   aprovados++;
  // } else {
  //   reprovados++;
  // }

}

console.log(`O número de alunos aprovados é: ${aprovados}\nO número de alunos reprovados é: ${reprovados}`);


// 25 - destructuring em objetos
// Para relembrar: https://www.youtube.com/watch?v=ruoHSuTKp-U&t=312s&ab_channel=MaykBrito
const userDetail = {
  firstName: "Vitor",
  lastName: "Raimundo",
  job: "Student",
};

// const primeiroNome = userDetails.firstName;
// const ultimoNome = userDetails.lastName;
// const trabalho = userDetails.job;
// O código abaixo é igual ao de cima, porém, mais moderno

const { firstName, lastName, job } = userDetail;

console.log(firstName, lastName, job);
// renomear variáveis
const { 
  firstName: primeiroNome,
  lastName: ultimoNome,
  job: estudante,
} = userDetail;

console.log(primeiroNome);
console.log(ultimoNome);
console.log(estudante);


// 26 - destructuring em arrays
const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC, DDD] = myList;

console.log(veiculoA, veiculoB, veiculoC);

console.log(DDD);


// 27 - JSON
const myJson = 
  '{"name": "Vitor", "Age": 20, "skills": ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.JS", "TypeScript."]}';

  console.log(myJson);

  console.log(typeof myJson);


// 28 - JSON para objetos e objetos para JSON
// Transformando em objeto
const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(myObject.name);

console.log(typeof myObject);

// JSON inválido
const badJson = '{"name": Matheus, "agr": 20}'

// const myBadObject = JSON.parse(badJson);
myObject.isOpenToWork = true;

console.log(myObject);

// Transformando em JSON
const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);

console.log(typeof myNewJson);