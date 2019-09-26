const earthYear = 1;
const earthDays = 365.25;
const earthSeconds = 31557600;

const planetRates = {
  'earth': 1,
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132
                };

export const age = (planet, numSec) => {

  const periodInSeconds = planetRates[planet] * earthSeconds;

  console.log(planet);
  switch (planet){
    case 'earth': 
      return Number((numSec / periodInSeconds).toFixed(2));
      break;

    case 'mercury':
      return Number((numSec / periodInSeconds).toFixed(2));
      break;

    case 'venus': 
      console.log("hello!!");
      return Number((numSec / periodInSeconds).toFixed(2));
      break;

    case 'mars': 
      return Number((numSec / periodInSeconds).toFixed(2));
      break;

    case 'jupiter': 
      return Number((numSec / periodInSeconds).toFixed(2));
      break;

    case 'saturn': 
      return Number((numSec / periodInSeconds).toFixed(2));
      break;

    case 'uranus': 
      return Number((numSec / periodInSeconds).toFixed(2));
      break;
    
    case 'neptune': 
      return Number((numSec / periodInSeconds).toFixed(2));
      break;
  }
};
