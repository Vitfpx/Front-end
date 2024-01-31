// Objetos
let pessoa = {
  nome: "Lari s2",
  idade: 26,
  "cor-da-pele": "Branca",
};

console.log(pessoa);
// console.log(pessoa.nome);
console.log(pessoa["nome"]);
console.log(pessoa.idade);
console.log(pessoa["cor-da-pele"]);
console.clear();

// adicionar um par chave-valor
pessoa.altura = 1.74;
pessoa.nome = "Vitor";

console.log(pessoa);

// Remover
delete pessoa["cor-da-pele"];

console.log(pessoa);
console.clear();

// Percorrer
for (let chave in pessoa) {
  console.log(chave);
}
