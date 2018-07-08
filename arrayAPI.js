const users = [
  {username: 'a', email: 'a@mail.com'},
  {username: 'b', email: 'a@mail.com'},
  {username: 'c', email: 'a@mail.com'},
  {username: 'd', email: 'a@mail.com'},
];

for (const [index, val] of users.entries()){
  // console.log(index, val);
}


// btns will be htmlcollectoins
const btns = document.getElementsByName('button');
// btnsArray will be an array
const btnsArray = Array.from(btns)

// user spread can achive the same
// btnsArray = [...btns]


const numbers = Array.from({length: 9}, (_, index) => 
  {
    console.log(_, index);
    return ++index;
    });
document.write(numbers, '<br>')   


//
Array.of(45, 'str', {}) // [45, 'str', object {}]
Array(3) // [undefined, undefined, undefined]
Array('12', '12', 'str', {name: 'a'}, {}) // ['12','12','str', {name: 'a'}, {}]