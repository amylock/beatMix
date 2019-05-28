// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

//checks if array is one of the drum arrays
const isValidArray = array => {
  return (array === kicks || array === snares || array === hiHats || array === rideCymbals) ? true : false;
}

const toggleDrum = (array, index) => {
  if (isValidArray(array) && index >= 0 ) {
    array[index] = array[index] ? false : true;
  }
};

function clear(array) {
  if (isValidArray(array)) {
    array.forEach(function(element, index, array) {
      array[index] = false;
    });
  }
}

function invert(array) {
  if (isValidArray(array)) {
    array.forEach(function(element, index, array) {
      array[index] = array[index] ? false : true;
    });
  }
}
