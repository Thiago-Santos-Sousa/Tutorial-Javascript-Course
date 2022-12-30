// String properties and methods
// wrapper String Object, don't memorize methods

let text = 'Peter jordan';
let result = text.length;
console.log(result);

console.log(text.length); // total length of string - 12
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0)); // position character - P
console.log(text.charAt(10)); // position character - a
console.log(text.charAt(text.length -1));
console.log(text.indexOf('j'));
console.log(text.trim()); // remove spaces preserve the data itself/config string
console.log(text.startsWith('peter')); // boolean
console.log(text.trim().toLowerCase().startsWith('peter'));
console.log(text.includes('dan'));
console.log(text.slice(0, 7));
console.log(text.slice(-7));


/*const person = {
  name: 'Peter', // property
  greeting() {
    // method
    console.log("Hey, I'm Peter");
  }
};

console.log(person);

console.log(person.name);

person.greeting();*/
