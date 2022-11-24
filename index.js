const {fetchBreedDescription} = require('./breedFetcher');
const catBreed = process.argv[2];

fetchBreedDescription(catBreed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

const printMessage = function(error, message) {
  return error, message;
};

fetchBreedDescription(catBreed, printMessage);