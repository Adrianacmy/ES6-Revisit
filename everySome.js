// arr.every(callback[, thisArg])
// return true if the callback function returns a truthy value for every array element; otherwise, false.

let pc = [
  {name: 'appme', ram: 23},
  {name: 'acer', ram: 23},
  {name: 'lwnovo', ram: 93},
  {name: 'hp', ram: 12},
  {name: 'ibm', ram: 5},
];


let res = pc.every( p => p.ram < 40);
document.write(res, '<br>');



// arr.some(callback[, thisArg])
// return true or false// tests whether at least one element in the array passes the test implemented by the provided function.
let res2 = pc.some( p => p.ram < 40);
document.write(res2, '<br>');


// use cases
// validate user input form values
