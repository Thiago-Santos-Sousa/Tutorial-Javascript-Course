const globalNumber = 20;

function add(num1, num2) {
  //const globalNumber = 5;
  const result = num1 + num2 + globalNumber;
  function multiply() {
    //const globalNumber = 100;
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  multiply();
  return result;
}

console.log(add(3, 4));

//

const globalName = 'thiago';

function addNames(name1, name2) {
  const globalName = 'Joaquin';
  const names = `${name1} ${name2} ${globalName}`;
  function altName() {
    const globalName = 'Thais S';
    const altNameResult = `${name1} ${name2} ${globalName}`;
    console.log(altNameResult);
  }
  altName();
  return names;
}

console.log(addNames('My', "name's"));
