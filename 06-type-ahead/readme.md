# Practice 6 - Type ahead

## Objective
Build a search input with suggestion list

## Procedure

### Markup
Search field with unordered list for suggestions.
``` html
<form class="search-form">
  <input type="text" class="search" placeholder="City or State">
  <ul class="suggestions">
    <li>Filter for a city</li>
    <li>or a state</li>
  </ul>
</form>
```

### CSS
Basic styling.

### JavaScript
Firstly we need to tackle the functionality.
1. take the source data and transform them to an array, so it is possible to work with them.
2. build a function for filtering that array with `.filter()`, `.match()` and regular expressions.
3. make a function for displaying results. 
4. add events linteners

#### Important syntaxes
- turn array into one string with join()
``` js
const html = matchArray.map(place => {
  return ...;
}).join('');
```

- return html code, that can be inserted into markup
``` js
return `
  <li>
    <span class="name">${cityName}, ${stateName}</span>
    <span class="population">${numberWithCommas(place.population)}</span>
  </li>
`;

suggestions.innerHTML = foo;
```

## TIL
- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

## Extras
- nothing today

## Unsolved issues
- nothing really