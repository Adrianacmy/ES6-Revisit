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