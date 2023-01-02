// Date

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const date = new Date();
const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const setence = `${days[day]} ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;
//console.log(setence);

document.body.innerHTML = setence;
