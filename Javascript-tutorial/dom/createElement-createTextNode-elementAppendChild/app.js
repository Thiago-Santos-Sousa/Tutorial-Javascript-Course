// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// insertBefore('element', 'location');

// repalceChild('new', 'old');

const result = document.querySelector('#result');
const first = document.querySelector('.red');

// create empty element

const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv, result);
// result element

// --- Ex 02 ---//

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.insertBefore(heading, first);
//result.appendChild(heading);

// --- Ex 03 --- // replaceChild();

const smallHeadind = document.createElement('h6');
const smallText = document.createTextNode(`I'm small heading text`);
smallHeadind.classList.add('red');
smallHeadind.appendChild(smallText);
document.body.replaceChild(smallHeadind, bodyDiv);

console.log(result.children);
