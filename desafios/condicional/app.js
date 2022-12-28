// Challenge condicional
// else if

const person1 = {
  name: 'Thiago',
  age: 17,
  status: 'tourist'
};

const person2 = {
  mame: 'Thais',
  age: 24,
  status: 'resident'
};

if (person1.age >= 18 && person1.status === 'resident') {
  console.log('is true');
} else {
  console.log('is false');
}

if (person2.age >= 18 && person2.status === 'resident') {
  console.log('is true');
} else {
  console.log('is false');
}
