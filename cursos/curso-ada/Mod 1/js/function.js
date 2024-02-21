// FUNCTION

// Definição da função
function saudacao() {
  console.log("Olá, seja bem-vindo!");
}

// Chamando a função
saudacao();
console.clear();

// Enviar parâmetros
function saudacao(nome, curso = "Node.js") {
  console.log(`Olá, ${nome}, seja bem-vindo ao curso de ${curso}!`);
}

saudacao("Vitor");
console.clear();

// Retorno da função
function soma(numero1, numero2) {
  return numero1 + numero2; // a função sempre acaba no return
}

const resultado = soma(10, 20);

console.log(resultado / 2);
console.clear();

maior50 = (numero) => {
  if (numero > 50) {
    return true;
  }

  return false;
}
