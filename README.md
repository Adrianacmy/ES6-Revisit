# ES6 Revisit

Personal notes

## ECMAScript

- It is a standard, Javascript is the implementation

## Array helpers

- [arr.forEach(callback)](./forEach.js)
- [arr.map(callback)](./map.js)
- [arr.filter()](./filter.js)
- [arr.find()](./find.js)
- [arr.some()](./everySome.js)
- [arr.every(): use case: validate user input form](./everySome.js)
- [arr.reduce(callback[, init value)]](./reduce.js)

## Let and const

- let: its value may change
- const: its value is not going to change

## Template strings

```javascript
 `${5+9} soemthing`
```

## Fat arrow

```javascript
const add = (a, b) => a + b

const double = c => c * 2

const something = () => 3

const numbers = [1,2,5,6,7]
numbers.map( n => n ** 2);


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
};


//
const profile = {
    name: 'Alex',
    getName: function(){ return this.name;}
    // in this case, fat arrow dosenot work well, this reference outer level of profile which is Window
};

```

## Enhanced Object literal

```javascript
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return {
    // width: width,
    // height: height
    width,
    height
    // when key and value are the same, specify one is ok
  };
}

// another example
const color = 'red';

const Car = {
  // color: color,
  color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};

```

## Default funciton argumnets

## Rest and spread

- Main goal is to write less code

## Destructuring

- [Practical examples](./destructuring.js)

## Classes

```javascript
// for in/of
const colors = ['red', 'blue', 'yellow'];
for (let color of colors){ // loop through array
  console.log(color);
}


```

## [Set](./set.js)


## Generator(*)

- A function can be enter and exit mutiple times

```javascript
  function* numbers(){

  }
  console.log(numbers)

```

## Promises

- status
  - pending
  - resolved.then()
  - rejected.catch()
- fetch(url)


## String API

- [str.substr(start[, length])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
  - returns the part of a string between the start index and a number of characters after it.
  - If start is a negative number, the index starts counting from the end of the string. Its value is capped at -str.length.
  - If length is omitted, substr() extracts characters to the end of the string.
  - If length is undefined, substr() extracts characters to the end of the string.
  - If length is a negative number, it is treated as 0.
  - for both start and length, NaN is treated as 0.

- str.substring(indexStart[, indexEnd])
  - returns the part of the string between the start and end indexes, or to the end of the string.

- str.lastIndexOf(searchValue[, fromIndex])
  - If searchValue is an empty string, then search result of fromIndex is returned.
  - fromIndex(optional):
    - The default value is +Infinity.
    - If fromIndex >= str.length, the whole string is searched.
    - If fromIndex < 0,  the behavior will be the same as if it would be 0.

- str.endsWith(searchString[, length])
  - length default value is the length of str
  - return true or false

- str.search(regexp)
  - executes a search for a match between a regular expression and this String object.
  - If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj).
  - return the index of first match or -1

- arr.indexOf(searchElement[, fromIndex])
  - fromIndex: The index to start the search at
  - returns the first index at which a given element can be found in the array, or -1 if it is not present.

- str.includes(searchString[, position])
  - determines whether one string may be found within another string,
  - returning true or false.
  - position: The position within the string at which to begin searching for searchString. (defaults to 0).

  - 'soemthing '.repeat(3).trim()

## Array API

[Array api examples](./arrayAPI.js)

- `'values' in array.Prototype` // false
- `'keys' in array.Prototype` // true

## JS foundation

- [getComputedStyle](./getComputedStyle.html)
- [無縫滾動](./無縫滾動.html)
- [offsetParent](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent)
- getAttribute()
- setAttribute()
- removeAttribute()
- [firstChild, firstElementChild](./firstChild.html) 處理兼容
- [createElement](./createElement.html), appendChild, insertBefore, removeChild

- [table](./table.html)