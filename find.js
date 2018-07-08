// The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

let users = [
  {name: 'jill'},
  {name: 'mish'},
  {name: 'chery'},
  {name: 'alex'},
];

let user;

user = users.find( u => {
  return u.name === 'jill';
});

document.write(user.name, '<br>')

// /posts  => posts/12
let post = postMessage.find(post => {
  return post[id] === 12;
});


