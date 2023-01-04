// querySelector('any css'); - selects single

const title = document.querySelector('#title');
title.style.color = 'orange';

const list = document.querySelector('.especial');
console.log(list);

const numbers = document.querySelectorAll('.especial');
numbers.forEach(function (item) {
  console.log(item);
  item.style.color = 'red';
});

//

const names = document.querySelector('#names');
names.style.color = 'blue';

const nameDel = document.querySelector('.name-del');
nameDel.style.color = 'orange';
console.log(nameDel);

const listNames = document.querySelectorAll('.name');
listNames.forEach(function (item) {
  console.log(item);
  item.style.color = 'red';
});
console.log(listNames);
