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
// Importing module
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

// Imports are not copies of the export,they are instead like a live connection

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

// Tudo isso só funcionar por conta das CLOSURES

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
 * mv: mover file
 * rmdir: remover dir vazios
 * rm -R 'name': remover dir com conteúdo
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
