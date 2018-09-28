const s = new Set()
s.add(2)
s.add('2')
s.delete('2')
console.log(s) // Set {2}
s.clear()
cosole.log(s) // Set {}
s.size // 0



// TIP: If you attempt to .add() a duplicate item to a Set, you won’t receive an error, but the item will not be added to the Set. Also, if you try to .delete() an item that is not in a Set, you won’t receive an error, and the Set will remain unchanged.
// Set can't be indexed like an array


// .add() returns the Set if an item is successfully added. On the other hand, .delete() returns a Boolean (true or false) depending on successful deletion.

s.add('set')
s.add('apple')
s.add('bana')
s.has('bana') // true

// Retrieving all values, below both method returns the same, the later is an alias of the former
// Both will return a SetIterator which means it works with next() and for..of

iter = s.values()
iter2 = s.keys()
iter2.next();  // Object {value: 'set', done: false}


//////////////////////////////////////////////////////////////////////

// A WeakSet is just like a normal Set with a few key differences:

// a WeakSet can only contain objects
// a WeakSet is not iterable which means it can’t be looped over
// a WeakSet does not have a .clear() method

// create a WeakSet
let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Richard', age: 31, gender: 'male' };
const roster = new WeakSet([student1, student2, student3]);
console.log(roster);

// WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'Richard', age: 31, gender: 'male'}, Object {name: 'James', age: 26, gender: 'male'}}

roster.add('Amanda'); // Uncaught TypeError: Invalid value used in weak set(…),  can only contain objects


student3 = null;
console.log(roster);
// WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'James', age: 26, gender: 'male'}}