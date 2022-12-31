// Arrays and for loops

const names = ['Thiago', 'Thais', 'Estevão', 'Anny', ''];
const lastName = 'Santos Sampaio';
let newArray = [];

//for loop
for (let i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);
  newArray.push(`${names[i]} ${lastName}`);
}

console.log(names);
console.log(newArray);

//

const year = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const currentyear = 'current year 2022';
let newYear = [];

for (i = 0; i < year.length; i++) {
  console.log(year[i]);

  newYear.push(`${year[i]} ${currentyear}`);
}

console.log(year);
console.log(newYear);
