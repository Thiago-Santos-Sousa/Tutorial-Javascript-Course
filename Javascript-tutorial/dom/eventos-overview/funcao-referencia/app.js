// select element
// addEventListener()
// what event, what to do

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

/*btn.addEventListener('click', function () {
  heading.classList.add('red');
});*/

function changeColor() {
  let hasClass = heading.classList.contains('red');
  if (hasClass) {
    heading.classList.remove('red');
  } else {
    heading.classList.add('red');
  }
}
btn.addEventListener('click', changeColor);

//

const sec = document.querySelector('.sec');
const second = document.querySelector('h4');

/*sec.addEventListener('click', function () {
  second.classList.add('blue');
});*/

function changeCor() {
  let hasClass = second.classList.contains('red');
  if (hasClass) {
    second.classList.remove('red');
  } else {
    second.classList.add('red');
  }
}
sec.addEventListener('click', changeCor);
