const person = {
  name: 'Thiago',
  lastName: 'Santos',
  age: 27,
  education: false,
  married: true,
  siblings: ['anna', 'susan', 'mary', 'bob'],
  gretting: function () {
    console.log('hello my name is Thiago');
  }
};

const age = person.age;
console.log(age);

person.name = 'THIAGO';
console.log(person.name);

console.log(person.siblings[3]);
person.gretting();
