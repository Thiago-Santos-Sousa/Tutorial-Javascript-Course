// Condicional Statements
// >, <, >=, <=, ==, ===, !=, !===

const value = 2 > 5;
console.log(typeof value);

if (value) {
  console.log('is true');
} else {
  console.log('is false');
}

if (2 > 1) {
  console.log('hello world');
} else {
  console.log('is false');
}

//

const num1 = 6;
const num2 = 6;

const result = num1 >= num2;

if (num1 > num2) {
  console.log('first number is bigger than second');
} else if (result) {
  console.log('first number equal to a seconde');
} else {
  console.log('second number is bigger than first');
}

// ! - check if the value is not true

const Value = false;

if (!Value) {
  console.log('value is false');
}
