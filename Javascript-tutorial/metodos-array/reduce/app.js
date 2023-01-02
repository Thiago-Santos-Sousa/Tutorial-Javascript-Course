// Reduce
const people = [
  { name: 'thiago', age: 27, position: 'developer', salary: 200 },
  { name: 'thais', age: 23, position: 'designer', salary: 300 },
  { name: 'estevão', age: 33, position: 'the boss', salary: 500 },
  { name: 'steve', age: 44, position: 'the boss', salary: 350 }
];

const total = people.reduce(function (acc, curItem) {
  console.log(`total: ${acc}`);
  console.log(`current money: ${curItem.salary}`);
  acc += curItem.salary;

  return acc;
}, 0);

console.log(`total is: ${total}`);
