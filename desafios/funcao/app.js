// Challenge 1
// create one function
// add two parameters subtotal, tax
// return sun of parameters

// result 1

function totalCal(subtotal, tax) {
  //const total = subtotal + tax;
  //return total;
  return subtotal + tax;
}

console.log(totalCal(40, 3.57));

// result 2

const clcT = (subTot, Tax) => subTot + Tax;

let clcRes = clcT(40, 3.57);
console.log(clcRes);

// ------------------------------------------------------- //

// Challenge 2
// create 3 vars "ord1", "ord2", "ord3"
// call totalclc, pass in some and assign result to each order
// log all three orders
// refactor "totalClc" to function expression

// Result

const totalClc = function(subtotal, tax) {
  //const total = subtotal + tax;
  //return total;
  return subtotal + tax;
}

const ord1 = totalClc(40, 55);
const ord2 = totalClc(55, 78);
const ord3 = totalClc(14, 32);

console.log(ord1, ord2, ord3);

// --------------------------------------------------------- //

// Challenge

const oder3 = calculateTotal(45, 57, 69);

function calculateTotal(num1, num2, num3) {
  return num1 + num2 + num3;
}

const order1 = calculateTotal(57, 58, 99);
const order2 = calculateTotal(66, 41, 12);

let calculateResult = [order1, order2, oder3];
console.log(calculateResult);

// Result 2

const calcTotal = function (numI, numII, numIII) {
  return numI + numII + numIII;
};

const orderI = calcTotal(57, 58, 99);
const orderII = calcTotal(66, 41, 12);
const orderIII = calcTotal(45, 57, 69);

let calcResult = [orderI, orderII, orderIII];
console.log(calcResult);

// Result 3

const clcTot = (Num1, Num2, Num3) => Num1 + Num2 + Num3;

const Order1 = clcTot(57, 58, 99);
const Order2 = clcTot(66, 41, 12);
const Order3 = clcTot(45, 57, 69);
console.log(Order1, Order2, Order3);

let clcResul = [Order1, Order2, Order3];
console.log(clcResul);
