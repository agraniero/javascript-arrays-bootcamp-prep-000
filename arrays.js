var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ['snickers', 'hudred grand', 'kitkat', 'skittles'];

var newElement = 'whatchamacallit';

function addElementToBeginningOfArray(chocolateBars, newElement) {
  return [newElement, ...chocolateBars];
}

var cats = ["Milo", "Garfield"];
var otherNewElement = "Felix";

function destructivelyAddElementToBeginningOfArray(cats, otherNewElement) {
  cats.unshift(otherNewElement);
  return cats;
}

var superheroines = ["catwoman", "she-hulk", "mystique"];
var superElement = "wonder woman";

function addElementToEndOfArray(superheroines, superElement) {
  return [...superheroines, superElement];
}

function destructivelyAddElementToEndOfArray(superheroines, superElement) {
  superheroines.push(superElement);
  return superheroines;
}
