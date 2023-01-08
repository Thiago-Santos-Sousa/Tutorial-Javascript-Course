// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifiels the element on which the event occured

const btns = document.querySelectorAll('.btn');

/*btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e);
    e.currentTarget.style.color = 'green';
  });
});*/

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log('target', e.target);
    console.log('currentTarget', e.currentTarget);
    e.target.style.color = 'blue';
  });
});
