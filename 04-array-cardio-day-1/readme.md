# Practice 4 - Array Cardio, day 1

## Objective
Get hands on few array methods, play with it and learn something new.

## Procedure

### Markup
No markup this time, with one exception, where we use wikipedia code.

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
- [arrow function](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)
- [filter()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=control)
- [map()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map?v=control)
- [sort()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort?v=control)
- [reduce()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce?v=control)
- [split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

## Extras
- nothing today

## Unsolved issues
- nothing really