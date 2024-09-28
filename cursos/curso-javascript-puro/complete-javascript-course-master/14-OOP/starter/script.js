'use strict';

////////////////////
// WHAT IS THE OOP?
/*

### 1. **O que é Programação Orientada a Objetos (OOP)?**
A Programação Orientada a Objetos (OOP) é um **paradigma de programação** que organiza
o software em torno de **objetos**, que podem ser vistos como representações de entidades
do mundo real. Esses objetos possuem:
- **Propriedades (atributos)**: características do objeto (ex.: nome, idade).
- **Métodos (funções)**: comportamentos ou ações que o objeto pode realizar (ex.: falar, calcular).

O OOP facilita a **modularização**, a **manutenção** e o **reuso** de código, tornando o 
software mais organizado e flexível.
Não deixa o código solto no global scope, que é chamado de código spagetti

---

### 2. **Classes e Instâncias (OOP tradicional)**
- **Classes** são **modelos ou moldes** para criar objetos. Elas definem as propriedades 
  e métodos que os objetos baseados nela terão.
- **Instâncias** são **objetos reais** criados a partir de uma classe. Cada instância 
  pode ter valores diferentes para os atributos definidos na classe.

**Exemplo**:
```js
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}

const pessoa1 = new Pessoa('João', 30);  // Instância da classe Pessoa
pessoa1.saudacao();  // Output: Olá, meu nome é João
```

---

### 3. **Os 4 Princípios Fundamentais do OOP**

1. **Encapsulamento**:
   O encapsulamento refere-se a **esconder** os detalhes internos de um objeto, 
   fornecendo acesso aos atributos e métodos apenas por meio de interfaces controladas 
   (ex.: métodos getter e setter). Isso garante a **segurança** e **controle** sobre 
   como os dados do objeto são manipulados.
   
   **Exemplo**:
   ```js
   class ContaBancaria {
     constructor(saldo) {
       let _saldo = saldo;  // variável privada
       
       this.getSaldo = () => _saldo;
       this.depositar = (valor) => { _saldo += valor; };
     }
   }
   ```

2. **Herança**:
   A herança permite que uma classe **herde** as propriedades e métodos de outra classe. 
   Isso promove o **reuso de código** e facilita a criação de classes mais especializadas 
   a partir de classes gerais.
   
   **Exemplo**:
   ```js
   class Animal {
     constructor(nome) {
       this.nome = nome;
     }
     mover() {
       console.log(`${this.nome} está se movendo.`);
     }
   }

   class Cachorro extends Animal {
     latir() {
       console.log('Au au!');
     }
   }

   const dog = new Cachorro('Rex');
   dog.mover();  // Herdado da classe Animal
   dog.latir();  // Método da classe Cachorro
   ```

3. **Polimorfismo**:
   Polimorfismo significa que métodos com o **mesmo nome** podem ter **comportamentos diferentes**
   dependendo do objeto que os invoca. Isso é útil quando classes derivadas implementam seus próprios métodos,
   embora compartilhem a mesma interface.

   **Exemplo**:
   ```js
   class Animal {
     fazerSom() {
       console.log('Som de animal.');
     }
   }

   class Gato extends Animal {
     fazerSom() {
       console.log('Miau!');
     }
   }

   const animal = new Animal();
   const gato = new Gato();

   animal.fazerSom();  // Som de animal
   gato.fazerSom();    // Miau!
   ```

4. **Abstração**:
   A abstração se refere a **simplificar** o sistema mostrando apenas as partes essenciais, 
   enquanto detalhes complexos são escondidos. A ideia é se concentrar nas características mais 
   importantes e na interface de um objeto, sem revelar os detalhes internos de sua implementação.

   **Exemplo**:
   ```js
   class Carro {
     ligarMotor() {
       console.log('Motor ligado');
     }

     dirigir() {
       this.ligarMotor();
       console.log('O carro está em movimento');
     }
   }

   const meuCarro = new Carro();
   meuCarro.dirigir();  // Foco apenas na função dirigir, sem expor a lógica do motor
   ```
*/

//////////////
// OOP IN JS

// Uma instância herdada de uma classe é completamente diferente de uma classe herdada de uma outra classe

/*

### OOP "Clássica" (à esquerda):
  - **Classes**: Em linguagens de programação clássicas (como Java ou C++), objetos são 
criados (ou **instanciados**) a partir de **classes**, que são como um "molde" ou "plano 
de construção" para objetos.
  - Uma **instância** é o objeto criado a partir de uma classe.
  - **Métodos (comportamentos)** são copiados da classe para cada objeto instanciado.
  
Por exemplo, imagine uma classe "Carro". Cada novo carro que você cria (um "objeto") 
será uma instância dessa classe, contendo suas próprias propriedades (como modelo, ano, cor) 
e métodos (como dirigir, frear), que são copiados para cada objeto.

### OOP com Prototypes no JavaScript (à direita):
  - Em JavaScript, objetos são criados diretamente a partir de outros **objetos**, sem 
a necessidade de uma classe. Isso é chamado de **herança prototípica**.
  - Cada objeto está **ligado a um prototype**, que é outro objeto que contém métodos 
  e propriedades compartilhados.
  - Ao contrário da OOP clássica, o comportamento (métodos) não é copiado para cada objeto. 
  Em vez disso, ele é **delegado** para o prototype, e o objeto pode acessar métodos do prototype.

### Prototypal Inheritance (Herança Prototípica):
- **Prototypal Inheritance**: A herança prototípica significa que um objeto pode acessar os
  métodos que estão no seu prototype. Quando você tenta usar um método em um objeto, o JavaScript
  verifica primeiro no próprio objeto. Se o método não estiver presente, ele sobe na cadeia de prototypes 
  até encontrar o método.
  
### Exemplo (Array):
- O exemplo na parte direita do slide mostra como isso funciona com arrays:
  - `Array.prototype` é o prototype de todos os arrays em JavaScript.
  - Todos os arrays (como `[1, 2, 3]` no exemplo) herdam métodos do `Array.prototype`, 
    como o método `map()`. Ou seja, mesmo que o array não tenha seu próprio método `map`, 
    ele pode acessá-lo através do prototype.
  
Resumindo:
- **OOP Clássica**: Baseada em classes e objetos que copiam métodos da classe.
- **Prototypes no JavaScript**: Objetos são ligados a um prototype que contém métodos. 
  Não há cópia; os métodos são delegados ao prototype, criando uma cadeia (prototype chain).

*/

////////////////////////////////////////////////
// Constructor Functions and the New Operator

const Person = function (firstName, birthYear) {
  // console.log(this);
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Métodos dentro da constructor function
  // Never do this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };

  // Esse código iria criar uma função igual a essa para cada instância que viesse de Person, prejudicando o desempenho do projeto final
};

const vitor = new Person('Vitor', 2003);
// console.log(vitor);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const lari = new Person('Larisz', 2004);
const jack = new Person('Jack', 1975);
// console.log(lari, jack);

// console.log(vitor instanceof Person); // True

///////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  // console.log(2037 - this.birthYear);
};
vitor.calcAge();
lari.calcAge();

// console.log(vitor.__proto__);
// console.log(vitor.__proto__ === Person.prototype);
// Person.prototype não é o prototype de Person, mas sim dos objetos criados por Person

// console.log(Person.prototype.isPrototypeOf(vitor));
// console.log(Person.prototype.isPrototypeOf(lari));
// console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
// console.log(vitor.species, jack.species);

// console.log(vitor.hasOwnProperty('birthYear'));
// console.log(vitor.hasOwnProperty('species'));

////////////////////////////////////////////////////
// Prototypal Inheritance and the Prototype Chain
/*
// Prototypal Inheritance

1. Person.prototype é o objeto que contém métodos e 
  propriedades que são compartilhados entre todas as 
  instâncias criadas por Person.

2. O método calcAge e a propriedade species são definidos
  no prototype, então todas as instâncias de Person podem usá-los.

3. O __proto__ de uma instância (vitor) aponta para o 
  prototype do construtor (Person.prototype).

4. hasOwnProperty é usado para verificar se uma propriedade 
  pertence diretamente ao objeto ou se foi herdada através do prototype.

5. Person.prototype é um objeto especial que serve como prototype 
  para todos os objetos criados pela função Person. Se isso não 
  acontecesse dessa forma, o objeto vitor herdaria propriedades 
  e métodos do Person.prototype, mas a própria função Person também
  herdaria essas propriedades, o que não deve acontecer.

  RESUMO:
.Função Construtora (Person): Usada para criar novos objetos.
.Person.prototype: Armazena métodos que serão herdados por todos os objetos criados pela função Person.
.Objeto jonas: Criado com new Person('Jonas', 1990). Não tem o método calcAge diretamente, mas o herda através de seu protótipo.
.Herança Prototípica: Se um método não for encontrado diretamente no objeto, o JavaScript busca no protótipo (Person.prototype).

// Prototype Chain
1. Cada objeto em JavaScript tem um protótipo, exceto Object.prototype, que é o topo da cadeia e aponta para null.
2 .A cadeia de protótipos permite que objetos herdem propriedades e métodos de outros objetos conectados na cadeia.
3 .Métodos como hasOwnProperty não estão diretamente nos objetos que criamos, mas são herdados de Object.prototype.
4 .O objeto jonas está ligado ao Person.prototype, e o Person.prototype está ligado ao Object.prototype.
5 .O JavaScript procura métodos e propriedades na cadeia de protótipos, começando do objeto e subindo até encontrar 
 o que foi solicitado ou chegar ao fim da cadeia (null).
*/

//////////////////////////////////////////////
// Prototypal Inheritance on Built-on Objects

// console.log(vitor.__proto__); // Person.prototype
// console.log(vitor.__proto__.__proto__); // Object.prototype (top of prototype chain)
// console.log(vitor.__proto__.__proto__.__proto__); // null

// console.dir(Person.prototype.constructor); // Person(firstName, birthYear)

const arr = [3, 6, 6, 5, 6, 9, 9];
// new Array === [] . Isso acontece pois todo array vem da constructor function Array, portanto todos são instâncias e herdam o Array.prototype (todos os métodos). A mesma coisa vale para os objetos, numbers, strings e etc

// console.log(arr.__proto__); // array.prototype
// console.log(arr.__proto__ === Array.prototype); // true

// console.log(arr.__proto__.__proto__); // object.prototype

// Não é um boa ideia criar métodos pois:
// 1. O JS pode atualizar e criar um método com o mesmo nome que o seu, quebrando seu código;
// 2. Ao trabalhar em equipe se todos começarem a criar métodos, tudo ficará bagunçado
Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

const h1 = document.querySelector('h1');
// console.log(
// h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
// );
// h1.HTMLHeadingElement.HTMLElement.Element.Node.EvenTarget.Object.Null
// console.dir((x => x + 1).__proto__); // function methods

////////////////////////
// Coding Challenge 1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them;

// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// const BMW = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
// Object.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// BMW.brake();
// BMW.accelerate();
// BMW.brake();
// BMW.accelerate();
// BMW.accelerate();
// BMW.brake();
// BMW.brake();
// BMW.brake();
// BMW.brake();
// BMW.brake();
// BMW.accelerate();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// console.log(BMW);
// console.log(mercedes);

//////////////
// ES6 Classes

// Class Expression
// const PersonCL = class{}

// Class Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const zaum = new PersonCl('Zaum Zaunita', 2002);
// console.log(zaum);
zaum.calcAge();
console.log(zaum.age);

console.log(zaum.__proto__ === PersonCl.prototype);

// Code before ES6 ⬇⬇⬇
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
zaum.greet();
// Classes são apenas um tipo de função

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// Por não ter um nome completo, ele perde a propriedade name
const walter = new PersonCl('Walter', 1965);

// Setter serve como validação de algum dado ao criar um novo objeto

///////////////////////////////////////////
// Assessor Properties: getter and setter

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
