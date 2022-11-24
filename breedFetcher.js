const request = require('request');

const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';
const catBreed = process.argv.slice(2);

request(URL + catBreed, (error, response, body) => {
  if (error) {
    console.log(error.message);
    process.exit();
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("No information found for breed:", catBreed[0]);
    process.exit();
  }
  console.log(data[0].description);
  process.exit();
});