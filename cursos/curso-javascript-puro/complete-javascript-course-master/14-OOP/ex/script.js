'use strict';

// REVISAO

/*
1. What is Object-Oriented Programming?

OOP (Programação Orientada a Objetos) é um paradigma baseado no conceito de "objetos", que podem conter dados na forma de atributos (propriedades) e código na forma de funções (métodos). JS permite a criação de objetos utilizando "constructor functions", "ES6 classes" e o método "Object.create". Esses objetos são instâncias de classes ou protótipos.

Em JavaScript, as classes foram introduzidas no ES6 como uma forma de simplificar a criação de objetos e o uso da herança, embora internamente, ainda se baseiem em protótipos.

Além dessas qualidadeds que citei sobre a OOP, também existem os seus 4 pilares que são muito importantes:

Abstração: Abstração consiste em esconder a complexidade do sistema, expondo apenas as funcionalidades essenciais. Isso facilita o uso da classe sem que o usuário precise entender os detalhes de implementação.

Encapsulamento: Encapsulamento envolve esconder detalhes internos de um objeto, permitindo o acesso a eles apenas por meio de métodos controlados. No ES6+, podemos usar campos privados (prefixados com #) para garantir que certas propriedades e métodos não possam ser acessados ou modificados fora da classe.

Herança: Herança permite que uma classe "filha" herde propriedades e métodos de uma classe "pai". Isso promove a reutilização de código, já que as classes filhas podem ter métodos próprios, além de poderem usar e sobrescrever os métodos da classe pai.

Polimorfismo: Polimorfismo significa que objetos de diferentes classes podem ser tratados como objetos da mesma classe através da herança, mas podem implementar o mesmo método de maneira diferente. Isso facilita o uso do mesmo método com comportamentos adaptados ao objeto específico..

RESUMO:

Abstração: Esconde a complexidade e expõe apenas o que é necessário para o uso do objeto.
Encapsulamento: Protege dados sensíveis ao permitir acesso controlado a propriedades e métodos.
Herança: Promove a reutilização de código através da criação de novas classes baseadas em classes já existentes.
Polimorfismo: Permite a implementação de métodos com o mesmo nome, mas com comportamentos diferentes dependendo do objeto.

2. OOP in JavaScript

OOP no JavaScript é baseada em Prototypal Inheritance, onde objetos herdam de outros objetos através de uma cadeia de protótipos (prototype chain). Em vez de herdar diretamente de classes, como em linguagens como Java, as instâncias em JS herdam métodos e propriedades através de um prototype, que é um objeto associado à função construtora ou classe de origem. Quando chamamos um método em uma instância, o JS primeiro procura no próprio objeto, depois no seu prototype, e assim por diante na cadeia de protótipos até encontrar o método ou chegar em null. Isso permite reutilização de código e facilita a implementação de herança.

*/

// Ex. 1
// Sistema de Pedidos em um Restaurante
// Você vai criar um sistema para gerenciar pedidos de um restaurante.

// class Order {
//   #items = [];
//   constructor() {}

//   addItems(...item) {
//     this.#items.push(...item);
//   }

//   totalExpense() {
//     return this.#items.reduce((acc, cur) => acc + cur.price, 0);
//   }

//   describeOrder() {
//     this.#items.forEach(item => item.describe());
//     console.log(`Order Total: ${this.totalExpense()}`);
//   }
// }

// class FoodItem {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   describe() {
//     console.log(
//       `${this.name}: ${this.price}\nTotal do pedido: ${order.totalExpense()}`
//     );
//   }
// }

// // Criando os itens
// const burger = new FoodItem('Burger', 20);
// const fries = new FoodItem('Fries', 8);
// const soda = new FoodItem('Soda', 5);

// // Criando o pedido
// const order = new Order();
// order.addItems(burger, fries, soda);

// // Descrevendo pedido e total
// order.totalExpense();
// order.describeOrder();

//////////////////////////////////////////////////////////////////

// Ex 2
// Sistema de Gerenciamento de Funcionários
// Imagine que você está criando um sistema para gerenciar diferentes tipos de funcionários em uma empresa.

// class Employee {
//   constructor(name, salary, jobTitle) {
//     this.name = name;
//     this.salary = salary;
//     this.jobTitle = jobTitle;
//   }

//   displaySalaryBonus(percentage) {
//     return this.salary * (percentage / 100);
//   }

//   calculateBonus(percentage) {
//     return this.salary * (percentage / 100);
//   }

//   addBonus(percentage) {
//     return (this.salary += this.salary * (percentage / 100));
//   }
// }

// class Manager extends Employee {
//   constructor(name, salary, jobTitle) {
//     super(name, salary, jobTitle);
//   }

//   getDetails() {
//     return 'Approve Projects';
//   }

//   displaySalaryBonus() {
//     return super.calculateBonus(20);
//   }

//   addBonus() {
//     return super.addBonus(20);
//   }
// }

// class Developer extends Employee {
//   constructor(name, salary, jobTitle) {
//     super(name, salary, jobTitle);
//   }

//   getDetails() {
//     return 'Develop Software';
//   }

//   displaySalaryBonus() {
//     return super.calculateBonus(10);
//   }

//   addBonus() {
//     return super.addBonus(10);
//   }
// }

// // Criação dos Funcionários
// const manager = new Manager('Jonas', 23000, 'Manager');
// const developer = new Developer('Vitor', 11000, 'Developer');

// // Descrição e cálcuo do bônus
// console.log(manager.getDetails());
// console.log(`Bônus do gerente: $${manager.displaySalaryBonus()}`);
// console.log(`Novo salário: $${manager.addBonus()}`);
// console.log('---------------------------');
// console.log(developer.getDetails());
// console.log(`Bônus do gerente: $${developer.displaySalaryBonus()}`);
// console.log(`Novo salário: $${developer.addBonus()}`);

///////////////////////////////////////////////////

// ex. 3
// Sistema de biblioteca

class Book {
  constructor(title, author, availableCopies) {
    this.title = title;
    this.author = author;
    this.availableCopies = availableCopies;
  }
}

class Library {
  #books = [];
  addBooks(...books) {
    return this.#books.push(...books);
  }
  borrowBook(book) {
    const [objBook] = this.#books.filter(el => el.title === book);
    const available = objBook?.availableCopies ?? 0;

    console.log(
      available > 0
        ? `${
            objBook.title
          } is borrowed. ${--objBook.availableCopies} copies left.`
        : `${objBook.title} it's not available`
    );
  }
}
const book1 = new Book('The lord Of The Rings', 'J.R.R. Tolkien', 5);
const book2 = new Book('1984', 'George Orwell', 2);

const library = new Library();

library.addBooks(book1);
library.addBooks(book2);

library.borrowBook('The lord Of The Rings');

library.borrowBook('1984');
library.borrowBook('1984'); // Última cópia

library.borrowBook('1984');
