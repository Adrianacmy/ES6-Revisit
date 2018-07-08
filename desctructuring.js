// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

// destructuring properties user {}
// destructuring elements use []

const expense = {
  type: 'business',
  ammount: 7895
}

// declare a varable named type and ammount and  ssign the value of expense.type and expense.amount to them 
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