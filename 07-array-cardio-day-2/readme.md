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
- console.log log option
``` js
// 2 - show object which is true
// 3 - shorter syntax
console.log(isAdult); // 1
console.log({isAdult}); // 2
```

- common syntax
``` js
const comment = comments.find(function(comment) {
  if (comment.id === 823423) {
    return true;
  }
});
```

- arrow function with explicit return
``` js
const comment2 = comments.find(comment => comment.id === 823423);
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