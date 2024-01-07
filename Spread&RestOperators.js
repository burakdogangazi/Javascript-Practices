const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4]; // [1,2,3,4]

const newNumbers1 = [numbers, 4]; // [[numbers],4]

console.log(newNumbers);

const person = {
  name: "max",
};

const newPerson = {
  ...person,
  age: 28,
};

console.log(newPerson);

const filter = (...args) => {
  return args.filter((el) => el === 1);
};
