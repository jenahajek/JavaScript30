# Practice 7 - Array Cardio, day 2

## Objective
Methods for managing data in arrays.

## Procedure

### Markup
No markup this time.

### CSS
Nothing.

### JavaScript
Documented in the source code.

#### Important syntaxes
- convert node list to an array (exercise 6)
``` js
const links = Array.from(category.querySelectorAll('a')); // 2
```

- restructure the split result, put it into variables right away (exercise 7)
``` js
const [aLast, aFirst] = lastOne.split(', '); // 4
```

- reduce function (exercise 8)
``` js
const transportation = data.reduce(function(obj, item) { // 1
  // console.log(obj);
  // console.log(obj[item]);
  if (!obj[item]) { // 3
    obj[item] = 0;
  }
  obj[item]++; // 4
  return obj;
}, {}); // 2
```

## TIL
- [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some?v=control)
- [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every?v=control)
- [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find?v=control)
- [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex?v=control)
- [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice?v=control)

## Extras
- nothing today

## Unsolved issues
- nothing really