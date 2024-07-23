const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

/////////////////////////////
// Destructuring Arrays

// Ex.1
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// Ex.2
// const [, , thirdBook] = books;

// console.log(thirdBook);

// Ex. 3
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;

// console.log(rating, ratingsCount);

// Ex. 4
// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// Ex aleatório da minha cabeça
// const [firstBookRead, secondBookRead] = [books[2].title, books[0].title];

// console.log(
//   `
// Primeiro livro da minha lista: ${firstBookRead}
// Segundo livro da minha lista: ${secondBookRead}
// `
// );

/////////////////////////////
// Destructuring Objects

// Ex. 1

// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// Ex. 2
// const { keywords: tags } = books[0];
// console.log(tags);

// Ex. 3

// const { language, programmingLanguage = 'unknown' } = books[6];

// Ex. 4

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';

// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// Ex. 5

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);
// console.log(books[0].thirdParty.goodreads.rating);

// Ex. 6

// const printBookInfo = function ({ title, author, year = 'year unknown' }) {
//    console.log(`${title} by ${author}, ${year}`);
// };

// printBookInfo({
//   title: 'Algorithms',
//   author: 'Robert Sedgewick',
//   year: '2011',
// });

/////////////////////////////
// Spread Operator

// Ex. 1
// const bookAuthors = [...books[0].author, ...books[1].author];

// console.log(bookAuthors);

// Ex. 2
// function spellWord(letter) {
// console.log(...letter);
// }

// spellWord('JavaScript');

/////////////////////////////
// Rest Patterns and Parameters

// Ex. 1
// const [mainKeywods, ...rest] = books[0].keywords;
// console.log(mainKeywods, rest);

// Ex. 2
// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher);
// console.log(restOfTheBook);

// Ex. 3
// const printBooks = function (title, ...authors) {
// console.log(`The book "${title}" has ${authors.length} authors`);
// };

// printBooks('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

/////////////////////////////
// Short Circuiting (&& and ||)

// Ex. 1
// const hasExamplesInJava = book => {
//   return book.programmingLanguage === 'Java' || 'no data available';
// };
// console.log(hasExamplesInJava(books[0]));
// console.log(hasExamplesInJava(books[1]));

// Ex. 2

// for (let i = 0; i < books.length; i++) {
// books[i].onlineContent &&
//   console.log(`"${books[i].title}" provides online content.`);
// }

/////////////////////////////////////////
// The Nullish Coalescing Operator (??)

// Ex. 1
// for (let i = 0; i < books.length; i++) {
// books[i].onlineContent ??
//   console.log(
//     `"${books[i].title}" provides no data about its online content.`
//   );
// }

//////////////////////////////////
// Logical Assignments Operators

// // Ex. 1
// for (let i = 0; i < books.length; i++) {
//   console.log((books[i].edition ||= 1));
// }

// Ex. 2

// Jeito que o ex pediu
// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

// Meu jeito de fazer
// for (let i = 0; i < books.length; i++) {
//   books[i].highlighted ||= !(books[i].thirdParty.goodreads.rating < 4.2);
// }

////////////////////////////////////
// Looping Arrays: The for-of Loop

// Ex. 1
// let pageSum = 0;

// for (const book of books) {
//   pageSum += book.pages;
// console.log(pageSum);
// }

// Ex. 2
// const allAuthors = [];

// Minha maneira
// for (const book of books) {
//   if (typeof book.author === 'object') {
// Achei que fosse Object mas é 'object' kk
//     allAuthors.push(...book.author);
//   } else {
//     allAuthors.push(book.author);
//   }
// }
// console.log(allAuthors);
// console.log(typeof books[5].author);

// Maneira do Jonas
// for (const book of books) {
//   if (typeof book.author === 'string') {
//     allAuthors.push(book.author)
//   } else {
//     for (const author of book.author) {
//       allAuthors.push(author);
//     }
//   }
// }

// Ex. 3
// for (const [i, author] of allAuthors.entries()) {
// console.log(`${i + 1}. ${author}`);
// }

/////////////////////////////
// Enhanced Object Literals

// Ex. 1
// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };
// console.log(newBook);

// Ex. 2
// const pages = 880;

// const newBook2 = {
//   title: 'Computer Networking: A Top-Down Approach',
//   author: ['James F. Kurose', 'Keith W. Ross'],
//   publisher: 'Addison Wesley',
//   pages,
// };

////////////////////////////
// Optional Chaining (?.)
// Ex. 1
// const getFirstKeyword = books => {
//   console.log(books.keywords?.[0]);
// };

// getFirstKeyword(books[0]);
// getFirstKeyword(newBook2);

////////////////////////////////////////////////////
// Looping Objects: Object Keys, Values and Entries

// Ex. 1
// const entries = [];

// const goodreadsKeys = Object.keys(books[0].thirdParty.goodreads);
// console.log(goodreadsKeys);

// for (const key of goodreadsKeys) entries.push([key]);
// console.log(entries);

// Resultado esperado :D
// [['rating'], ['ratingsCount'], ['reviewsCount'], ['fiveStartRatingCount'], ['oneStartRatingCount']]

// Ex. 2
// const goodreadsValues = Object.values(books[0].thirdParty.goodreads);
// console.log(goodreadsEntries);
// for (const [key, value] of goodreadsValues.entries()) {
//   entries[key].push(value);
// }
// console.log(entries);

// Ex. 3
// const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries2);

// Ex. 4
// console.log(entries);
// console.log(entries2);

////////
// Sets

// Ex. 1
// const allKeywords = [];

// Meu jeito burro de fazer:

// for (const book of books) {
//   for (const keyword of book.keywords) {
//     allKeywords.push(keyword);
//   }
// } // Um for dentro de outro resolve o problema de não conseguir puxar um array facilmente
// console.log(allKeywords);

// Jeito foda do Jonas de fazer:

// for (const book of books) {
//   allKeywords.push(...book.keywords)
// }
// console.log(allKeywords);

// Resultado: ['computer science', 'programming', 'algorithms', 'data structures', ...]

// Ex. 2
// const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);

// Ex. 3
// uniqueKeywords.add('coding');
// uniqueKeywords.add('science'); // Tem que ser adicionar várias vezes, e não ('coding', 'science) 🚫
// console.log(uniqueKeywords);

// Ex. 4
// uniqueKeywords.delete('business');
// console.log(uniqueKeywords);

// Ex. 5
// const uniqueKeywordsArr = [...uniqueKeywords];

// Ex. 6
// uniqueKeywords.clear();
// console.log(uniqueKeywords);

//////////////////////
// Maps: Fundamentals
// Ex. 1
// [
//   ['title', 'Clean Code'],
//   ['author', 'Robert C. Martin'],
// ];
// const bookMap = new Map([
//   ['title', 'Clean Code'],
//   ['author', 'Robert C. Martin'],
// ]);

// Ex. 2
// bookMap.set('pages', 464);
// console.log(bookMap);

// Ex. 3
// console.log(`"${bookMap.get('title')} by ${bookMap.get('author')}"`);

// Ex. 4
// console.log(bookMap.size);

// Ex. 5
// bookMap.has('author') && console.log('"The author of the book is known"');

////////////////////
// Maps: Iteration

// Ex. 1
// const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

// Ex. 2
// for (const [keys, values] of firstBookMap) {
//   if (typeof values === 'number') console.log(keys);
// console.log(map);
// }

//////////////////////////////////
// Working with Strings - Part 1
// Ex. 1
// console.log(
//   books[0].ISBN[6],
//   books[0].ISBN[4],
//   books[0].ISBN[9],
//   books[0].ISBN[8]
// );
// console.log(books[0].ISBN);

// Ex. 2
// const quote =
//   'A computer once beat me at chess, but it was no match for me at kick boxing';
// console.log(quote.indexOf('chess'));

// Ex. 3
// console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// Ex. 4
// const allNames = [];
// const isContributor = function (name) {
//   console.log(name.lastIndexOf('(Contributor)') !== -1);
// };
// isContributor('Julie Sussman (Contributor)');
