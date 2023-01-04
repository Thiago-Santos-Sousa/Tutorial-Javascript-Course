// PreviousSibling
// NextSibling
// return whitespace

/*const first = document.querySelector('.title');
const second = (first.nextSibling.nextSibling.style.color = 'red');
console.log(second);

const last = document.querySelector('#divs');
const lastSecond = last.previousSibling.previousSibling;
console.log(lastSecond);*/

// nextElementSibiling
// previousElementSibling

const firstEl = document.querySelector('.title');
const next = (firstEl.nextElementSibling.style.color = 'red');
console.log(next);

const lastEl = document.querySelector('#divs');
const previous = (lastEl.previousElementSibling.style.color = 'blue');
console.log(previous);
