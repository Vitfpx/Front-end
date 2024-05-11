'use strict'; // Todas as restrições são graçás à esta linha
/*
What is JavaScript:

-- High-level --

We don't need to ask for memory (manage a memory), for example, to create a variable, things just happen. It makes 
it easier to use and learn, however, no high-level program will be as fast and optimized as a low-level one

-- Garbage-collected --

An algorithm within JS that automatically removes old and unused objects from the computer's memory so as not to 
overload it, meaning we don't have to do it manually.

-- Interpreted or just-in-time compiled --

Machine codes (0, 1), códigos binários. Todas as linguagens interpretam nossos códigos para binários e depois o 
processador os lê. Essa capacidade de interpretação (interpreted) é o just-in-time compiled

-- Multi-paradigm --

An approach and mindset of structuring code, which will direct your coding style and technique.
More popular: 1. Procedural Programming; 2. Object-oriented Programming (OOP); 3. Functional Programming (FP)

-- Prototype-based object-oriented --

In a prototype-based system, instead of classes defining objects, objects are created from other existing objects.
Each object can have a prototype, which is another object from which it inherits properties. When you access a 
property or method of an object, JavaScript first checks whether the object has that property or method. If not, 
it searches the prototype of that object, and so on until it finds the desired property or reaches the null prototype.

-- First-class functions --

Functions are simply treated as variables. We can pass tthem into other functions, and return them from functions.

Ex: overlay.addEventListener("click", closeModal); Passing a function into another function as an argument.

-- Dynamic --

Dynamically-typed language:
let x = 20;
x = 'Vitor' 

-- Single-threaded and Non-blocking Event Loop --

Concurrency model: How the JS engine handles multiple tasks happening at the same time.

A very long task would block the single thread. That's why Non-blocking behavior exists. 
Which creates a loop event that puts tasks running in the background and then returns them
to the main thread as soon as they are completed.


90. The JS Engine and Runtime

Every browser has an engine to run javascript, Chrome's would be V8, the most famous. 
All these engines contain call stack and heap

*/

/*
Call stack é onde nosso código é realmente executado. Usando Execution Context.
Ou seja, aqui é onde o código é executado.

Heap é uma piscina de memória estruturado que armazena todos os objetos de que nosso aplicativo precisa.
E aqui, é onde os objetos são estocados, que é dentro da memória.

-------------------------------------------------------------------------------------

Compilation VS. Interpretation

Compilation: Todo o código é convertido para machine code de uma vez só, e escrito em um arquivo binário para que possa ser executado pelo computador

----------------

Duas etapas: 

Código Fonte -step1-> machine code (em forma de arquivo portável) -step 2-> Execução da CPU e depois processador.

----------------

Interpretation (Old JavaScript): Interpreter runs through the source code and executes it line by line.

Uma etapa:

Código Fonte -step1-> Execução da CPU e depois processador. (O código é convertido em machine code no processo)

Linguagens Interpretation são muito mais lentas.

----------------

Just-In-Time(JIT) Compilation: Entire code is converted into machine code at once, then executed immediately.

Duas etapas:

Código Fonte -step1-> machine code (em formato de arquivo) -step2-> Execução da CPU e depois processador

Porém, agora a execução acontece imediatamente após a compilação.

Dentro do JIT, existe o Parsing que é o processo de análise do código-fonte para entender sua estrutura gramatical, enquanto a AST é uma representação dessa estrutura em forma de árvore que é utilizada pelo motor V8 para executar o código JavaScript.

Ex de AST:

const x = 23;

Equivale à:

VariableDeclaration {
   start: 0
   end: 13
 -declarations: {
   -VariableDeclaration {
	start: 6
	end: 12
      -id: Identifier {
	start: 6
	end: 7
	name: "x"

	}
	-init: Literal = $node {
		start: 10
		end: 12
		value: 23
		raw: "23"
		}
          }
     }
}
kind: "const"


Runtime In The Browser

APIs - Functionalities provided to the engine, accessible on window object

*/

/*

Execution Context e Environment Variable:

O execution context global (contexto de execução global) não é uma parte do ambiente variável, mas sim o contexto de execução no qual o código global é executado inicialmente. Este contexto de execução global contém as variáveis e funções globais que são acessíveis em todo o escopo do script.

Por outro lado, o ambiente variável se refere ao conjunto de variáveis disponíveis em um determinado contexto de execução, incluindo variáveis locais, variáveis ​​globais e parâmetros de função. O ambiente variável muda conforme o código é executado e diferentes contextos de execução são criados.

Quando uma função é chamada, um novo contexto de execução é criado, e o ambiente variável desse contexto inclui tanto as variáveis locais declaradas dentro da função quanto as variáveis do escopo externo acessíveis dentro da função (por meio de closure).

EX:

const name = "Vitor"

const f1 = () => {
	let a = 1
}
const f2 = () => {
	let b = 2
}
const x = f1()

Ambiente Variável Global:                                Ambiente Variável dentro de f1():

name: "Vitor"                                            a: 1
f1(): function
f2(): function
x: unkown





*/

/*
Como funciona o JIT dentro do V8:

Parsing (Análise):

O processo de parsing envolve a análise do código-fonte JavaScript para criar uma representação interna que o motor JavaScript possa entender e executar. O código-fonte JavaScript é lido caractere por caractere e convertido em uma estrutura de dados chamada de Abstract Syntax Tree (Árvore Sintática Abstrata - AST). Esta árvore representa a estrutura gramatical do código JavaScript.

Compilation (Compilação):

Após a análise, o motor V8 compila o código JavaScript em bytecode intermediário, que é um código de máquina de nível intermediário específico para a plataforma. Este bytecode é então otimizado e compilado em código de máquina nativo. 

Existem duas fases principais de compilação:

Compilação Não Otimizada: Nesta fase, o código é compilado rapidamente para permitir uma execução rápida. O código gerado é simples e eficiente, mas não otimizado para a execução mais rápida possível.

Compilação Otimizada: Após a execução do código por um tempo e a coleta de informações sobre o comportamento do código, o V8 pode decidir otimizar partes específicas do código. Isso envolve a geração de código de máquina altamente otimizado, adaptado ao comportamento observado do código durante a execução.

Execution (Execução):

Depois que o código é compilado para código de máquina nativo, ele é executado. Durante a execução, o V8 gerencia a pilha de chamadas, alocação de memória, manipulação de exceções e outras operações necessárias para a execução do código JavaScript.

Optimization (Otimização):

O V8 é uma máquina virtual JIT (Just-In-Time), o que significa que ele otimiza o código JavaScript durante a execução. Ele usa informações coletadas durante a execução para identificar partes do código que podem ser otimizadas. Isso pode incluir a eliminação de código morto, a otimização de loops, a inlining de funções, entre outras técnicas. As otimizações são aplicadas gradualmente, conforme o código é executado, e podem ser desfeitas se o comportamento do código mudar.

*/

/*
Top-level code: refere-se ao código que está fora de qualquer função ou bloco de código em um arquivo JavaScript ou em um script embutido em uma página da web. Esse código é executado quando o arquivo é carregado ou quando a página é carregada no navegador.
*/

/* Thread: em JavaScript, como uma linguagem de programação de uma única thread, não há threads no sentido tradicional como em linguagens de programação de múltiplas threads, como Java ou C++. No entanto, JavaScript pode trabalhar com threads através do conceito de Web Workers. (threads executadas em segundo plano)
 */

/*
Global scope
Function scope
Block scope

Eles podem compartilhar variáveis, funções e etc. Porém, apenas de baixo para cima.

EX: 

Global scope : name = "Vitor"

Function scope [first()]: age = 20

Function scope [second()]: job = "student"; console.log(`${name} tem ${age} de {job}`)
second() está dentro do first()...

Block scope [if{}] : xxxx

first() e second() não podem compartilhar variáveis pois são de scopes de mesmo nível no scope chain.

Então o console.log() vai receber tudo. E todos os scopes recebem as variáveis globais, pois estão
no topo do scope chain.
*/

/*
Scope Chain VS. Call Stack VS. Execution Content VS. Environment Variable

--------Scope Chain (Cadeia de Escopo):

A Scope Chain se refere à ordem na qual os escopos são aninhados em JavaScript e como as variáveis são resolvidas durante a execução do código. Ela determina de onde as variáveis são acessadas em um determinado momento.

As variáveis globais são acessíveis em todos os lugares do código. Quando você tenta acessar uma variável dentro de uma função ou bloco de código, o interpretador JavaScript primeiro verifica se a variável está disponível no escopo local. Se não estiver, ele segue a cadeia de escopo até encontrar a variável no escopo pai mais próximo. Se a variável não for encontrada em nenhum escopo pai, ela é considerada não definida.

Isso se aplica a todas as variáveis, independentemente de serem declaradas com var, Let ou Const. A diferença é que Let e Const têm escopo de bloco, enquanto Var tem escopo de função (function scope), ou seja, uma variável Var pode ser declarada dentro de um IF e ser chamada fora dele.

--------Call Stack (Pilha de Chamadas):

A pilha de chamadas mantém o controle da execução de funções em JavaScript. Sempre que uma função é chamada, um novo registro de chamada (call frame) é empilhado na pilha. Quando a função é concluída, seu registro de chamada é removido da pilha.

A ordem de chamada no escopo global pode influenciar a pilha de chamadas, uma vez que a execução do código começa no escopo global. Funções são adicionadas e removidas da pilha de chamadas conforme são chamadas e retornam.

--------Execution Context (Contexto de Execução):

O contexto de execução inclui todas as informações necessárias para executar um trecho de código, incluindo o código em si, o ambiente de variáveis, a Scope Chain, o valor de this e a referência para o escopo externo (closure), se aplicável.

É importante notar que o termo correto é "Execution Context" em inglês. "Execution Content" pode não ser amplamente reconhecido como um termo em JavaScript.

--------Environment Variable (Variável de Ambiente):

As variáveis de ambiente (ou variáveis disponíveis) em um contexto de execução são aquelas que podem ser acessadas dentro desse contexto. Isso inclui variáveis locais, variáveis globais e parâmetros de função.

A Scope Chain determina quais variáveis estão disponíveis em um determinado contexto de execução, seguindo a cadeia de escopo até encontrar a variável desejada.

*/

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));\
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Vitor';
calcAge(1995);
// console.log(age);
// printAge();

/*
O que é Hoisting?

Hoisting: Torna alguns tipos de variáveis acessíveis/utilizáveis no código antes de serem realmente declarado. 
“Variáveis elevadas ao topo do seu escopo”. 

Antes da execução, o código é verificado em busca de declarações de variáveis e, para cada variável, uma nova
propriedade é criada no objeto de ambiente variável.

A principal razão para o hoisting é facilitar a interpretação do código pelo interpretador JavaScript. Antes de executar o código, o JavaScript passa por duas fases: compilação e execução. Durante a fase de compilação, o JavaScript identifica todas as declarações de variáveis e funções e as move para o topo do seu escopo. Isso permite que você use essas variáveis e funções em qualquer lugar do seu código, mesmo antes de serem declaradas.

-----------------------------

Hoisting com var:

console.log(foo); // undefined
var foo = "hello";
console.log(foo); // "hello"

-----------------------------

Hoisting com let e const:

console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
let foo = "hello";
console.log(foo); // "hello"

-----------------------------

Hoisting com Function Declarations:

foo(); // "hello"
function foo() {
    console.log("hello");
}

-----------------------------

Hoisting com Function Expressions:

console.log(foo); // undefined
foo(); // TypeError: foo is not a function
var foo = function() {
    console.log("hello");
};
console.log(foo); // function

-----------------------------
*/

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Vitor';
let job = 'Student';
const year = 2003;

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts); // Não vai dar erro pois está declarado como var, porém sera sempre um valor undefined
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

// Com um bug desse que é muito difícil de encontrar, concluímos quer não é bom chamar uma função antes de declará-la. E nunca use var :D

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
