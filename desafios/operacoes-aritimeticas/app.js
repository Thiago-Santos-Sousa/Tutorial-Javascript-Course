const score0 = 27;
const score1 = 46;
const score2 = 56;

const totalScore = score0 + score1 + score2;
console.log(totalScore);

const restScore = totalScore % 3;
console.log(restScore);

const resultDiv = totalScore / 3;
console.log(resultDiv);

const ig = resultDiv * 3;
console.log(ig);

//

const plate = 20;
const people = 7;

let totalPlate = plate % people;
totalPlate++;

const message = 'there are ' + totalPlate + ' plates available';

console.log(message);
