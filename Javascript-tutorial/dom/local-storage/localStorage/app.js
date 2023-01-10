// Wev storage API - provided by browser
// session storage, local storage
// setItem, getItem, removeItem, clear

//localStorage.setItem('name', 'john');
//sessionStorage.setItem('name', 'john');

localStorage.setItem('name', 'Thiago');
localStorage.setItem('friend', 'John');
localStorage.setItem('job', 'developer');
localStorage.setItem('address', 'street 12345');

const name = localStorage.getItem('name');
console.log(name);
localStorage.removeItem('address');

const anotherAddress = localStorage.getItem('address');
console.log(anotherAddress);

localStorage.clear();
