var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var cities = array;
  cities = [element, ...cities];
  return cities;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var cities = array;
  cities = [...cities,element];
  return cities;
}

function destructivelyAddElementToEndOfArray(array, element){
  var len = array.length;
  array[len] = element;
  return array;
}
