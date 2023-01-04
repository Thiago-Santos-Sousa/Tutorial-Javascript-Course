// nodeValue
// textContent

const item = document.getElementById('title');
const value = item.nodeValue;
console.log(item.childNodes[0].nodeValue);

const easyValue = item.textContent;
console.log(easyValue);