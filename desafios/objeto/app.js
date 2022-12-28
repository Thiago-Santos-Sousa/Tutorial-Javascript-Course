const car = {
  mark: 'Volkswagen',
  model: 'pickup',
  year: 2018,
  colors: ['green', 'blue', 'red', 'black', 'white'],
  hybrid: false,
  drive: function () {
    console.log('are you driving');
  },
  stop: function () {
    console.log('you are standing');
  }
};

car.mark = 'dodge';

console.log(car.mark);
console.log(car.colors[3]);
car.stop();
