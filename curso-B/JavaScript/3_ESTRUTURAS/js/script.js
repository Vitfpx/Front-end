// // 1 - Variável
// let nome = "Matheus";

// console.log(nome);
// console.log("Matheus");

// nome = "Matheus" + " Battisti";

// console.log(nome);

// const idade = 31;

// console.log(idade);

// idade = 32; const não deixa a variável mudar de valor

// 2 - Mais Sobre Variáveis

// let 2teste = "Inválido" ERRO
// let @teste = "Inválido"  ERRO

// let a = 10;
//   b = 20;
//   c = 30;

// console.log(a, b, c);

// const nomecompleto = "Matheus Battisti"

// const nomeCompleto = "João da Silva"

// console.log(nomecompleto);

// console.log(nomeCompleto);

// let _teste = "OK"; // PERMITIDO

// let $teste = "OK"; // PERMITIDO

// console.log(_teste, $teste);

// // 3 - Prompt
// const age = prompt("Digite a sua idade:")

// console.log(`Você tem ${age} anos.`)

// // 4 - Alert
// alert("Testando");

// const z = 10;

// console.log(`O número é ${z}`)

// // 5 - Math
// console.log(Math.max(5, 2, 1, 10)); // Escolhe o maior número

// console.log(Math.min(5, 2, 1, 10)); // Escolhe o menor número

// console.log(Math.floor(5.14)); // Arredonda para baixo

// console.log(Math.ceil(5.14)); // Arredonda para cima

// // 6 - Console
// console.log("Teste!");

// console.error("ERRO!");

// console.warn("Aviso!");

// // 7 - if
// const m = 10;

// if (m > 5) {
//   console.log("M é maior que 5!");
// }

// const user = "João";

// if (user === "João") {
//   console.log(`Hey ${user}, como vai?`);
// }

// if (user === "Maria") {
//   console.log(`Hey ${user}, como vai?`);
// }

// console.log(user === "João", user === "Maria");

// // 8 - else
// const loggedIn = false;

// if (loggedIn === true) {
//   console.log("Está autenticado!")
// } else {
//   console.log("Não autenticado!")
// }

// const q = 10
// const w = 15

// if (q > 5 && w > 10) {
//   console.log("Números mais altos!")
// } else {
//   console.log("Os números não são mais altos!")
// }

// // 9 - else if
// if (1 > 2) {
//   console.log("Teste!");
// } else if (2 > 3) {
//   console.log("Teste 2!");
// } else if (5 > 1) {
//   console.log("Agora sim!");
// }

// const userName = "Vitor"
// const userAge = 20

// if (userName === "GPGustavo") {
//   console.log("Bem-vindo GPGustavo!");
// } else if (userName === "Vitor" && userAge === 20) {
//   console.log(`Olá ${userName}, você tem ${userAge} anos`);
// } else {
//   console.log("Nenhuma condição aceita!");
// }

// // 10 - while

// let p = 0

// while(p < 5) {
//   console.log(`Repetindo ${p}`);
//   p = p + 1;
// }

// // loop infinito
// let x = 10;

// while(x > 5) {
//   console.log(`Imprimindo ${x}`)
// }

// 11 - do while
let x = 10;

do {
  console.log(`Valor de x: ${x}`);
  x--;
} while (x > 1);

// MESMA COISA
// while (x > 1) {
//   console.log(`Valor de x: ${x}`)
//   x--
// }

// 12 - for
for (let x = 0; x < 10; x++) {
  console.log("Repetindo algo...");
}

// OU

let y = 20;

for (y; y > 5; y--) {
  console.log(`O y está diminuindo para ${y}...`);
}

// 13 - Identação
for (let u = 0; u < 10; u++) {
  if (u * 2 > 10) {
    console.log(`Maior que 10! ${u}`);
  } else {
    if (u / 2 === 0) {
      console.log("Deu 0");
    }
  }
}

// 14 - break
for (let g = 20; g > 10; g--) {
  console.log(`O valor de g é: ${g}`);

  if (g === 12) {
    console.log("o g é 12!");
    break;
  }
}


// 15 - continue
for (let s = 1; s < 10; s = s + 1) {
  // operador resto = %
  if(s % 2 === 0) {
    console.log("Número par!");
    continue;
  }

  console.log(s);
}


// 16 - switch
const job = "Advogado"

switch(job) {
  case "Coder":
    console.log("Você é um programador!")
    break;
  case "Advogado":
    console.log("Você é um advogado!");
    break;
  case "Engenheiro":
    console.log("Você é um engenheiro!");
    break;
  default:
    console.log("Profissão não encontrada!");
}


// switch "errado". O correto seria usar o break em todos os case
const L = 100

switch(L) {
  case 200:
    console.log("L é 200!");
  case 100:
    console.log("L é 100!");
  case 50:
    console.log("L é 50!");
  case 10:
    console.log("L é 10!");
  default:
    console.log("L não foi encontrado...");
}