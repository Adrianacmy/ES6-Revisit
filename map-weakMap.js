// If Sets are similar to Arrays, then Maps are similar to Objects because Maps store key-value pairs similar to how objects contain named properties with values.

// Essentially, a Map is an object that lets you store key-value pairs where both the keys and the values can be objects, primitive values, or a combination of the two.

// create a Map
const employees = new Map();
console.log(employees); // Map {}

// Unlike Sets, you can’t create Maps from a list of values; instead, you add key-values by using the Map’s .set() method.
const em = new Map();

em.set('mj', {
    firstname: 'm',
    lastname: 'j',
    role: 'accountant'
});

console.log(em.has('mj')) // true
console.log(members.get('mj'));  // retreve a value

console.log(em) // Map {'mj' => Object {firstname: 'm', lastname: 'j', role: 'accountant'}}

employees.clear()
console.log(employees); // Map {}

// TIP: If you .set() a key-value pair to a Map that already uses the same key, you won’t receive an error, but the key-value pair will overwrite what currently exists in the Map. Also, if you try to .delete() a key-value that is not in a Map, you won’t receive an error, and the Map will remain unchanged.

// The .delete() method returns true if a key-value pair is successfully deleted from the Map object, and false if unsuccessful. The return value of .set() is the Map object itself if successful.


em.set('b', 12)
em.set('c', 13)
em.set('d', 14)
em.set('e', 15)
em.set('f', 16)
console.log(em.has('b')) // true
console.log(em.get('b')) // 12


// Looping through Maps

// Step through each key or value using the Map’s default iterator
// keys() and values() return a new iterator object called MapIterator
let k = em.keys()
let v = em.values()
k.next(); // Object {value: 'b', done: false}

// Loop through each key-value pair using the new for...of loop
for (let e of em){
    console.log(e);
}

// Loop through each key-value pair using the Map’s .forEach() method
em.forEach( (value, key) => console.log(key, value));





// Objects and maps compared: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
// The keys in Map are ordered while keys added to object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
// You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
// A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
// An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
// A Map may perform better in scenarios involving frequent addition and removal of key pairs.




// A WeakMap is just like a normal Map with a few key differences:

// a WeakMap can only contain objects as keys,
// a WeakMap is not iterable which means it can’t be looped and
// a WeakMap does not have a .clear() method.

const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);

console.log(library);