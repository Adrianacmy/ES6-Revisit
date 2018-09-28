
// Concise and block body syntax, single line of function body
// no ucrly braces surround the funciton body
// automatically returns the expression
const add = (a, b) => a + b

const double = c => c * 2

const something = () => 3
const some = _ => 3 // equivalent to above one

const numbers = [1,2,5,6,7]
numbers.map( n => n ** 2);

/////////////////////////////////////////////////////////////////////


//This,  more explained: https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md

// With regular functions, the value of this is set based on how the function is called. With arrow functions, the value of this is based on the function's surrounding context. In other words, the value of this inside an arrow function is the same as the value of this outside the function.

// in regular function

// constructor
function IceCream(){
    this.scoops = 0;
}

// add scoops to ice IceCream
IceCream.prototype.addScoop = function(){
    setTimeout(function(){
        this.scoops++;
        console.log(this.scoops);// NaN
        console.log('scoop added')
    }, 500);
}

const dessert = new IceCream();
dessert.addScoop(); // scoop added

console.log(dessert.scoops)//output 0 instead of more than 0
// because function passed to setTimeout() is called without `new, call(), or apply(), or a context object`, which means `this` inside the function is a global object not the `desert` object

console.log(scoops) // NaN
//what actually happened was that a new scoops variable was created (with a default value of undefined) and was then incremented (undefined + 1 results in NaN):

/////////////////////////////////////////////////////////////////////

// One way around this is to use closure
// constructor
function IceCream() {
    this.scoops = 0;
  }

  // adds scoop to ice cream
  IceCream.prototype.addScoop = function() {
    const cone = this; // sets `this` to the `cone` variable
    setTimeout(function() {
      cone.scoops++; // references the `cone` variable
      console.log('scoop added!');
    }, 0.5);
  };

  const dessert = new IceCream();
  dessert.addScoop();
  console.log(dessert.scoops) // 1

////////////////////////////////////////////////////////////////////////

// Another way to do this is arrow function
// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(() => { // an arrow function is passed to setTimeout
    this.scoops++;
    console.log('scoop added!');
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();
console.log(dessert.scoops); // 1
// arrow function will inherit `this` value from the surrounding context

/////////////////////////////////////////////////////////////////
// changed the `addScoop()` method to an arrow function
// constructor
function IceCream() {
    this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = () => { // addScoop is now an arrow function
  setTimeout(() => {
    this.scoops++;
    console.log('scoop added!');
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();

// this doesn't work for the same reason - arrow functions inherit their this value from their surrounding context | outside?. Outside of the addScoop() method, the value of this is the global object. So if addScoop() is an arrow function, the value of this inside addScoop() is the global object. Which then makes the value of this in the function passed to setTimeout() also set to the global object!

//////////////////////////////////////////////////////////////////////


const team = {
  members : ['a', 'b'],
  teamName: 'super team',
  // teamSummary: funciton(){
  //   return this.members.map(function(member){
  //     return `${member} is on this them ${this.teamName}`;
  // the last this is bind to somewhere call map function
  //   });

  // fat arrow
  teamSummary: function(){
    this.members.map(member => {
      return `${member} is on the team ${this.teamName}`
      // this reference the outer level of map which is team
    });
  }

  }



//
const profile = {
    name: 'Alex',
    getName: function(){ return this.name;}
    // in this case, fat arrow dosenot work well, this reference outer level of profile which is Window
};




