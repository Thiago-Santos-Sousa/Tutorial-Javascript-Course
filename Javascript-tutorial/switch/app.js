// switch
// dice values: 1 - 6

const Dice = 7;

switch (Dice) {
  case 1:
    console.log('you got one');
    break;
  case 2:
    console.log('you got two');
    break;
  case 3:
    console.log('you got three');
    break;
  case 4:
    console.log('you got for');
    break;
  default:
    console.log('finish');
}

// if
const dice = 5;

if (dice >= 1 && dice <= 6) {
  console.log('you did not roll the dice');
} else {
  console.log('No dice');
}
