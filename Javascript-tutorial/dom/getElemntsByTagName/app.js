// getelemntsByTagName

const headings = document.getElementsByTagName('h1');
headings[0].style.color = 'red';
console.log(headings.length);

const items = document.getElementsByTagName('li');
items[2].style.color = 'orange';

const betterItens = [...items];

betterItens.forEach(function (item) {
  console.log(item);
});

console.log(items);
console.log(betterItens);
