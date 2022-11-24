const request = require('request');

const URL = 'https://api.thecata2pi.com/v1/breeds/search?q=';


const fetchBreedDescription = function(breedName, callback) {
  request(URL + breedName, (error, response, body) => {
    if (error) {
      callback(error.message, null);
    } else if (JSON.parse(body).length === 0) {
      callback(`No information found for breed: ${breedName}`, null);
    } else {
      callback(null, JSON.parse(body)[0].description);
    }
  });
};


module.exports = { fetchBreedDescription };