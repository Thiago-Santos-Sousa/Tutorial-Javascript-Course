// Value vs Reference

const number = 10;
const number1 = number;
let number2 = number;
number2 = 7;

console.log(`the first value is ${number}`);
console.log(`the number1 is ${number1}`);
console.log(`the second value is ${number2}`);

//

let person = { name: 'bob' };
let person2 = person;
person2.name = 'susy';

console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);