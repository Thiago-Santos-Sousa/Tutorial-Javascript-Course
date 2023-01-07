// select element
// addEventListener()
// what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

btn.addEventListener('click', function () {
  heading.classList.add('red');
});

//

const par = document.querySelector('.par');
const parClick = document.getElementById('par');

par.addEventListener('click', function () {
  parClick.classList.add('blue');
});
