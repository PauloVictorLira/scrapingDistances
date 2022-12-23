console.log(`Hello Node.js v${process.versions.node}!`);

async function Rodar() {
  let axios = require('axios');
  // let cheerio = require('cheerio');
  let response = await axios.get('https://br.distanciacidades.net/'); //https://br.distanciacidades.net/calcular?from=santos&to=cubatao
  let data = response.data.data;
  let result = data[0];
  console.log(result);
}

console.log(Rodar());