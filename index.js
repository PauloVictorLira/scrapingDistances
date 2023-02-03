console.log(`Hello Node.js v${process.versions.node}!`);

// // IP FETCH

// const fetch = require('node-fetch');

// (async function main () {
//   const response = await fetch('https://api.ipify.org/?format=json');
//   const data = await response.json();
// console.log(data.ip);
// })();


//IP + Location 
var ip, location
async function myIpLoc() {
  let axios = require('axios');
  // let cheerio = require('cheerio');
  let responseIp = await axios.get('https://api.my-ip.io/ip.json');
  ip = responseIp.data.ip;  
  console.log(ip);  
  let responseLocation = await axios.get('https://ipinfo.io/198.49.132.0/'); //https://ipinfo.io/198.49.133.250  http://ip-api.com/json/
  // let responseLocation = await axios.get('https://ipinfo.io/' + ip); //https://ipinfo.io/198.49.133.250  http://ip-api.com/json/
  location = responseLocation.data;  
  console.log(location); 
}

console.log(myIpLoc());

//========================================================================================

//SELECT ESTADO
//alterar de acordo com IP tbm

var UFs = []

async function getRegions() {
  let axios = require('axios');
  let response = await axios.get('http://servicodados.ibge.gov.br/api/v1/localidades/estados');
  let data = response.data;
  let result = data;
  //siglas
  result.map((uf, index) => {
    UFs.push(result[index].sigla);
  });
  console.log(UFs.sort());
}

console.log(getRegions());

//SELECT CIDADE

var cidades = []

async function getCities() {
  let axios = require('axios');
  // let response = await axios.get('http://servicodados.ibge.gov.br/api/v1/localidades/estados/' + UFs[0] + '/municipios');
  let response = await axios.get('http://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios');
  let data = response.data;
  let result = data;
  result.map((cidade, index) => {
    cidades.push(result[index].nome);
  });
  console.log(cidades.sort());
}

console.log(getCities());




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