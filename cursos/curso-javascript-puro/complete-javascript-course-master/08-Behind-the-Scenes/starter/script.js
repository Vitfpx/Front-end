'use strict';
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

Execution Context



*/