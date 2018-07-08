// arr.forEach(function callback(currentValue[, index[, array]]) {
    //your iterator
//}[, thisArg]);
//  executes a provided function once for each array element.
// return undefined
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

let colors = ['red', 'green', 'purple']

colors.forEach( (color) => {
  // console.log(color);
})

let numbers  = [1,2,5,6,8,9,45]
let sum = 0;
numbers.forEach(n => {
  sum += n;
})

document.write(sum, '<br>')


var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(img => {
    areas.push(img.height * img.width);
});

document.write(areas, '<br>');