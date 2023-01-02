// CallBack Function

function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}

function gree(name, cb) {
  const myName = 'thiago';
  console.log(`Hi ${cb(name)}, my name is ${myName}`);
}

gree('bob', morning);
gree('lia', afternoon)
gree('susy', afternoon);

/*function greeMorning(name) {
  let myName = 'thiago';
  console.log(`Good morning ${name}, my name is ${myName}`);
}

function greeAfternoon(name) {
  let myName = 'thais';
  console.log(`Good afternoon ${name}, my name is ${myName}`);
}

greeMorning('thais');
greeAfternoon('thiago');
*/
