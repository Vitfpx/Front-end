// 1 - Métodos
const animal = {
  nome: "Bob",
  latir: function() {
    console.log("Au au");
  },
};

console.log(animal.nome);

animal.latir();


// 2 - Aprofundando em métodos
const pessoa = {
  nome: "Vitor",
  
  getNome: function() {
    return this.nome;
  },

  setNome: function(novoNome) {
    this.nome = novoNome;
  }
};

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Larissinha");

console.log(pessoa.getNome());


// 3 - prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));


// 4 - Mais sobre prototype
const myObject = {
  a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);


// 5 - Classes basicas
const cachorro = {
  raca: null,
  patas: 4,
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);


// 6 - Função como classe - Função construtora
function criarCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const simba = criarCachorro("Simba", "Vira lata");

console.log(simba);

const dimi = criarCachorro("Dimi", "Pinscher");

console.log(dimi);

console.log(Object.getPrototypeOf(dimi));


// 7 - Funções como classe
function Cachorro(nome, raca) {
  this.nome = nome; 
  this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);


// 8 - Métodos da função construtora
Cachorro.prototype.uivar = function() {
  console.log("Auuuu!");
};

husky.uivar();


// 9 - classes ES6
class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff)); 


// 10 - mais sobre classes
class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhao() {
    console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
  }
}

const scania = new Caminhao(6, "Vermelho");

console.log(scania);

scania.descreverCaminhao(); // Chamar a função com uma variável específica

Caminhao.motor = 4; // Não funciona

const c2 = new Caminhao(4, "Preta");

console.log(c2);

Caminhao.prototype.motor = 4.0; // Tem que ser via prototype para funcionar

const c3 = new Caminhao(6, "Azul");

console.log(c3);


// 11 - override
class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const vitor = new Humano('Vitor', 20);

console.log(vitor);

console.log(Humano.prototype.idade);

Humano.prototype.idade = "Não definida";

console.log(vitor.idade);

console.log(Humano.prototype.idade);


// 12 - Symbol
class Aviao {
  constructor(marca, turbinas) {
    this.marca = marca;
    this.turbinas = turbinas;
  }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;

Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);


// 13 - getter e setter
class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `Você está lendo: ${this.titulo}.`;
  }

  set adicionarTags(tags) {
      const tagsArrays = tags.split(', ');
      this.tags = tagsArrays;
  }
}

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = ("Programação, JavaScript, Js");

console.log(myPost);


// 14 - Herança
class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero { // extends adiciona a classe que vai trazer as propriedades
  constructor(patas, nome)  {
    super(patas, patas); // super envia os valores para a classe pai (no caso de patas de lobo para patas do mamí   fero)
    this.nome = nome;
  }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

console.log(shark.patas);


// 15 - instanceof
console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);

console.log(new Post("a", "b") instanceof Lobo);
