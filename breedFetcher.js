const request = require('request');

const URL = 'https://api.thecatapi.com/v1/breeds/search?q=';


const fetchBreedDescription = function(breedName, callback) {
  request(URL + breedName, (error, response, body) => {
    const data = JSON.parse(body);
    return (error, data[0].description);
  });
};

module.exports = { fetchBreedDescription };