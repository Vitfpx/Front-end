// // 1 - Criando uma função
// function minhaFuncao() {
//   console.log("Testando!");
// }

// minhaFuncao();
// minhaFuncao();


// // Função em variável
// const FuncaoEmVariavel = function () {
//   // Esse modelo apresenta mais consistência por se tratar de uma constate
//   console.log("Função em Variável!");
// };

// FuncaoEmVariavel();


// // Função com parâmetro
// function funcaoComParametro(txt) {
//   console.log(`Imprimindo: ${txt}`);
// }
// //Nesta forma o parâmetro pode ter vários significados, enquanto na forma abaixo ele tem apenas um
// funcaoComParametro("Imprimindo alguma coisa");
// funcaoComParametro("Outra função");

// const boi = "Xicolari";

// function xico(boi) {
//   // Manipulação do parâmetro para uma função ter mais de uma ação
//   console.log(`O xico é ${boi}`);
// }

// xico(boi);


// // 2 - return
// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function soma(n1, n2) {
//   return n1 + n2;
// }

// const resultado = soma(a, b);

// console.log(resultado);

// console.log(soma(c, d));


// // 3 - Escopo da função
// let x = 10;

// function testandoEscopo() {
//   let x = 20;
//   console.log(`X dentro da função é ${x}`);
// }

// testandoEscopo();

// console.log(`X fora da função é ${x}`);

// x = 15;

// testandoEscopo();

// console.log(`X fora da função é ${x}`);


// // 4 - Escopo aninhado
// let p = 10;

// function escopoAninhado() {
//   let p = 20;

//   if (true) {
//     let p = 30;

//     if (true) {
//       let p = 40;

//       console.log(x);
//     }

//     console.log(p);
//   }

//   console.log(p);
// }

// escopoAninhado();

// console.log(p);


// // 5 - Arrow function
// const testeArrow = () => {
//   console.log(`Esta é uma Arrow function`);
// }

// testeArrow(); 

// const parOuImpar = (n) => {
//   if(n % 2 === 0) {
//     console.log("Par");
//     return;
//   }

//   console.log("Ímpar");
// }

// parOuImpar(5);

// parOuImpar(10);


// // 6 - Mais sobre arrow functions
// const raizQuadrada = (x) => {
//   return x * x;
// }

// console.log(raizQuadrada(4));


// const raizQuadrada2 = (x) => x * x;

// console.log(raizQuadrada2(5));

// console.log(raizQuadrada2(17));


// const helloWorld = () => console.log("Hello World");

// helloWorld(); 


// // 7 - parametro opcional
// const multiplication = function(m, n) {
//   if(n === undefined) {
//     return m * 2;
//   } 

//   return m * n;

// }

// console.log(multiplication(5));

// console.log(multiplication(5, 4));


// const greeting = function(name) {
//   if(!name) {
//     console.log("Olá! <3");
//     return;
//   }

//   console.log(`Olá, ${name}! <33`);
// }

// greeting();

// greeting(`Vitor`);


// 8 - Valor default
const customGreeting = (name, greet = "Olá") => {
  return (`${greet}, ${name}!`);
}

console.log(customGreeting("Mr. HXVRMXN"));

console.log(customGreeting("Vitor", "Bom dia"));


const repeatText = (text, repeat = 2) => {
  for(let i = 0; i < repeat; i++) {
    console.log(text);
  }
}

repeatText("Testando");

repeatText("Agora repete 5 vezes", 5);


// 9 - Closure
function someFunction() {
  let txt = "Alguma coisa";

  function display() {
    console.log(txt);
  }

  display();
}

someFunction();


// 10 - Mais sobre closure
const multiplicateClosure = (n) => {
  return(m) => {
    return m * n;
  }
}

const c1 = multiplicateClosure(5);

const c2 = multiplicateClosure(10);

console.log(c1);

console.log(c2); 