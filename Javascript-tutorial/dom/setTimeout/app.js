/*
setTimeout - runs function once after especific time

- pass function reference
- duration in ms (1000 ms = 1 second)
- default 0, will cover more extensively in aync/await section
- returns unique identifier
- clearTimeout to cancel
- on window object
*/

function sayHello() {
  console.log('hello john');
}

//setTimeout(sayHello, 1000);

// will not work
//setTimeout(sayHello(), 1000);

// alternative approach, ES6 arrow function

//setInterval(function () {
//  console.log('hello peter');
//}, 2000);

// pass argument

function showScore(name, score) {
  console.log(`hello ${name}, you score is ${score}`);
}

//setTimeout(showScore, 1000, 'John', 1000);

const firstId = setTimeout(showScore, 3000, 'thiago', 50);
const secondId = setTimeout(showScore, 1000, 'peter', 66);
console.log(firstId);
console.log(secondId);

clearTimeout(firstId);
