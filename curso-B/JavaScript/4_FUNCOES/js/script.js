// 1 - Criando uma função
function minhaFuncao() {
  console.log("Testando!");
}

minhaFuncao();
minhaFuncao();

// Função em variável
const FuncaoEmVariavel = function () {
  // Esse modelo apresenta mais consistência por se tratar de uma constate
  console.log("Função em Variável!");
};

FuncaoEmVariavel();

// Função com parâmetro
function funcaoComParametro(txt) {
  console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Imprimindo alguma coisa");
funcaoComParametro("Outra função");

const boi = "Xicolari";

function xico(boi) {
  // Manipulação do parâmetro para uma função ter mais de uma ação
  console.log(`O xico é ${boi}`); 
}

xico(boi);


// 2 - return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
  return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(c, d));