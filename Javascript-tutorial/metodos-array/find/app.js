// find

const address = [
  {
    street: 'EQNM 50/56',
    district: 'El Salvador',
    malibox: 72569881,
    id: 1
  },
  {
    street: 'new oregon city',
    district: 'manchester',
    malibox: 985442234,
    id: 2
  },
  {
    street: 1359,
    district: 'Tatuel',
    malibox: 87222221,
    id: 3
  }
];

const addresss = ['El Salvador', 'new oregon city', 'Tatuel'];
console.log(
  addresss.find(function (itens) {
    return itens === 'El Salvador';
  })
);

const idAdd2 = address.filter(function (add) {
  return add.id === 3;
});

console.log(idAdd2);

const idAdd = address.find(function (item) {
  return item.id === 2;
});

console.log(idAdd);
