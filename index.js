console.log(`Hello Node.js v${process.versions.node}!`);

// //DISTÂNCIA BACKUP

// async function Rodar() {
//   let axios = require('axios');
//   // let cheerio = require('cheerio');
//   let response = await axios.get('https://br.distanciacidades.net/'); //https://br.distanciacidades.net/calcular?from=santos&to=cubatao
//   let data = response.data.data;
//   let result = data[0];
//   console.log(result);
// }

// console.log(Rodar());


// // IP FETCH

// const fetch = require('node-fetch');

// (async function main () {
//   const response = await fetch('https://api.ipify.org/?format=json');
//   const data = await response.json();
// console.log(data.ip);
// })();


////IP

async function myIP() {
  let axios = require('axios');
  // let cheerio = require('cheerio');
  let response = await axios.get('https://api.ipify.org/?format=json');
  let data = response.data.ip;
  let result = data;
  console.log(result);
}

console.log(myIP());



// DISTÂNCIA

async function distance() {
  let axios = require('axios');
  // let cheerio = require('cheerio');
  let response = await axios.get('https://br.distanciacidades.net//calcular?from=santos&to=cubatao'); 
  let data = response.data;
  let result = data;
  console.log(result);
}

console.log(distance());