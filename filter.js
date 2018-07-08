//creates a new array with all elements that pass the test implemented by the provided function.

let products = [
  {name: 'cucumber', type: 'vegie'},
  {name: 'cucumber1', type: 'fruits'},
  {name: 'cucumber2', type: 'fruits'},
  {name: 'cucumber3', type: 'vegie'},
  {name: 'cucumber4', type: 'vegie'}
];

let filteredProducts = []

filteredProducts=products.filter( product => {
  return product.type === 'fruits'; // don't forget to return, but it also can be ignored with es6 sytax
});

document.write(filteredProducts, '<br>');



//return the comments with given post
let post = { id: 4, title:'neice post'};
let comments = [
  {postId: 4, cotent: 'kf dfipfd'},
  {postId: 3, cotent: 'kf dffdafipfd'},
  {postId: 4, cotent: 'kf fafdafdfipfd'}
]

function comentsPost(post, comments){
  comments.filter( comment => {
    return comment[postid] === post[id];
  });
}

document.write(comentsPost(post, comments), '<br>');


// reject function
function reject(array, iteratorFunction){
  let value;
  array.filter( item => {
    return !iteratorFunction(item);
  });
  return value;
}