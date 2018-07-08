// arr.reduce(callback[, initialValue])

// applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

// return The value that results from the reduction.


//check balanced bracket

function balancedParens(string) {
  // ! will eval the value to false or true
  return !string.split('').reduce((previous, aparen) => {
    // to catch unbalanced )(
    if (previous < 0) {
      return previous;
    }
    if (aparen === '(') { return ++previous; }
    if (aparen === ')') { return --previous; }

    return previous;

  }, 0);
}

document.write(balancedParens(')(())))'), '<br>');


//  
let desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

let deskTypes = desks.reduce(function(pre, desk) {
  pre[desk.type] ++;
  return pre;
}, { sitting: 0, standing: 0 });



// write a function to remove all duplicate values from an array


// with includes
function unique(array){
  return array.reduce((pre, item) => {
    if (!pre.includes(item)){
      pre.push(item);
    }
    return pre;
  }, [])
}

// with find
function uniqueFind(array){
  return array.reduce((pre, item) => {
    if (!pre.find(preItem => {
      return preItem === item;
    })){
      pre.push(item);
    }
    return pre;
  }, [])
}


// with Set
function uniqueSet(array){
  return [...new Set(array)];
}


let uni = uniqueFind([4,7,578,45,4]);
document.write(uni, '<br>')


let uniset = uniqueSet([4,7,578,45,4]);
document.write(uniset, '<br>')