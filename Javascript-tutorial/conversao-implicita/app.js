let number0 = '10';
let number1 = '16';

let result = number0 - number1;
console.log(result);

//

const randomNumber = 13;
document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault();
  let value = document.getElementById('amount').value;
  value = parseInt(value); // type conversation
  console.log('Input Value Type');
  console.log(value);
  console.log('sun of Two Values');
  console.log(randomNumber + value);
});
