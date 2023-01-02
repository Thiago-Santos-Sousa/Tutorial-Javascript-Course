// Filter

const people = [
  { name: 'thiago', age: 27, position: 'developer' },
  { name: 'thais', age: 23, position: 'nurse' },
  { name: 'estevão', age: 1, position: 'none' }
];

const yongPeople = people.filter(function (person) {
  return person.age <= 25;
});

const developer = people.filter(function (person) {
  return person.position === 'developer';
});

console.log(developer);
console.log(yongPeople);

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

const yearCar = car.filter(function (item) {
  return item.age <= 2009;
});

const markCar = car.filter(function (item) {
  return item.mark === 'renault';
});

console.log(markCar);
console.log(yearCar);