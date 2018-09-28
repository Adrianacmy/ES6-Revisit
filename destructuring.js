
// combine default function and destructuring
function createGrid([width = 5, height = 5]) {
    return `Generates a ${width} x ${height} grid`;
  }

  createGrid([]); // Generates a 5 x 5 grid
  createGrid([2]); // Generates a 2 x 5 grid
  createGrid([2, 3]); // Generates a 2 x 3 grid
  createGrid([undefined, 3]); // Generates a 5 x 3 grid
  createGrid(); // throws an error
  // createGrid() expects an array to be passed in that it will then destructure. Since the function was called without passing an array, it breaks. But, we can use default function parameters for this!
  function createGrid([width = 5, height = 5] = []) {
    return `Generates a ${width} x ${height} grid`;
  }
  createGrid(); // Generates a 5 x 5 grid

/////////////////////////////////////////////////////////////////////

// an object be a default parameter and use object destructuring

function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops';
    return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
  }

  createSundae({}); // Your sundae has 1 scoop with Hot Fudge toppings.
  createSundae({scoops: 2}); // Your sundae has 2 scoops with Hot Fudge toppings.
  createSundae({scoops: 2, toppings: ['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
  createSundae({toppings: ['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.

  createSundae(); // throws an error


  function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
      const scoopText = scoops === 1 ? 'scoop' : 'scoops';
      return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
    }
    createSundae(); // Your sundae has 1 scoop with Hot Fudge toppings.

/////////////////////////////////////////////////////////////////////

// Array defaults vs. object defaults
function createSundae([scoops = 1, toppings = ['Hot Fudge']] = []) { … }
// If you wish to use default value for scoops but change toppings, have to call the function as below:
createSundae([undefined, ['Hot Fudge', 'Sprinkles', 'Caramel']]);

// Since arrays are positionally based, have to pass undefined to "skip" over the first argument (and accept the default) to get to the second argument.

//nless you've got a strong reason to use array defaults with array destructuring, we going with object defaults with object destructuring is recommended


/////////////////////////////////////////////////////////////////////



// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// destructuring properties user {}
// destructuring elements use []

const expense = {
  type: 'business',
  ammount: 7895
}

// declare a varable named type and ammount and assign the value of expense.type and expense.amount to them
const {type, ammount} = expense
// if destructuring any value if not in expense, undefined return

// example
const file = {
  name: 'file1',
  size: '1GB',
  path: '/'
}

function printFile({name, size, path}, {color}){
  return `${name} ${size} ${path} ${color}`;
}

document.write(printFile(file, {color: 'pink'}), '<br>');


// destructuring elements in an array with []
const corps = [
  'google',
  'facebook',
  'didi',
  'baidu'
  ]

const [c1, c2,...rest] = corps;
document.write(c1, '<br>')
document.write(c2, '<br>')
document.write(rest, '<br>')

let [first, second, third] = corps;
console.log(first, second) // google, facebook



// destructuring object and array at the same time

const corps2 = {
  google: ['mountain view', 'shanghai', 'SF', 'somewhere else'],
  didi: ['SF', 'shanghai']
};

const {google : [location1, location2, ...rest2]} = corps2
document.write(rest2, '<br>')

corps3 = [
  {google: 'search engine', reputation: 'kfd'},
  {amazon: 'ecommerse', reputation2: 'netural'},
  {facebook: 'social', reputation: 'great'}
];

const [{reputation, google}, {amazon, reputation2}, {}] = corps3;
document.write(reputation2, '<br>')
document.write(google, '<br>')



// use case1
const user = {
  username: 'a',
  email: 'b@mail.com',
  dob: 'c',
  password: 'soemthing'
}

// by destructuring an object this way, the args order dosen't matter
function signUp({username, email, dob, password}){
  //pass
  console.log(username);
}

signUp(user); // a



// use case2
// convert array cords into objects
const points = [
  [4,5],
  [44,52],
  [40,55],
  [4,53],
  [40,5]
];

let cords = points.map( ([x, y]) => {
  return {x, y};
});
// points.map( ([x, y]) => {
//   return {x: x, y: y};
// });

document.write(cords, '<br>')




// some practise
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];



const classesAsObject = classes.map( ([subject, time, teacher]) => {
    return {subject, time, teacher};
});



// destructuring with recursion without any arr helper
// input example [1,2,5,6]
// output [2,4,10,12]

const numbers = [1, 2, 3];

function double([first, ...rest]) {
    if (!first){
        return [];
    }else{
        return [first*2, ...double(rest)];
    }
}

double(numbers)