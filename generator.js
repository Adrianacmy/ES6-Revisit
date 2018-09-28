// define a generator with *

// The * of the generator can be placed anywhere between the function keyword and the function's name. three of below are correct.

function* func(){}
function * func(){}
function  *func(){}


// Generators & Iterators
// When a generator is invoked, it doesn't actually run any of the code inside the function. Instead, it creates and returns an iterator. This iterator can then be used to execute the actual generator's inner code.


// inside the funtion use yield keyword

function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        // console.log(name);
        yield name;
    }

    console.log('the function has ended');
}

let e  = getEmployee();
e.next().value // Amanada

// the next() method could be called names.length + 1 times

// The first call to .next() will start the function and run to the first yield. The second call to .next() will pick up where things left off and run to the second yield. .....The final call to .next() will pick up where things left off again and run to the end of the function.


// send data back into the generator using the .next() method:??
// not quite understand why this is necessary 

function* getEmployee() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    const facts = [];

    for (const name of names) {
        // yield *out* each name AND store the returned data into the facts array
        facts.push(yield name);
    }

    return facts;
}

const generatorIterator = getEmployee();

// get the first name out of the generator
let name = generatorIterator.next().value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value;

// you get the idea
name = generatorIterator.next(`${name} is rad!`).value;
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;
name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value;

// displays each name with description on its own line
positions.join('\n');