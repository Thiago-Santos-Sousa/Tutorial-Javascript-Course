// Functions - declare, invoke

// Exemple 1

function hello() {
  // logic
  console.log('hello there Bob');
  console.log('hello there Anna');
  console.log('hello there Chris');
}

hello();
// come code here...

//

// Exemple 2

function helloBob() {
  console.log('hello there Bob');
}

function helloAnna() {
  console.log('hello there Anna');
}

function helloChris() {
  console.log('hello there Chris');
}

helloBob();
helloAnna();
helloChris();

//

// Exemple 3

const susy = 'Susy';

function greet(name, second) {
  console.log(second);

  console.log(`hello there ${name}`);
}

greet('Bob', susy);
greet('Anna', 'Samanta');
greet('chris', 80);

// Exemple 4 - Return

const wallHeight = 80;

function calculate(value) {
  // const newValue = value * 2.54; - case 2
  // console.log(`the value in cm is: ${value * 2.54} cm`); - case 1

  // return newValue; - case 2

  return value * 2.54; // - case 3
}

const width = calculate(100);
const heigth = calculate(wallHeight);

const dimensions = [width, heigth];
console.log(dimensions);

// Exemple 5
// function definition/declaration

function addvalues(num1, num2) {
  return num1 + num2;
}

const firstValue = addvalues(3, 4);
const secondValue = addvalues(12, 34);

const values = [firstValue, secondValue];
console.log(values);

// function expression

const add = function (num3, num4) {
  return num3 + num4;
};

const thirdValue = add(7, 7);
const value0 = add(70, 57);
const value1 = add(100, 8);

const valueTotal = [thirdValue, value0, value1];
console.log(valueTotal);

// Arrow function

const multiply = (numI, numII) => numI * numII;
let mult = multiply(10, 10);
console.log(mult);

