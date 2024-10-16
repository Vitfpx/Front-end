/////////////////////////////////////////////
// OVERVIEW OF MODERN JAVASCRIPT DEVELOPMENT

/*

Desenvolvimento:
Módulos e pacotes de terceiros são criados e gerenciados com a ajuda de ferramentas como o Node Package Manager (NPM).
NPM serve como repositório e software para gerenciar dependências de terceiros e ferramentas de desenvolvimento.

Processo de Build:
Bundling: Os módulos e pacotes de terceiros são combinados em um único arquivo usando ferramentas como Webpack ou Parcel.
Transpilação/Polyfilling: Usando o Babel, o código JavaScript moderno é convertido (transpilado) para ser compatível com navegadores mais antigos (ES5).

Produção:
O resultado final é um arquivo JavaScript único e otimizado, pronto para ser usado na produção.
Essencialmente, o slide mostra como ferramentas como NPM, Webpack/Parcel e Babel integram módulos e pacotes em um fluxo moderno de desenvolvimento JavaScript.

WEBPACKS VS PARCEL

Parcel: Se você quer algo que funcione "out of the box" com configuração zero e é ideal para protótipos, projetos pequenos ou médios, ou se você está focado em produtividade imediata, Parcel é a escolha.

Webpack: Se você precisa de mais controle sobre como seus assets são processados, ou se está lidando com um projeto grande e complexo com múltiplas entradas e saídas, onde a otimização de produção é crítica, Webpack é uma escolha mais adequada.
*/

/////////////////////////////////////////
// AN OVERVIEW OF MODULES IN JAVASCRIPT
/*
1: Uma Visão Geral dos Módulos...

Definição de Módulo: Um módulo é uma peça reutilizável de código que encapsula 
                     detalhes de implementação e pode ser um arquivo autônomo.

Por que Usar Módulos?

Compor Software: Módulos são os blocos de construção que usamos para criar aplicativos complexos.
Isolar Componentes: Permite o desenvolvimento de módulos de forma isolada, sem pensar na base de código completa.
Abstrair Código: Módulos implementam código de baixo nível que pode ser importado em outros módulos.
Organizar Código: A estrutura de módulos resulta em uma base de código mais organizada.
Reutilizar Código: Facilita a reutilização do mesmo código em vários projetos.


2: Módulos Nativos JavaScript (ES6)...

Estrutura de Módulo ES6: Cada módulo é armazenado em arquivos, com exatamente um módulo por arquivo.

Características dos Módulos ES6:

Variáveis de Topo: Escopo restrito ao módulo.
Modo Padrão: Modo estrito em comparação ao modo "solto" de scripts.
Importações e Exportações: Os módulos ES6 suportam importações e exportações, permitindo a interação entre diferentes módulos.
HTML Linking: Deve ser feito com <script type="module">.
Carregamento de Arquivos: O carregamento é assíncrono.


3: Como os Módulos ES6 São Importados...

Importação Sincrônica: Os módulos são importados de maneira síncrona, graças a importações de nível superior
                       (estáticas) que tornam as importações conhecidas antes da execução.

Processo de Importação:

O código do arquivo é analisado, e as importações são baixadas de forma assíncrona.
As importações são vinculadas às exportações dos módulos correspondentes.
Após a vinculação, o código dos módulos é executado em uma ordem específica, permitindo 
a eliminação de código morto e a otimização de pacotes.
*/

////////////////////////
// Importing Module

// import { addToCart, totalPrice as price, tq } from './shopping.Cart.js';
// addToCart('bread', 5);
// console.log(price, tq);

// console.log('Importing module');
// console.log(shippingCost); // error

// import * as ShoppingCart from './shopping.Cart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Normalmente não se mistura default export e name export
// import add, { addToCart, totalPrice as price, tq } from './shopping.Cart.js';
// console.log(price);

import add, { cart } from './shopping.Cart.js';
// import shoppingCart, {
//   cart,
//   totalPrice,
//   totalQuantity as tq,
// } from './shopping.Car t.js';
add('pizza', 2);
add('coffe', 6);
add('banana', 5);
console.log(cart);

// Imports are not copies of the export, they are instead like a live connection

// console.log(totalPrice, tq);

//////////////////////////////
// Top-level await (ES2022)

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// real example
// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
// console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost); // Promise, pois chamar uma função async sempre retorna uma Promise

// Not very clean and mixes old school and newer methods
// lastPost.then(last => console.log(last))

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

//////////////////////////////////
// The module pattern (oldschool)
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (sipping cost is ${shippingCost})` // mesmo que shippingCost não tenha sido retornado, ele ainda existe e vai aparecer no cl por conta da closure que mantem ele existente
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('coca 0cal', 4);
// ShoppingCart2.addToCart('pizza', 18);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost); // undefined

// Tudo isso só funciona por conta das CLOSURES

// Esse modo de utilizar modules precisava que cada arquivo em module,
// fosse declarado no html acima do script principal, para que, manualmente,
// suas variáveis fossem para o top-level (com modules isso acontece automaticamente)

/////////////////////
// CommomJS Modules
/*
// Export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
  );
};

// Import
const { addToCart } = require('./shoppingCart.js')

Funciona como modularização, porém, apenas no node.js. Hoje em dia existe 
a forma mais atual de modularização, mas muitos códigos provavelmente ainda 
tem esse formato...
*/

//////////////////////
// Command Line (cmd)
/**
 * ls: conteúdo da pasta atual
 * cd: subir ou descer na árvore de arquivos
 * mkdir: criar pasta
 * rm: remove file
 * mv: move file
 * rmdir: remover dir vazios
 * rm -R 'dir name': remover dir com conteúdo
 */

/////////////////////////
// Introduction NPM :D

/*
Nessa lecture aprendemos:
  O que é npm? 
  O NPM (Node Package Manager) é o gerenciador de pacotes padrão para o Node.js e serve 
  para instalar, gerenciar e compartilhar bibliotecas e ferramentas no ecossistema JavaScript. 
  Com o NPM, você pode instalar dependências, bibliotecas de terceiros e ferramentas de build 
  (como bundlers), e gerenciar as versões dessas dependências no seu projeto.

  Como instalar npm: npm --install;

  utilizar comandos básicos do NPM como [npm init, npm i (install) lodash-es (ES6)];

  Importar um método ou apenas utilizar uma API como package (isso não é prático, então será resolvido com Parcel);

  Aprendemos a importância do package.json que serve para quando formos enviar nosso 
  arquivo para outro local. Com ele, não precisamos baixar cada package novamente, apenas damos 
  comando npm i para baixar qualquer package que estava no arquivo package.json

*/

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateCloneDeep = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone); // False, quando o original for alterado, o clone também será...

console.log(stateCloneDeep); // True, aqui não temos esse problema...

/////////////////////////////////////////
// Bundling with Parcel and NPM scripts
/* 
O que é bundle?
Um bundle é um arquivo final que reúne (ou "empacota") todos os módulos, 
arquivos e dependências de um projeto JavaScript em um único ou poucos arquivos
otimizados para produção. Esse processo é geralmente feito por uma ferramenta de empacotamento, 
como Webpack, Parcel ou Rollup.

Comando para instalar: npm i parcel --save-dev


Utilizar Parcel em nosso html: npx parcel index.html. Isso nos resultará um localhost:1234 
(mesma coisa do live-server, porém, com a adaptação do Parcel)

Comando mais usado para rodar o parcel ⬇⬇⬇
    "scripts": {
      "start": "parcel index.html"
    },
  npm run start

Para buildar nosso projeto:
"build": "parcel build index.html"
npm run build

Para usar assets globalmente (não é o mais recomendado):
npm i parcel -g
*/

// Apenas o Parcel entende esse código, o JS ignora ele
if (module.hot) {
  module.hot.accept();
}

// O código abaixo serve para

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Normalmente não se usa imports tão específicos, mas caso esteja muito preocoupado com o tamanho do Bundle, pode-se utilizar...

// Polifilling async functions
import 'regenerator-runtime/runtime';

/////////////////////////////
// Clean code and Modern JS
/*

READABLE CODE:

Write code so that others can understand it.
Write code so that you can understand it in 1 year.
Avoid "too clever" and overcomplicated solutions.
Use descriptive variable names: what they contain.
Use descriptive function names: what they do.

GENERAL:

Use the DRY principle (refactor your code).
Don't pollute the global namespace; encapsulate instead.
Don't use var.
Use strong type checks (=== and !==).

FUNCTIONS:

Generally, functions should do only one thing.
Don't use more than 3 function parameters.
Use default parameters whenever possible.
Generally, return the same data type as received.
Use arrow functions when they make code more readable.

OOP (Object-Oriented Programming):

Use ES6 classes.
Encapsulate data and don't mutate it from outside the class.
Implement method chaining.
Do not use arrow functions as methods (in regular objects).

AVOID NESTED CODE:

Use early return (guard clauses).
Use ternary (conditional) or logical operators instead of if.
Use multiple if instead of if/else-if.
Avoid for loops; use array methods instead.
Avoid callback-based asynchronous APIs.

ASYNCHRONOUS CODE:

Consume promises with async/await for best readability.
Whenever possible, run promises in parallel (Promise.all).
Handle errors and promise rejections.

*/

// Practice

/////////////////////////////////////////////
// Declarative and Functional JS Principles
/*

### Imperative vs. Declarative Code

#### **Imperative Code**
- **Foco:** O código imperativo se concentra no **como** realizar uma tarefa, fornecendo instruções detalhadas de cada etapa.
- **Estilo:** Explicita o fluxo de controle, incluindo loops, condições e mutações de estado.
- **Exemplo:** Um loop `for` que percorre uma lista de números e calcula sua soma.
```javascript
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
```
- **Características:**
- Detalha cada passo para atingir um objetivo.
- Enfatiza o controle explícito do fluxo.
- Exemplo comum em linguagens como C, JavaScript, e Java.

#### **Declarative Code**
- **Foco:** O código declarativo se concentra no **que** deve ser feito, deixando o **como** 
para a linguagem ou framework.
- **Estilo:** Descreve o resultado desejado sem especificar os passos para alcançá-lo.
- **Exemplo:** Usar métodos funcionais como `reduce` para calcular a soma de uma lista.
```javascript
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
```
- **Características:**
- Abstrai os detalhes da implementação.
- Geralmente mais conciso e legível.
- Exemplos comuns incluem SQL e funções de array em JavaScript (e.g., `map`, `filter`).

---

### Functional Programming Principles

A **Programação Funcional (FP)** é um paradigma que trata o processo de computação como a 
avaliação de funções matemáticas, evitando mudanças de estado e dados mutáveis.

#### **Principais Princípios:**

1. **Imutabilidade (Immutability)**
- **Descrição:** Os dados não devem ser modificados após sua criação. Novos dados são criados em vez de modificar os existentes.
- **Vantagem:** Isso evita efeitos colaterais inesperados e facilita a depuração.
- **Exemplo:**
```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];  // Sem alterar o array original
```

2. **Funções Puras (Pure Functions)**
- **Descrição:** Funções que, para as mesmas entradas, sempre retornam o mesmo resultado e não têm efeitos colaterais.
- **Vantagem:** Facilita a previsibilidade do código e torna-o mais fácil de testar.
- **Exemplo:**
```javascript
const add = (a, b) => a + b;  // Sempre retorna o mesmo resultado para os mesmos argumentos
```

3. **Funções de Primeira Classe (First-Class Functions)**
- **Descrição:** Funções são tratadas como valores, podendo ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções.
- **Vantagem:** Habilita a criação de funções mais abstratas e flexíveis.
- **Exemplo:**
```javascript
const greet = () => console.log('Hello');
const run = (fn) => fn();
run(greet);  // Executa a função passada como argumento
```

4. **Funções de Alta Ordem (Higher-Order Functions)**
- **Descrição:** Funções que recebem outras funções como argumento ou retornam funções.
- **Vantagem:** Promove a reutilização e a composição de funções.
- **Exemplo:**
```javascript
const multiply = (x) => (y) => x * y;
const double = multiply(2);
console.log(double(5));  // 10
```

5. **Evitar Efeitos Colaterais (Avoid Side Effects)**
- **Descrição:** Funções devem evitar alterar o estado externo ou realizar operações como I/O durante sua execução.
- **Vantagem:** Reduz a complexidade e torna o código mais previsível.
- **Exemplo:** Em vez de modificar uma variável global, retorna um novo valor.

6. **Composição de Funções (Function Composition)**
- **Descrição:** Combinar pequenas funções para criar funções mais complexas.
- **Vantagem:** Funções menores são mais fáceis de entender, testar e reutilizar.
- **Exemplo:**
```javascript
const add = (x) => x + 1;
const double = (x) => x * 2;
const addAndDouble = (x) => double(add(x));
```

---

### Resumo:
- **Imperative vs Declarative:**
- **Imperative:** Foco em *como* fazer algo.
- **Declarative:** Foco em *o que* fazer.

- **Functional Programming:** Enfatiza funções puras, imutabilidade, e a ausência de efeitos colaterais, promovendo código mais previsível e modular.

*/