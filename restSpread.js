// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.


// Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

function product(...numbers) {
  // use ... to catch all unkonw amount of args
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

// 
function join(array1, array2) {
  return [...array1, ...array2];
}
// equals arrays.concat(array2)



function unshift(array, ...letters) {
  return ['blue',...letters,...array];
}