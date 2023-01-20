console.log(`Hello Node.js v${process.versions.node}!`);

// // IP FETCH

// const fetch = require('node-fetch');

// (async function main () {
//   const response = await fetch('https://api.ipify.org/?format=json');
//   const data = await response.json();
// console.log(data.ip);
// })();


////IP

// async function myIP() {
//   let axios = require('axios');
//   // let cheerio = require('cheerio');
//   let response = await axios.get('https://api.ipify.org/?format=json');
//   let data = response.data.ip;
//   let result = data;
//   console.log(result);
// }

// console.log(myIP());

//========================================================================================


// //IP + CIDADE

// //<code class="language-javascript">

// async function myIP() {
//   let axios = require('axios');
//   // let cheerio = require('cheerio');
//   let response = await axios.get('https://tools.keycdn.com/geo');
//   let data = response.data;
//   let result = data;
//   console.log(result);
// }

// console.log(myIP());



// //CHEEEEEEEEEEEEEEEERIO


// const axios = require('axios');
// const cheerio = require('cheerio');

// let html = "";
// axios.get("https://tools.keycdn.com/geo").then((response) => {
//   const $ = cheerio.load(response.data);
//   html = $('code[class="language-javascript"]').text();
//   console.log(html);
// });

// ============================================================================================




// //SELECT ESTADO
// var UFs = []

// async function estado() {
//   let axios = require('axios');
//   let response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
//   let data = response.data;
//   let result = data;
//   //siglas
//   result.map((uf, index) => {
//     UFs.push(result[index].sigla);
//   });
//   console.log(UFs.sort());
// }

// console.log(estado());

// //SELECT CIDADE

// var cidades = []

// async function cidade() {
//   let axios = require('axios');
//   // let response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + UFs[0] + '/municipios');
//   let response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios');
//   let data = response.data;
//   let result = data;
//   result.map((cidade, index) => {
//     cidades.push(result[index].nome);
//   });
//   console.log(cidades.sort());
// }

// console.log(cidade());




// DISTÂNCIA

// async function distance() {
//   let axios = require('axios');
//   // let cheerio = require('cheerio');
//   let response = await axios.get('https://br.distanciacidades.net'); //calcular?from=santos&to=cubatao
//   let data = response.data;
//   let result = data;
//   console.log(result);
// }

// console.log(distance());