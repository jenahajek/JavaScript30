# Practice 2 - JS Clock

## Objective
Update CSS variables by inputs and JS.

## Procedure

### Markup
Markup we need consists of label/input pairs. Important thing is custom data-attribute with unit.

```
<label for="spacing">Spacing:</label>
<input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">
```

### CSS
Set variables

``` css
:root {
    --base: #bada55;
    --spacing: 10px;
    --blur: 0px;
}

.image {
    filter: blur(var(--blur));
    padding: var(--spacing);
    background: var(--base);
}
```

### JavaScript
First, lets add basic behaviour. Listen for change on input and trigger `handleUpdate` function, which updates the CSS variable. It is crucial to add correct units, which we can extract from data-attribute. Name of the input needs to be same as CSS property.

``` js
<script>

  // make an array with inputs (it's actually a node list)
  const inputs = document.querySelectorAll("input");

  // function for updating css variable
  function handleUpdate() {
    
    // for some properties we need units, we store them in custom data-attribute
    // dataset set is an object, which contains all the data attributes from that specific element - it is easier way, how to extract data-attribute :)
    const suffix = this.dataset.sizing || '';

    // documentElement is <html> tag
    // add units if needed
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  // listen for value of each input
    // because inputs are not an array, but node list, we'll use .forEach method to loop through it
  inputs.forEach(input => input.addEventListener('change', handleUpdate));

</script>
```

Basic functionality is in place. We can enhance it little bit more:
``` js
  // trigger while we are changing the calue
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

```

#### Important syntaxes
Listen for each item in node list
``` js
inputs.forEach(input => input.addEventListener('change', handleUpdate));
```

## TIL
- CSS variables
- listen for events in node list
- dataset object

## Extras
- added grayscale filter

## Unsolved issues
- spacing can break layout