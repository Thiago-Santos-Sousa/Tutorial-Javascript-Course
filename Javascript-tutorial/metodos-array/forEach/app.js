// forEach
// does not return new array

const people = [
  { name: 'thiago', age: 27, position: 'developer' },
  { name: 'thais', age: 23, position: 'nurse' },
  { name: 'estevão', age: 1, position: 'none' }
];

function showPerson(person) {
  console.log(person.position.toUpperCase());
}

// people.forEach(showPerson);

people.forEach(function (item) {
  console.log(item.position.toUpperCase());
});

//

const car = [
  { mark: 'fiat', model: 'toro', age: 2022 },
  { mark: 'volkswagem', model: 'parati', age: 1998 },
  { mark: 'ford', model: 'fiesta', age: 2006 }
];

function showCar(cr) {
  console.log(cr.mark.toUpperCase());
}

//car.forEach(showCar);

car.forEach(function (item) {
  console.log(item.mark.toUpperCase());
});
