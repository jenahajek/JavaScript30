# Practice 5 - Flex Panel Gallery

## Objective
Make simple gallery with flexbox

## Procedure

### Markup
Gallery is made from panels. Each panel has three paragraphs.

``` html
<div class="panels">
  <div class="panel panel1">
    <p>Hey</p>
    <p>Let's</p>
    <p>Dance</p>
  </div>
  <div class="panel panel2">
    ...
  </div>
</div>
```

### CSS
Few things were going on in CSS.

1. set flexbox properties so the gallery is formatted correctly
2. prepare active states for opened gallery panel
3. set transitions

### JavaScript
This one was quite easy. We just had to listen for event and than toggle a class. There were few gotchas, though.

After we click a panel, it will trigger `toggleOpen` function and add class. That will trigger CSS transition, which in turn trigger `toggleActive` again.

``` js
<script>
  // Grab the panels
  const panels = document.querySelectorAll('.panel');

  // we'll get multiple transitions. Without specifying the correct one nothing happens
  function toggleActive(e) {
    // check what is being transitioned
    console.log(e.propertyName);

    // some browsers use flex, some flex-grow
    // so instead of condition like `if (e.propertyName !== 'flex-grow') return;`
    // we use .includes method
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('open-active');
    }
  }

  function toggleOpen() {
    this.classList.toggle('open');
  }


  // if we specify toggleOpen() it would trigger on page load
  // without brackets it is only referencing to the function
  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

</script>
```

#### Important syntaxes
Check for property
``` js
if (e.propertyName.includes('flex')) {...}
```

## TIL
- practiced nested flexbox
- how to listen for transitions better

## Extras
- nothing today

## Unsolved issues
- nothing really