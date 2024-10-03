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

// 3. Constructor Functions and the new Operator
// const Car = function (make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// };

// Car.prototype.start = function () {
//   console.log(
//     `${this.make} é meu carro, produzido pela ${this.model} em ${this.year}.`
//   );
// };

// const focus = new Car('focus', 'x', 2005);
// const gol = new Car('gol', 'y', 1997);

// focus.start();

// 4. Prototypes
// Prototypes são as informações que serão herdadas de uma classe pai para uma instância ou para uma classe filha, esse processo vai criar uma corrente de prototypes onde a classe mais baixa sempre consegue acessar as informações da classe mais acima, tendo assim a sua herança, ou seja, os métodos e propriedades sendo compartilhados.

// 5. Prototypal Inheritance and The Prototype Chain
// Car.prototype.drive = function () {
//   console.log(`${this.make} is driving`);
// };

// 6. Prototypal Inheritance on Built-in Objects

// A herança prototípica em objetos embutidos em JS refere-se ao fato de que objetos como arrays, strings e números têm protótipos próprios, que herdam de Object.prototype. Métodos como Array.prototype.push ou String.prototype.split são herdados dessa cadeia prototípica.

// 7. ES6 Classes
// class CarCl {
//   _speed;

//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   get start() {
//     console.log(
//       `${this.make} é meu carro, produzido pela ${this.model} em ${this.year}.`
//     );
//   }

//   get speed() {
//     return this._speed / 1.6;
//   }

//   set speed(val) {
//     this._speed = val * 1.6;
//   }

//   static distance(vel, time) {
//     return `A distância da viagem será de ${vel * time}km`;
//   }
// }

// const qq = new CarCl('QQ', 'Cherry', 2012);

// qq.start;

// 8.
// qq.speed = 80;
// console.log(qq.speed); // mh
// console.log(qq._speed); // km

// 9.
// Métodos estáticos são métodos que só podem ser utilizados pela classe onde eles foram criados, ou seja, eles não podem ser herdados. Eles devem ser utilizados em classes que tem uma função única que outros objetos não necessitam ter

// console.log(CarCl.distance(80, 3));

// 10.

// const Person = {
//   greet() {
//     console.log('Hi bro');
//   },

//   init(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   },
// };

// const Student = Object.create(Person);

// Student.init = function (name, birthYear, course) {
//   Person.init.call(this, name, birthYear);
//   this.course = course;
// };

// Student.study = function () {
//   console.log(`My course is ${this.course}`);
// };

// const lari = Object.create(Student);
// lari.greet();
// lari.init('Larissa', 2004, 'Gastronomia');

// // 11.
// const Car = function (make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// };

// Car.prototype.start = function () {
//   console.log(
//     `${this.make} é meu carro, produzido pela ${this.model} em ${this.year}.`
//   );
// };

// const EletricCar = function (make, model, year, batteryLevel) {
//   Car.call(this, make, model, year);
//   this.batteryLevel = batteryLevel;
// };

// EletricCar.prototype = Object.create(Car.prototype);
// EletricCar.prototype.constructor = EletricCar;

// EletricCar.prototype.chargeBattery = function () {
//   return this.batteryLevel++;
// };

// const tesla = new EletricCar('tesla', 'x', 2023, 44);
// tesla.chargeBattery();
// console.log(tesla);

// 12.
// class CarCl {
// #baterryLevel;
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   start() {
//     console.log(
//       `${this.make} é meu carro, produzido pela ${this.model} em ${this.year}.`
//     );
//   }
// }

// class EletricCarCl extends CarCl {
//   constructor(make, model, year, batteryLevel) {
//     super(make, model, year);
//     this.batteryLevel = batteryLevel;
//   }

//   chargeBattery() {
//     return this.batteryLevel++;
//   }

// get batteryLevel() {
//   return this.#batteryLevel;
// },
// }

// const tesla = new EletricCarCl('tesla', 'x', 2023, 44);
// tesla.chargeBattery();
// tesla.start();

// 13.
// const CarProto = {
//   init(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   },

//   get start() {
//     console.log(
//       `${this.make} é meu carro, produzido pela ${this.model} em ${this.year}.`
//     );
//   },

//   chargeBattery() {
//     this.batteryLevel++;
//   },
// };

// const EletricCarProto = Object.create(CarProto);
// EletricCarProto.init = function (make, model, year, batteryLevel) {
//   CarProto.init.call(this, make, model, year);
//   this.batteryLevel = batteryLevel;
// };
// const fusca = Object.create(EletricCarProto);
// fusca.init('Fuscão', 'h', 2024, '100');
// fusca.start;
// fusca.chargeBattery();

// 14.
// São propriedades e métodos que tem formas de se assegurar normalmente ao não conseguirem ser alterados fora do seu próprio objeto. Isso pode ser implementado utilizndo _, que é uma convenção entre os programadores ou utilizando #, que o próprio JS entende que nada deve ser alterado fora do escopo do próprio objeto que utiliza o hash

// 15.

// MORE EXERCISES

// 1.
// const Animal = function (name, species) {
//   this.name = name;
//   this.species = species;
// };

// Animal.prototype.describe = function () {
//   console.log(`This animal called ${this.name} and it's a ${this.species}`);
// };

// const leo = new Animal('Léo', 'lion');

// leo.describe();

// // 2.
// const Dog = function (name, species, breed) {
//   Animal.call(this, name, species);
//   this.breed = breed;
// };

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function () {
//   console.log('Woof!');
// };

// const dimi = new Dog('Dimi', 'Cão', 'Pinscher');

// dimi.describe();
// dimi.bark();

// // 3.
// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   introduce() {
//     return `Olá, eu sou ${this.firstName} ${this.lastName} e tenho ${this.age} anos.`;
//   }
// }

// const vitor = new Person('Vitor', 'Raimundo', 21);
// console.log(vitor.introduce());

// 4.
// class Employee extends Person {
//   constructor(firstName, lastName, age, jobTitle) {
//     super(firstName, lastName, age);
//     this.jobTitle = jobTitle;
//   }

//   work() {
//     return `I'm ${this.firstName} and I'm ${this.jobTitle}`;
//   }
// }

// const xico = new Employee(
//   'Guilherme',
//   'CostaCurta',
//   22,
//   'Presidente do Nordeste'
// );

// console.log(xico.work());
// console.log(xico.introduce());

// // 5.
// // const Vehicle = {
// //   init(brand, year) {
// //     this.brand = brand;
// //     this.year = year;
// //   },
// // };

// // const Car = Object.create(Vehicle);

// // Car.init = function (brand, year, model) {
// //   Vehicle.init.call(this, brand, year);
// //   this.model = model;
// // };

// // Car.details = function () {
// //   return `Este veículo é da marca ${this.brand} e foi fabricado em ${this.year}.`;
// // };

// // const toyota = Object.create(Car);
// // toyota.init('Toyota', 2020, 'Corolla');

// // console.log(toyota.details());

// // 6.
// const Vehicle = function (make, year) {
//   this.make = make;
//   this.year = year;
// };

// Vehicle.prototype.startEngine = function () {
//   return this.model;
// };

// class Car extends Vehicle {
//   constructor(make, year, model) {
//     super(make, year);
//     this.model = model;
//   }

//   get startEngine() {
//     console.log(
//       `O motor do ${this.make} ${this.model}, ano ${this.year}, foi ligado.`
//     );
//   }
// }

// const civic = new Car('Honda', 2021, 'Civic');

// civic.startEngine;

// 7.
// const Gadget = {
//   init(brand) {
//     this.brand = brand;
//   },

//   info() {
//     return this;
//   },
// };

// const Smartphone = Object.create(Gadget);

// Smartphone.init = function (brand, model) {
//   Gadget.init.call(this, brand);
//   this.model = model;
// };

// Smartphone.info = function () {
//   console.log(`Este gadget é da marca ${this.brand}, modelo ${this.model}.`);
// };

// const iphone13 = Object.create(Smartphone);

// iphone13.init('Apple', 'iPhone 13');
// iphone13.info();

// EXERCÍCIOS MAIS REALISTAS

////////////////////////////////////////////
// 1. Sistema de Pedidos em um Restaurante
class FoodItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  display() {
    return `Prato: ${this.name}
Valor: U$${this.price}.00`;
  }
}

class Order {
  #listItem = [];

  addItem(item) {
    return this.#listItem.push(item);
  }

  calcTotal() {
    return this.#listItem.reduce((acc, item) => acc + item.price, 0);
  }
}

// Criação dos itens do menu
const burger = new FoodItem('Burger', 20);
const fries = new FoodItem('Fries', 8);
const soda = new FoodItem('Soda', 5);

// Criação do pedido
const order = new Order();
// order.addItem(burger);
// order.addItem(fries);
// order.addItem(soda);

// Descrição e total do pedido
// console.log(burger.display());
// console.log(fries.display());
// console.log(soda.display());

// console.log(`Total do pedido: U$${order.calcTotal()}.00`);

///////////////////////////////////////////////
// 2. Sistema de Gerenciamento de Funcionários

const Employee = {
  init(name, salary, jobTitle) {
    this.name = name;
    this.salary = salary;
    this.jobTitle = jobTitle;
  },

  calculateBonus() {
    if (this.jobTitle === 'Manager') {
      return this.salary * 0.2;
    } else if (this.jobTitle === 'Developer') {
      return this.salary * 0.1;
    } else if (this.jobTitle === 'CTO') {
      return this.salary * 0.3;
    } else {
      return this.salary * 0.2;
    }
  },

  getDetails() {
    console.log(`Bônus de ${this.jobTitle}: U$${this.calculateBonus()}.`);
  },
};

// Criar employees

const createEmployee = function (type, name, salary, job, extraInfo) {
  const employee = Object.create(type);
  employee.init(name, salary, job);
  employee.extraInfo = extraInfo;
  return employee;
};

// Definindo employees
const manager = createEmployee(
  Employee,
  'Alice',
  8000,
  'Manager',
  'Project Coordination'
);
const developer = createEmployee(
  Employee,
  'Bob',
  5000,
  'Developer',
  'Write Code'
);
const cto = createEmployee(
  Employee,
  'Vitor',
  23000,
  'CTO',
  'Technological Strategy'
);
const dataAnalyst = createEmployee(
  Employee,
  'Bartelli',
  15000,
  'Data Analyst',
  'Actionable Insights'
);

// Descrição e cálculo do bônus
// manager.getDetails();
// developer.getDetails();
// cto.getDetails();
// dataAnalyst.getDetails();

// console.log(`Bônus do gerente: U$${manager.calculateBonus()}`);

//////////////////////////////
// 3. Sistema de Biblioteca
class Book {
  constructor(title, author, availableCopies) {
    this.title = title;
    this.author = author;
    this.availableCopies = availableCopies;
  }
}

class Library {
  #listBooks = [];

  // Lista de livros
  addBooks(book) {
    return this.#listBooks.push(book);
  }

  // Diminuindo quantidade de cópias
  borrowBook(book) {
    if (book.availableCopies > 0) {
      console.log(`Livro: ${book.title} emprestado com sucesso.`);
      book.availableCopies--;
      return this;
    } else {
      return console.log(
        `Não há mais cópias disponíveis para o livro: ${book.title}.`
      );
    }
  }
}

// Definindo novos livros
const library = new Library();
const nineteenEightyFour = new Book('1984', 'George Orwell', 2);
const lordOfTheRings = new Book('O Senhor dos Anéis', 'J.R.R Tolkien', 5);

// Adicionando livros à bilbioteca
library.addBooks(lordOfTheRings);
library.addBooks(nineteenEightyFour);

// Emprestando livros
// library.borrowBook(lordOfTheRings);
// library.borrowBook(lordOfTheRings);
// library.borrowBook(nineteenEightyFour);
// library.borrowBook(nineteenEightyFour);
// library.borrowBook(nineteenEightyFour);

// console.log(library);

/////////////////////////////////////
// 4. Sistema de Reservas de Hotel
class Room {
  constructor(roomNumber, roomType, pricePerNight) {
    this.roomNumber = roomNumber;
    this.roomType = roomType;
    this.pricePerNight = pricePerNight;
  }
}

class Hotel {
  static reserveRooms = [];

  static isAvailable(room) {
    if (!this.reserveRooms.includes(room)) {
      this.reserveRooms.push(room);
      console.log(`O quarto ${room.roomNumber} foi reservado.`);
    } else {
      console.log(`Desculpe, o quarto ${room.roomNumber} já está reservado.`);
    }
  }
}

class Booking {
  constructor(roomBooked, numberOfNights) {
    this.roomBooked = roomBooked;
    this.numberOfNights = numberOfNights;
  }

  totalCost() {
    return this.roomBooked.pricePerNight * this.numberOfNights;
  }

  makeBooking() {
    Hotel.isAvailable(this.roomBooked);
  }
}

// Criação dos Quartos
const room101 = new Room(101, 'Single', 150);
const room69 = new Room(69, 'Double', 200);

// Criação das Reservas
const booking101 = new Booking(room101, 3);
const booking69 = new Booking(room69, 5);

// Cálculo do custo da reserva
// console.log(booking101.totalCost());
// console.log(booking69.totalCost());

// Verificação de disponibilidade
// booking101.makeBooking();
// booking69.makeBooking();

// Não disponíveis
// booking101.makeBooking();
// booking69.makeBooking();

///////////////////////////////
// 5. Sistema de Loja Virtual
class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

class Cart {
  #listProducts = [];

  addItem(item) {
    if (item.stock) {
      item.stock--;
      this.#listProducts.push(item);
      console.log(`${item.name} adicionado ao carrinho.`);
    } else {
      console.log(
        `Infelizmente, o produto ${item.name} não está disponível no momento.`
      );
    }
    return this;
  }

  calcTotal() {
    const totalValue = this.#listProducts.reduce(
      (acc, cur) => acc + cur.price,
      0
    );
    console.log(`O valor total do seu carrinho é de R$${totalValue},00`);
    return totalValue;
  }

  get display() {
    console.log(this.#listProducts);
  }
}

// Produtos criados
const toy = new Product('Pica-Pau', 175, 4);
const bottle = new Product('Garrafa de Água', 5, 25);
const mangoMonster = new Product('Lata de Mango Loco', 8, 10);

// Adicionando produtos ao carrinho
const cart = new Cart();
cart.addItem(toy);
cart.addItem(bottle);
cart.addItem(bottle);
cart.addItem(bottle);
cart.addItem(mangoMonster);
cart.addItem(toy);
cart.addItem(toy);
cart.addItem(toy);
cart.addItem(mangoMonster);
cart.addItem(toy);
cart.calcTotal();
cart.display;
