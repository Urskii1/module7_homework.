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
