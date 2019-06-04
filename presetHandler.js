// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, index, newPresetArray) => {
  let returnArray = [];
  if (request === 'GET' || request === 'PUT') {
    if ( index >= 0 && index < 2 ) {
      returnArray[0] = 200;
      if (newPresetArray) {
        returnArray[1] = newPresetArray;
        presets[index] = newPresetArray;
      } else {
        returnArray[1] = presets[index];
      }
      return returnArray;
    } else {
        returnArray[0] = 404;
        return returnArray;
    }
  } else {
      returnArray[0] = 400;
      return returnArray;
  }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
