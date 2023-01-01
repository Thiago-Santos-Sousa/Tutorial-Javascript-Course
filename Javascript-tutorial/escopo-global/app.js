// Global scope vs Local scope

let name = 'bob';
name = 'peter';

function otherName() {
  console.log(name);
    name = 'susy';
  function other() {
    name = 'thiago';
    console.log(`This is from inner function, name is ${name}`);
  } other(); void
  other();
}

otherName();

if (true) {
  console.log(name);
}

console.log(`My name is ${name} and I'm awesomw`);
