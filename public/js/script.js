// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

//checks if array is one of the drum arrays
const isValidArray = arrayName => {
  return (arrayName === 'kicks' || arrayName === 'snares' || arrayName === 'hiHats' || arrayName === 'rideCymbals') ? true : false;
};

const arrayNameToArray = arrayName => {
  switch (arrayName){
    case 'kicks':
      return kicks;
    case 'snares':
      return snares;
    case 'hiHats':
      return hiHats;
    case 'rideCymbals':
      return rideCymbals;
  }
};

const toggleDrum = (arrayName, index) => {
  if (isValidArray(arrayName) && index >= 0 && index < 16 ) {
    let array = arrayNameToArray(arrayName);
    array[index] = array[index] ? false : true;
  }
};

function clear(arrayName) {
  if (isValidArray(arrayName)) {
    let array = arrayNameToArray(arrayName);
    array.forEach(function(element, index, array) {
      array[index] = false;
    });
  }
}

function invert(arrayName) {
  if (isValidArray(arrayName)) {
    let array = arrayNameToArray(arrayName);
    array.forEach(function(element, index, array) {
      array[index] = array[index] ? false : true;
    });
  }
}
