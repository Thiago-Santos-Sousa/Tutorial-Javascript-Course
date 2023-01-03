// DOM
// many differents ways

document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = 'red';

// assign to a variable

const element = document.getElementById('element');
// do something

document.querySelector('element'); 
// do something

// window object
console.log(window);

const btn = document.getElementById('btn');
const name = btn.nodeName;
const css = btn.style;
console.log(btn);
console.log(name);
console.log(css);
