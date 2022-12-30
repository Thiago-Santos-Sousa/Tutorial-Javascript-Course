/*
## Strings ##

 1. Create function fullName
 2. acept two parameters "firstName", "lastName"
 3. add them together (concat) and return result in uppercase
 4. invoke fullName and pass some values
 5. log results
 6. change the order of arguments
 7. refactor to object parameter

*/

function fullName0(firstName0, lastName0) {
  const fullName0 = `${firstName0} ${lastName0}`;
  return fullName0.toUpperCase();
}

console.log(fullName0('Thais', 'Sampaio'));

//

/*function fullName0({ firstName0, lastName0 }) {
  const fullName0 = `${firstName0} ${lastName0}`;
  return fullName0.toUpperCase();
}

console.log(fullName0({ firstName0: 'Thais', lastName0: 'Sampaio' }));*/

//

const names = (firstName, lastName) => `${firstName} ${lastName}`;
let fullName = names('Thiago', 'Santos');

console.log(fullName.toUpperCase());
