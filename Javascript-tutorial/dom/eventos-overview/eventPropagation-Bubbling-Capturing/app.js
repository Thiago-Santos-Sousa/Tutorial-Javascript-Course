// allows select dynamic elements
// event propagation - order the events are fired
// event Bubbling - clicked element first then bubbles up -- default
// event capturing - fire at the root and fires until reaches target

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBobbling(e) {
  console.log('current target', e.currentTarget);
  //console.log('target', e.target);
  //if (e.target.classList.contains('link')) {
  //  console.log('you clicked on the link');
  //}
}

function stopPropagation(e) {
  console.log('you clicked on list');

  e.stopPropagation();
}

list.addEventListener('click', showBobbling, { capture: true });
container.addEventListener('click', showBobbling, { capture: true });
document.addEventListener('click', showBobbling, { capture: true });
window.addEventListener('click', showBobbling, { capture: true });
