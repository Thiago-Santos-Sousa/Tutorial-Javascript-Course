// Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log('Whoa! You are spending way too much');
  } else {
    console.log('You are goot total is less then 100');
  }
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([500, 2.4, 89]);

console.log({ gasTotal, foodTotal, randomTotal });
