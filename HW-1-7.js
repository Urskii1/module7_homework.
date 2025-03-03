//7.7.1

const person = {Name: 'Sasha', Age: '20'}
function printInfo(name, age) {
  console.log(`Name: ${this.Name}, Age: ${this.Age}! `)
}
printInfo.call(person);

//7.7.2

const obj ={
    a : 32,
    b : 8,
    operator : '*'
  };
  
  function calculate(a, b, operator) {
    if (operator ==='+') return a + b 
    if (operator ==='-') return a - b
    if (operator ==='*') return a * b
    if (operator ==='/') return a / b
  }
  const result = calculate.apply(obj, [2, 3, '*']);
  console.log(result)

  //7.7.3

const persons = [
  {name: 'Dima', age: 18},
  {name: 'Nikita', age: 15},
  {name: 'Mark', age: 20}
];

const personOver18 = persons.filter(persons => persons.age >= 18);
const personNameOver18 = persons.map(persons => persons.name)
console.log(personOver18)
console.log(personNameOver18)

//7.7.4 
function setFullName(obj, name) {
  obj.fullName = name;
};
const setPersonFullName = setFullName.bind(null, persons);
setPersonFullName("John Smith");
console.log(persons.fullName);

//7.7.5

const arr = [5, 5, 2, 1, 3, 2, 4];
function uniqueSorted(arr) {
  const unique = arr.filter((item, index) => arr.indexOf(item) === index)
  const sortAsc = unique.sort((a, b) => a - b);
  return sortAsc;
}

const uniqueSortedArr = uniqueSorted(arr);
console.log(uniqueSortedArr)
