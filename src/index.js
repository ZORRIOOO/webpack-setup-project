const object = {
    staff: 1,
    things: 2,
    items: 3
};

const another = {
  ...object,
  elements: 4
};

console.log({object, another})