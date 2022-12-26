//Numbers
//arithmetic operations

const number0 = 15;
const number1 = 4.561;
const number2 = '4.561'; //String

const add = number0 + number1;
const sub = number0 - number1;
const mult = number0 * number1;
const div = number0 / number1;

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);
console.log(number2);

//Numbers
//+=, -=, /=, *=, ++, --, %

let numberAd = 40;
numberAd += 5;

let numberSub = 40;
numberSub -= 5;

let numberMult = 40;
numberMult *= 5;

let numberDiv = 40;
numberDiv /= 5;

let numberAA = 40;
numberAA++;

let numberSS = 40;
numberSS--;

console.log(numberAd);
console.log(numberSub);
console.log(numberMult);
console.log(numberDiv);

console.log(numberAA);
console.log(numberSS);

//%

const slices = 10;
const children = 3;

const amount = slices % children;

console.log(amount);

//order of precedence

const random0 = 4 + 6 + 10 * 10;
const random1 = (4 + 6 + 10) * 10;

console.log(random0);
console.log(random1);
