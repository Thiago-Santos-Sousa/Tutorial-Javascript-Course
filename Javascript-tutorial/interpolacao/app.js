// Template Literals - ES6+
// Interpolation

const name = 'Thiago Santos';
const age = 27;

const value = `Hey it's ${name} and the is ${age} years old`;

console.log(value);

const car = {
  mark: 'Dodge',
  model: 'Challenge',
  instruction: 'start the car, go to the mall and come back before lunch'
};

const making = `OK! so you want me ${car.instruction}? I am going.`;
console.log(making);

const myCar = `My car brand is ${car.mark}, it's the ${car.model} is the most beautiful model.`;
console.log(myCar);

const number1 = 50;
const number2 = 50;
const result = `${number1 + number2}`;
console.log(result);

const Value = `${50 + 50}`;
console.log(Value);
