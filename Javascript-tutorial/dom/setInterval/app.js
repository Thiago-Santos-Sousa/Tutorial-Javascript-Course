/*
setInterval - runs function repeatedly, at specific intervals

- pass function reference
- duration in ms (1000 ms = 1 second)
- default 0, will cover more extensively in aync/await section
- returns unique identifier
- clearTimeout to cancel
*/

function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

//setInterval(showScore, 2000);

const firstId = setInterval(showScore, 3000, 'Thiago', 8000);
const secondId = setInterval(showScore, 3000, 'thais', 100);

clearTimeout(firstId);
