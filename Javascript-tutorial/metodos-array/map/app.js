// Map

const people = [
  { name: 'thiago', age: 27, position: 'developer' },
  { name: 'thais', age: 23, position: 'nurse' },
  { name: 'estevão', age: 1, position: 'none' }
];

const ages = people.map(function (person) {
  return person.age;
});

const newPeople = people.map(function (person) {
  return {
    fisrtName: person.name.toUpperCase(),
    oldAge: person.age
  };
});

const names = people.map(function (person) {
  return `<h1>${person.name}<h1>`;
});

console.log(names);
console.log(newPeople);

//

const car = [
  {
    mark: 'toyota',
    model: 'corola',
    age: 2008
  },
  {
    mark: 'volkswagem',
    model: 'golf',
    age: 2009
  },
  {
    mark: 'renault',
    model: 'clio',
    age: 2016
  }
];

const showCar = car.map(function (item) {
  return item.model.toUpperCase();
});

document.body.innerHTML = names.join('')

console.log(showCar);
