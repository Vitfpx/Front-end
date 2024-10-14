'use strict';

// Exercício 1: Criando um Simulador de Download de Arquivos
// let attempts = 0;

// const wait = function (sec) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, 1000 * sec);
//   });
// };

// const simuladorDownload = async function (file) {
//   return new Promise(function (resolve, reject) {
//     const success = Math.random() > 0.2; // 80% de chance de funcionar
//     if (success) {
//       resolve(`${file} was downloaded! :D`);
//       attempts++;
//     } else reject(`${file} wasn't downloaded. 💣💣💣`);
//   });
// };

// const logDownloadResults = function (file, status) {
//   if (status === 'fulfilled') {
//     console.log(file.value); // Arquivo baixado com sucesso
//   } else {
//     console.log(file.reason); // Erro no download
//   }
// };

// const downloadAllFiles = async function (fileArr, time) {
//   try {
//     const files = await Promise.allSettled(
//       fileArr.map(file => simuladorDownload(file))
//     );

//     for (const [i, file] of files.entries()) {
//       await wait(time[i]);
//       logDownloadResults(file, file.status);
//     }

//     if (attempts === files.length)
//       console.log(`All ${attempts} files downloaded!`);
//     else
//       console.log(
//         `${attempts} files was downloaded, but ${Math.abs(
//           attempts - files.length
//         )} were not downloaded...`
//       );
//   } catch (err) {
//     console.error(err);
//   }
// };

// downloadAllFiles(['Elden Ring', 'Fifa', 'League'], [1, 2, 0.5]);
