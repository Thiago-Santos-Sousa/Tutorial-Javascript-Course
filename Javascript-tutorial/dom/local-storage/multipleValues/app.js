// JSON.stringify(),JSON.parse()

const friends = ['Anny', 'Bob', 'Susy'];

localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[1]);

//

const family = ['thiago', 'thais', 'estevao', 'daniel'];

localStorage.setItem('family', JSON.stringify(family));

const inFamily = JSON.parse(localStorage.getItem('family'));
console.log(family[0]);

//

let fruits = [];

if (localStorage.getItem('fruits')) {
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
}

console.log(fruits);
//fruits.push('orange');
fruits.push('apple');
localStorage.setItem('fruits', JSON.stringify(fruits));
