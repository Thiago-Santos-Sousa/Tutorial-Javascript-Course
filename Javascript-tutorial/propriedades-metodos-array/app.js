// Array properties and methods

let names = ['anne', 'thais', 'rau', 'pedro', 'thiago'];

//length
console.log(names.length);
console.log(names.length - 1);

//concat
const lastNames = ['bob', 'susy', 'teteu'];
const allNames = names.concat(lastNames);
console.log(allNames);

//reverse
console.log(allNames.reverse());

//unshift
allNames.unshift('susy');
allNames.unshift('rau');
console.log(allNames);

//shift
allNames.shift('susy');
allNames.shift('rau');
console.log(allNames);

//push
allNames.push('tago');
allNames.push('davi');
console.log(allNames);

//pop
allNames.pop();
allNames.pop();
console.log(allNames);

//splice
const especificName = allNames.splice(2, 1);
console.log(especificName);
console.log(allNames);