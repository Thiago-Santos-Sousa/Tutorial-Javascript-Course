// event object argument event
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDegault() - prevents default behaviour

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');

heading.addEventListener('click', function (event) {
  console.log(event.currentTarget);
  console.log(this);
});

btn.addEventListener('click', function (event) {
  event.currentTarget.classList.add('blue');
  console.log(event.type);
});

function someFunc(e) {
  e.preventDefault();
}

link.addEventListener('click', someFunc);
